"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform vec2 u_r;
  uniform float u_time;
  uniform float u_scroll;
  uniform vec2 u_mouse;

  void main() {
    vec2 p = vUv * u_r;

    float scrollFactor = mix(1.0, 0.5, u_scroll);
    // Réduire la densité sur mobile pour améliorer les performances
    float density = 40.0;
    float s = min(u_r.x, u_r.y) / (density * scrollFactor);

    vec2 g = floor(p / s) * s + s * 0.5;

    float baseRadius = s * 0.25;
    float pulse = 0.15 * sin(u_time * 1.3 + g.x * 0.03 + g.y * 0.03);
    float radius = baseRadius + s * pulse * 0.5;

    float d = distance(p, g);
    float c = 1.0 - smoothstep(radius - s * 0.15, radius + s * 0.15, d);

    float mouseDist = distance(vUv, u_mouse);
    float mouseGlow = smoothstep(0.4, 0.0, mouseDist);

    vec3 inner = vec3(0.1, 1.0, 0.9);
    vec3 outer = vec3(0.0);

    vec3 color = mix(outer, inner, c);

    vec3 scrollTint = mix(vec3(0.0, 0.0, 0.0), vec3(0.4, 0.2, 0.7), u_scroll);
    color += scrollTint * 0.25 * c;

    color += inner * mouseGlow * 0.25;

    vec2 cell = fract(p / s) - 0.5;
    float gridLine = smoothstep(0.48, 0.5, max(abs(cell.x), abs(cell.y)));
    color += vec3(0.02) * (1.0 - gridLine);

    float vignette = smoothstep(0.9, 0.3, length(vUv - 0.5));
    color *= vignette;

    color += c * 0.12;

    gl_FragColor = vec4(color, 1.0);
  }
`;

type GridShaderPlaneProps = {
  mouseRef: MutableRefObject<{ x: number; y: number }>;
  scrollRef: MutableRefObject<number>;
};

function GridShaderPlane({ mouseRef, scrollRef }: GridShaderPlaneProps) {
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const { size } = useThree();

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_r.value = new THREE.Vector2(
        size.width,
        size.height
      );
    }
  }, [size]);

  useFrame((state) => {
    if (!materialRef.current) return;
    
    // Mettre à jour le scroll dans useFrame pour synchronisation
    try {
      if (typeof window !== "undefined" && window.document) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? window.scrollY / max : 0;
        scrollRef.current = Math.min(Math.max(ratio, 0), 1);
      }
    } catch (e) {
      // Ignorer les erreurs d'accès au DOM
    }
    
    // Mettre à jour tous les uniforms - c'est ce qui fait tourner l'animation
    materialRef.current.uniforms.u_time.value = state.clock.getElapsedTime();
    materialRef.current.uniforms.u_scroll.value = scrollRef.current;
    materialRef.current.uniforms.u_mouse.value.set(
      mouseRef.current.x,
      mouseRef.current.y
    );
  });

  return (
    <mesh>
      <planeGeometry args={[3, 3, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0 },
          u_r: { value: new THREE.Vector2(size.width, size.height) },
          u_scroll: { value: 0 },
          u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
      />
    </mesh>
  );
}

export function Hero3D() {
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const scrollRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Attendre que le composant soit monté
    setIsReady(true);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current = {
      x: Math.min(Math.max(x, 0), 1),
      y: Math.min(Math.max(1 - y, 0), 1),
    };
  };

  if (!isReady) {
    return (
      <div className="w-full h-full bg-[#020617] flex items-center justify-center">
        <div className="text-teal-400 text-sm">Initialisation...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0, 1.8], fov: 25 }}
        dpr={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance"
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
        frameloop="always"
      >
        <color attach="background" args={["#020617"]} />
        <GridShaderPlane mouseRef={mouseRef} scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}

