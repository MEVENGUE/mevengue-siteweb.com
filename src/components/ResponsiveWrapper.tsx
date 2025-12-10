"use client";

import { ReactNode } from "react";
import { useDevice } from "@/hooks/useDevice";

interface ResponsiveWrapperProps {
  children?: ReactNode;
  mobile?: ReactNode;
  tablet?: ReactNode;
  desktop?: ReactNode;
  className?: string;
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
}

/**
 * Composant wrapper pour afficher du contenu différent selon le type d'appareil
 */
export function ResponsiveWrapper({
  children,
  mobile,
  tablet,
  desktop,
  className = "",
  hideOnMobile = false,
  hideOnTablet = false,
  hideOnDesktop = false,
}: ResponsiveWrapperProps) {
  const { isMobile, isTablet, isDesktop } = useDevice();

  // Masquer selon l'appareil
  if ((hideOnMobile && isMobile) || (hideOnTablet && isTablet) || (hideOnDesktop && isDesktop)) {
    return null;
  }

  // Afficher la version spécifique si fournie
  if (isMobile && mobile !== undefined) {
    return <div className={className}>{mobile}</div>;
  }
  if (isTablet && tablet !== undefined) {
    return <div className={className}>{tablet}</div>;
  }
  if (isDesktop && desktop !== undefined) {
    return <div className={className}>{desktop}</div>;
  }

  // Sinon, afficher le contenu par défaut
  return <div className={className}>{children}</div>;
}

