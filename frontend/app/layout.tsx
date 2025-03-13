"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Head from "next/head"; // ✅ Permet d'ajouter le manifest.json
import "./global.css";
import homeIcon from "./assets/home.png";
import mapIcon from "./assets/map.svg";
import communityIcon from "./assets/comunity.svg";
import profileIcon from "./assets/profil.svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPWA(true);
    }
  }, []);

  const getActiveClass = (path: string) =>
    pathname === path || pathname.startsWith(path) ? "text-blue-600 font-bold" : "text-gray-600";

  return (
    <html lang="fr">
      <Head>
        {/* ✅ Ajout du Manifest pour PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5E365F" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>

      <body className="min-h-screen flex flex-col bg-gray-50 font-roboto">
        {/* HEADER */}
        <header className="relative w-full h-[60px] bg-white shadow-md flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-gray-900">Marche & HopSpots</h1>
          <Image src="/logo-decathlon.png" alt="Decathlon Logo" width={120} height={40} />
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="flex-grow pb-20">{children}</main>

        {/* ✅ Ajouter la barre de navigation uniquement si l’app est installée en PWA */}
        {!isPWA && !["/login", "/register"].includes(pathname) && (
          <nav className="bg-[#3743B9] fixed bottom-0 w-full flex justify-around items-center py-4 border-t rounded-t-[200px] px-6">
            {[
              { href: "/", label: "Accueil", icon: homeIcon },
              { href: "/trajets", label: "Map", icon: mapIcon },
              { href: "/association", label: "Collectivité", icon: communityIcon },
              { href: "/profile", label: "Profil", icon: profileIcon },
            ].map((item) => (
              <Link key={item.href} href={item.href} passHref legacyBehavior>
                <a className={`flex flex-col items-center space-y-1 no-underline ${getActiveClass(item.href)}`}>
                  <Image src={item.icon} alt={item.label} width={28} height={28} className="mb-1" />
                  <span className="text-xs font-medium text-white">{item.label}</span>
                </a>
              </Link>
            ))}
          </nav>
        )}
      </body>
    </html>
  );
}
