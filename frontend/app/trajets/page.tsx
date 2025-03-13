import { notFound } from "next/navigation";

const trajets = [
  { id: "1", name: "Parcours Nature", description: "Un magnifique parcours en pleine nature." },
  { id: "2", name: "Tour de la Ville", description: "Un trajet urbain à travers les lieux emblématiques." },
  { id: "3", name: "Balade Côtière", description: "Profitez de l'air marin et des paysages magnifiques." },
  { id: "4", name: "Sentier de Montagne", description: "Un défi sportif avec une vue imprenable." },
  { id: "5", name: "Forêt Enchantée", description: "Un trajet en pleine nature, parfait pour la détente." },
  { id: "6", name: "Parc Urbain", description: "Une boucle rapide dans un espace vert en ville." },
];

// ✅ Utilisation de Server Component pour charger les trajets
export default function TrajetPage({ params }: { params: { id: string } }) {
  const trajet = trajets.find((t) => t.id === params.id);

  if (!trajet) {
    notFound(); // 🚨 Redirige vers la page 404 si l'ID n'existe pas
  }

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{trajet?.name}</h1>
      <p className="text-lg text-gray-700">{trajet?.description}</p>
    </div>
  );
}
