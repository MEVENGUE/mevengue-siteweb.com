"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { projects } from "@/data/projects";
import { useState, useEffect } from "react";

const Hero3D = dynamic(() => import("@/components/Hero3D").then((mod) => ({ default: mod.Hero3D })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#020617] flex items-center justify-center">
      <div className="text-teal-400 text-sm animate-pulse">Chargement...</div>
    </div>
  ),
});

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div className="space-y-8 md:space-y-16 px-4 md:px-0">
      {/* HERO */}
      <section className="grid gap-6 md:gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4 md:space-y-6 order-2 md:order-1">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
            Cloud · Systèmes & Réseaux ·DevOps · Football Analytics · IA
          </p>
          <h1 className={`font-bold leading-tight ${
            isMobile ? "text-3xl" : isTablet ? "text-4xl md:text-5xl" : "text-4xl md:text-5xl lg:text-6xl"
          }`}>
            Franck MEVENGUE{" "}
            <span className="block text-teal-400">Engineer &amp; Builder</span>
          </h1>
          <p className={`text-gray-300 leading-relaxed ${
            isMobile ? "text-xs" : "text-sm md:text-base"
          }`}>
            Étudiant en Master Architecture Cloud, Systèmes &amp; Réseaux à
            SUPINFO. Je conçois des infrastructures Informatiques, des solutions de
            monitoring, des outils IA appliqués au football et des projets
            data/automation.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
            <Link
              href="/projects"
              className={`rounded-full bg-teal-500 text-black font-semibold hover:bg-teal-400 transition text-center ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              Voir mes projets
            </Link>
            <Link
              href="/about"
              className={`rounded-full border border-gray-600 hover:border-teal-400 hover:text-teal-300 transition text-center ${
                isMobile ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              À propos de moi
            </Link>
          </div>
        </div>

        <div
          className={`rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(45,212,191,0.15)] order-1 md:order-2 w-full ${
            isMobile ? "h-[240px]" : isTablet ? "h-[320px]" : "h-[320px] md:h-[420px]"
          }`}
        >
          <div className="w-full h-full">
            <Suspense fallback={
              <div className="w-full h-full bg-[#020617] flex items-center justify-center">
                <div className="text-teal-400 text-sm animate-pulse">Chargement de l'animation...</div>
              </div>
            }>
              <Hero3D />
            </Suspense>
          </div>
        </div>
      </section>

      {/* PROJETS MIS EN AVANT */}
      <section className="space-y-4 md:space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 md:gap-4">
          <h2 className={`font-semibold ${isMobile ? "text-lg" : "text-xl md:text-2xl"}`}>
            Projets récents
          </h2>
          <Link
            href="/projects"
            className={`text-teal-300 hover:text-teal-200 ${
              isMobile ? "text-[10px]" : "text-xs md:text-sm"
            }`}
          >
            Voir tous les projets →
          </Link>
        </div>
        <div className={`grid gap-4 md:gap-6 ${
          isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {featured.map((project) => (
            <Link
              key={project.slug}
              href="/projects"
              className="border border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                  {project.year}
                </p>
                <h3 className="text-base md:text-lg font-semibold group-hover:text-teal-300">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-300 line-clamp-3">
                  {project.short}
                </p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] md:text-[11px] px-2 py-1 rounded-full bg-black/40 border border-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

