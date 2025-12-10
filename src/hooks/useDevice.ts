"use client";

import { useState, useEffect } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";
export type BrowserType = "chrome" | "firefox" | "safari" | "edge" | "other";

interface DeviceInfo {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  screenHeight: number;
  browser: BrowserType;
  isTouchDevice: boolean;
  orientation: "portrait" | "landscape";
}

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    deviceType: "desktop",
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: typeof window !== "undefined" ? window.innerWidth : 1920,
    screenHeight: typeof window !== "undefined" ? window.innerHeight : 1080,
    browser: "other",
    isTouchDevice: false,
    orientation: "landscape",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const detectDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Détection du type d'appareil
      let deviceType: DeviceType = "desktop";
      let isMobile = false;
      let isTablet = false;
      let isDesktop = true;

      if (width < 640) {
        deviceType = "mobile";
        isMobile = true;
        isDesktop = false;
      } else if (width >= 640 && width < 1024) {
        deviceType = "tablet";
        isTablet = true;
        isDesktop = false;
      }

      // Détection du navigateur
      const userAgent = navigator.userAgent.toLowerCase();
      let browser: BrowserType = "other";

      if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
        browser = "chrome";
      } else if (userAgent.includes("firefox")) {
        browser = "firefox";
      } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        browser = "safari";
      } else if (userAgent.includes("edg")) {
        browser = "edge";
      }

      // Détection tactile
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0;

      // Orientation
      const orientation: "portrait" | "landscape" =
        width > height ? "landscape" : "portrait";

      setDeviceInfo({
        deviceType,
        isMobile,
        isTablet,
        isDesktop,
        screenWidth: width,
        screenHeight: height,
        browser,
        isTouchDevice,
        orientation,
      });
    };

    // Détection initiale
    detectDevice();

    // Écoute des changements de taille
    window.addEventListener("resize", detectDevice);
    window.addEventListener("orientationchange", detectDevice);

    return () => {
      window.removeEventListener("resize", detectDevice);
      window.removeEventListener("orientationchange", detectDevice);
    };
  }, []);

  return deviceInfo;
}

