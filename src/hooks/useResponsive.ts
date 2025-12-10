"use client";

import { useDevice } from "./useDevice";

interface ResponsiveConfig {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  default?: any;
}

/**
 * Hook pour gérer les valeurs responsive selon le type d'appareil
 * @example
 * const padding = useResponsive({ mobile: 'p-4', tablet: 'p-6', desktop: 'p-8' });
 * const fontSize = useResponsive({ mobile: 'text-sm', tablet: 'text-base', desktop: 'text-lg' });
 */
export function useResponsive<T>(config: ResponsiveConfig): T {
  const { isMobile, isTablet, isDesktop } = useDevice();

  if (isMobile && config.mobile !== undefined) {
    return config.mobile as T;
  }
  if (isTablet && config.tablet !== undefined) {
    return config.tablet as T;
  }
  if (isDesktop && config.desktop !== undefined) {
    return config.desktop as T;
  }
  return (config.default ?? config.desktop ?? config.tablet ?? config.mobile) as T;
}

/**
 * Hook pour obtenir des classes Tailwind responsive
 */
export function useResponsiveClasses(config: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const { isMobile, isTablet, isDesktop } = useDevice();

  if (isMobile && config.mobile) return config.mobile;
  if (isTablet && config.tablet) return config.tablet;
  if (isDesktop && config.desktop) return config.desktop;
  return config.desktop || config.tablet || config.mobile || "";
}

