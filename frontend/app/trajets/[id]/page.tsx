"use client";

import { useRouter } from "next/navigation";

const trajetDetails: Record<string, { name: string; description: string }> = {
  "1": { name: "Parcours Nature", description: "Un magnifique parcours en pleine nature." },
  "2": { name: "Tour de la Ville", description: "Un trajet urbain à travers les lieux emblématiques." },
};

export default function TrajetDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const trajet = trajetDetails[params.id];

  if (!trajet) {
    return <p className="text-red-500 p-6 text-center">🚨 Trajet non trouvé</p>;
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">{trajet.name}</h1>
      <p className="mb-4 text-gray-700">{trajet.description}</p>

      {/* ✅ Correction de la navigation vers /trajets/[id]/map */}
      <button
        className="mt-3 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200"
        onClick={() => router.push(`/trajets/${params.id}/map`)}
      >
        🚀 Démarrer le trajet
      </button>
    </div>
  );
}
