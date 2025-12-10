"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className="py-3 md:py-4 lg:py-6 flex items-center justify-between relative">
      <Link href="/" className="flex items-center gap-2 z-50">
        <Image
          src="/icons/icon-192x192.png"
          alt="ANDY King Logo"
          width={32}
          height={32}
          className="w-7 h-7 md:w-8 md:h-8 rounded-xl object-cover"
          priority
        />
        <span className="text-xs md:text-sm lg:text-base font-semibold tracking-wide">
          FRANCK<span className="text-teal-400">MEVENGUE</span>
        </span>
      </Link>
      
      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-xs md:text-sm">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded-full transition ${
                active
                  ? "bg-white/10 text-teal-300"
                  : "text-gray-300 hover:text-teal-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Menu Mobile - Hamburger */}
      {isMobile && (
        <>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-300 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>

          {/* Menu Mobile - Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Menu Mobile - Panel */}
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-[#1a1b22] border-l border-white/10 z-40 transform transition-transform duration-300 md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col gap-2 p-6 pt-20">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition ${
                      active
                        ? "bg-white/10 text-teal-300"
                        : "text-gray-300 hover:bg-white/5 hover:text-teal-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
