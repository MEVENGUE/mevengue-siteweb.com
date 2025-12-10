/**
 * Utilitaires pour gérer le responsive design
 */

export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

/**
 * Obtient les classes Tailwind responsive selon le type d'appareil
 */
export function getResponsiveClasses(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  const classes = [mobile];
  if (tablet) classes.push(`md:${tablet}`);
  if (desktop) classes.push(`lg:${desktop}`);
  return classes.join(" ");
}

/**
 * Détecte si on est sur mobile (SSR-safe)
 */
export function isMobile(width?: number): boolean {
  if (typeof window === "undefined") return false;
  return (width ?? window.innerWidth) < breakpoints.mobile;
}

/**
 * Détecte si on est sur tablette (SSR-safe)
 */
export function isTablet(width?: number): boolean {
  if (typeof window === "undefined") return false;
  const w = width ?? window.innerWidth;
  return w >= breakpoints.mobile && w < breakpoints.tablet;
}

/**
 * Détecte si on est sur desktop (SSR-safe)
 */
export function isDesktop(width?: number): boolean {
  if (typeof window === "undefined") return true; // Par défaut desktop en SSR
  return (width ?? window.innerWidth) >= breakpoints.tablet;
}

/**
 * Obtient la taille optimale pour les images selon l'appareil
 */
export function getImageSize(deviceType: "mobile" | "tablet" | "desktop"): {
  width: number;
  height: number;
} {
  switch (deviceType) {
    case "mobile":
      return { width: 640, height: 480 };
    case "tablet":
      return { width: 1024, height: 768 };
    case "desktop":
    default:
      return { width: 1920, height: 1080 };
  }
}

