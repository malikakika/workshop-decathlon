"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// 📍 Définition des trajets
const trajets: Record<string, { name: string; coordinates: LatLngExpression[] }> = {
  "1": {
    name: "Parcours Nature",
    coordinates: [
      [48.8584, 2.2945], // Tour Eiffel
      [48.8606, 2.3376], // Louvre
      [48.8566, 2.3522], // Notre-Dame
    ],
  },
  "2": {
    name: "Tour de la Ville",
    coordinates: [
      [48.8566, 2.3522],
      [48.8625, 2.3696],
      [48.853, 2.3499],
    ],
  },
};

// 🎨 Icônes personnalisées
const startIcon = new Icon({
  iconUrl: "/assets/start.svg",
  iconSize: [30, 30],
});
const finishIcon = new Icon({
  iconUrl: "/assets/finish.svg",
  iconSize: [30, 30],
});
const userIcon = new Icon({
  iconUrl: "/assets/user.svg",
  iconSize: [25, 25],
});

export default function MapPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const trajet = trajets[id as keyof typeof trajets];

  const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
  const [steps, setSteps] = useState(0);
  const [sensor, setSensor] = useState<any | null>(null);

  // 📡 Géolocalisation en temps réel
  useEffect(() => {
    if (typeof window === "undefined") return;

    let watchId: number;

    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => console.error("Erreur de géolocalisation :", error),
        { enableHighAccuracy: true }
      );
    }

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  // 🏃‍♂️ Gestion du Step Counter natif
  useEffect(() => {
    if (typeof window === "undefined") return;

    async function setupStepCounter() {
      if (!("permissions" in navigator)) {
        console.warn("Permissions API non supportée");
        return;
      }

      try {
        const permissionStatus = await navigator.permissions.query({ name: "accelerometer" as PermissionName });
        if (permissionStatus.state === "denied") {
          console.warn("Accès aux capteurs refusé !");
          return;
        }

        if ("StepCounter" in window) {
          const stepSensor = new (window as any).StepCounter();
          stepSensor.start();
          stepSensor.onreading = () => {
            setSteps(stepSensor.steps);
          };
          setSensor(stepSensor);
        } else {
          console.warn("StepCounter non supporté par cet appareil");
        }
      } catch (error) {
        console.error("Erreur lors de l'activation du StepCounter", error);
      }
    }

    setupStepCounter();

    return () => {
      if (sensor) {
        sensor.stop();
      }
    };
  }, [sensor]);

  if (!trajet) {
    return <p className="text-red-500 p-6 text-center">🚨 Trajet non trouvé</p>;
  }

  return (
    <div className="relative w-full h-screen">
      {/* 🌍 Carte en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          key={`map-${id}`}
          center={trajet.coordinates[0] as LatLngExpression}
          zoom={14}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          <Polyline positions={trajet.coordinates} pathOptions={{ color: "#3743B9", dashArray: "5, 10" }} />
          <Marker position={trajet.coordinates[0]} icon={startIcon} />
          <Marker position={trajet.coordinates[trajet.coordinates.length - 1]} icon={finishIcon} />
          {userLocation && <Marker position={userLocation} icon={userIcon} />}
        </MapContainer>
      </div>

      {/* 📊 Bloc des compteurs (position fixe en bas) */}
      <div className="absolute bottom-[280px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white p-6 rounded-xl shadow-lg text-center">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">🏆 Weekly Record !</h3>
          <button className="bg-[#3743B9] text-white px-3 py-1 text-sm rounded-full">Voir +</button>
        </div>
        <div className="flex justify-between items-center mt-4 text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-900">5</h4>
            <p className="text-xs text-gray-500">Activités</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-900">2h 54m</h4>
            <p className="text-xs text-gray-500">Temps</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-bold text-gray-900">{steps}</h4>
            <p className="text-xs text-gray-500">Pas effectués</p>
          </div>
        </div>
      </div>
    </div>
  );
}
