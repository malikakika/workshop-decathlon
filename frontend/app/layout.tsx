"use client";

import { ReactNode } from "react";
import { VtmnLink } from "@vtmn/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, User, Route } from "lucide-react";
import Image from 'next/image'
import "./global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const getActiveClass = (path: string) =>
    pathname === path || pathname.startsWith(path) ? "text-blue-600 font-bold" : "text-gray-600";

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <header className="relative w-full h-[60px] bg-white shadow-md flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-gray-900"> Marche & HopSpots</h1>
          <Image src="/logo-decathlon.png" alt="Decathlon Logo" width={120} height={40} />
        </header>

        <main className="flex-grow p-2 pb-20">{children}</main>

        <nav className="bg-white shadow-md fixed bottom-0 w-full flex justify-around items-center py-4 border-t">
          {[
            { href: "/", label: "Accueil", icon: <Home size={24} /> },
            { href: "/trajets", label: "Trajets", icon: <Route size={24} /> },
            { href: "/association", label: "Collectivité", icon: <Map size={24} /> },
            { href: "/profile", label: "Profil", icon: <User size={24} /> },
          ].map((item) => (
            <Link key={item.href} href={item.href} passHref legacyBehavior>
              <VtmnLink className={`flex flex-col items-center space-y-1 ${getActiveClass(item.href)} hover:text-blue-800`}>
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </VtmnLink>
            </Link>
          ))}
        </nav>
      </body>
    </html>
  );
}
