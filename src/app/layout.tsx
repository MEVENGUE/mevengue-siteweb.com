import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/Navbar";

import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "FRANCK MEVENGUE – Cloud, Systèmes & Réseaux, DevOps & IA Portfolio",
  description:
    "Portfolio de FRANCK MEVENGUE – Projets en Informatique, Systèmes & Réseaux, Cloud, Monitoring, IA & Data.",
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="bg-black text-gray-100 h-full min-h-screen">
        <div className="w-full h-full flex flex-col min-h-screen">
          <div className="max-w-6xl mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col flex-1">
            <Navbar />
            <main className="flex-1 py-8 md:py-12 w-full">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

