"use client";

import Link from "next/link";

const trajets = [
  { id: "1", name: "Parcours Nature", description: "Un magnifique parcours en pleine nature." },
  { id: "2", name: "Tour de la Ville", description: "Un trajet urbain à travers les lieux emblématiques." },
  { id: "3", name: "Balade Côtière", description: "Profitez de l'air marin et des paysages magnifiques." },
  { id: "4", name: "Sentier de Montagne", description: "Un défi sportif avec une vue imprenable." },
  { id: "5", name: "Forêt Enchantée", description: "Un trajet en pleine nature, parfait pour la détente." },
  { id: "6", name: "Parc Urbain", description: "Une boucle rapide dans un espace vert en ville." },
];

export default function TrajetsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">🌍 Choisissez un trajet</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trajets.map((trajet) => (
          <div key={trajet.id} className="flex flex-col justify-between p-4 border rounded-lg bg-white shadow-md h-40">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{trajet.name}</h2>
              <p className="text-sm text-gray-600">{trajet.description}</p>
            </div>
            <Link href={`/trajets/${trajet.id}`} className="w-full">
              <button className="mt-3 w-full px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
                Voir le trajet
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
