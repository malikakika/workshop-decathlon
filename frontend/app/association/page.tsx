"use client";

import { useState } from "react";
import Image from "next/image";

const associations = [
  { id: 1, name: "Sport pour Tous", description: "Encourage la pratique du sport pour tous les âges et niveaux.", logo: "/sport-pour-tous.png" },
  { id: 2, name: "Green Walkers", description: "Marchez pour l'environnement et la protection de la planète.", logo: "/green-walkers.png" },
  { id: 3, name: "Solidarité Running", description: "Courir pour des causes humanitaires et solidaires.", logo: "/solidarite-running.png" },
  { id: 4, name: "Défi Santé", description: "Aide à améliorer la santé par l'activité physique régulière.", logo: "/defi-sante.png" },
  { id: 5, name: "Marche & Bien-être", description: "Promouvoir le bien-être mental et physique à travers la marche.", logo: "/marche-bien-etre.png" },
];

export default function AssociationsPage() {
  const [adhesions, setAdhesions] = useState<{ [key: number]: boolean }>({});

  const handleAdhere = (id: number) => {
    setAdhesions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        🌍 Rejoignez une Association
      </h1>
      <p className="text-gray-700 text-center max-w-md mb-6">
        Sélectionnez une association et commencez à marcher pour une cause qui vous tient à cœur.
      </p>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {associations.map((asso) => (
          <div key={asso.id} className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md">
            <Image
              src={asso.logo}
              alt={asso.name}
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
            <h2 className="text-lg font-semibold text-gray-900 mt-3">{asso.name}</h2>
            <p className="text-sm text-gray-600 text-center mt-1">{asso.description}</p>
            <button
              onClick={() => handleAdhere(asso.id)}
              className={`mt-4 px-6 py-2 text-sm font-semibold rounded-lg transition-all duration-200
                ${adhesions[asso.id] ? "bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}
              `}
            >
              {adhesions[asso.id] ? "Adhéré ✅" : "Adhérer"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
