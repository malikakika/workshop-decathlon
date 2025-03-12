"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const trajets: Record<string, { name: string; coordinates: LatLngExpression[] }> = {
  "1": {
    name: "Parcours Nature",
    coordinates: [
      [48.8584, 2.2945], 
      [48.8606, 2.3376], 
      [48.8566, 2.3522],
    ],
  },
  "2": {
    name: "Tour de la Ville",
    coordinates: [
      [48.8566, 2.3522], 
      [48.8625, 2.3696], 
      [48.8530, 2.3499],
    ],
  },
};

export default function MapPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const trajet = trajets[id as keyof typeof trajets];

  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
  const [steps, setSteps] = useState(0);
  const [lastAcceleration, setLastAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => console.error(error),
        { enableHighAccuracy: true }
      );
    }

    // Détection des pas avec DeviceMotion API
    const handleMotion = (event: DeviceMotionEvent) => {
      if (event.accelerationIncludingGravity) {
        const x = event.accelerationIncludingGravity.x ?? 0;
        const y = event.accelerationIncludingGravity.y ?? 0;
        const z = event.accelerationIncludingGravity.z ?? 0;

        const deltaX = Math.abs(x - lastAcceleration.x);
        const deltaY = Math.abs(y - lastAcceleration.y);
        const deltaZ = Math.abs(z - lastAcceleration.z);

        if (deltaX + deltaY + deltaZ > 2) {
          setSteps((prev) => prev + 1);
        }
        setLastAcceleration({ x, y, z });
      }
    };

    window.addEventListener("devicemotion", handleMotion);

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [lastAcceleration]);

  if (!trajet) {
    return <p className="text-red-500 p-6 text-center">🚨 Trajet non trouvé</p>;
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* 🌍 Carte réduite et bien intégrée */}
      <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          key={`map-${id}`}
          center={trajet.coordinates[0] as LatLngExpression}
          zoom={14}
          style={{ height: "50vh", width: "100%" }}
          className="rounded-xl border border-gray-200"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {userLocation && <Marker position={userLocation} />}
          <Polyline positions={trajet.coordinates} pathOptions={{ color: "#0077ff" }} />
        </MapContainer>
      </div>

      {/* 📊 Infos sur l'activité */}
      <div className="w-full max-w-md mt-6 bg-white p-4 rounded-xl shadow-md text-center">
        <h3 className="text-xl font-bold text-gray-900">🏃‍♂️ Activité en cours</h3>
        <p className="text-gray-600">{trajet.name}</p>
        <div className="flex justify-around items-center mt-4">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-blue-600">{steps}</h4>
            <p className="text-sm text-gray-500">Pas effectués</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold text-green-600">{(steps * 0.8).toFixed(2)} m</h4>
            <p className="text-sm text-gray-500">Distance parcourue</p>
          </div>
        </div>
      </div>

      {/* 🔙 Bouton de retour mieux positionné */}
      <button
        className="absolute bottom-6 left-6 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg text-sm font-semibold"
        onClick={() => router.push("/trajets")}
      >
        ⬅️ Quitter
      </button>
    </div>
  );
}
