"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-center px-4 sm:px-8 space-y-12">
      
      <motion.section 
        className="text-center flex flex-col items-center w-full max-w-2xl mt-12 sm:mt-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Transformez chaque pas en impact positif ! 🌍
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mt-3">
          Marchez, découvrez des <strong>HopSpots</strong> et soutenez une cause en un seul geste.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/trajets" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
              Trouver un trajet
            </button>
          </Link>
          <Link href="/hopspots" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-semibold text-blue-600 bg-white border border-blue-600 hover:bg-blue-100 rounded-lg shadow-md transition-all duration-200">
              Explorer les HopSpots
            </button>
          </Link>
        </div>
      </motion.section>

      <motion.section 
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">🌍 Découvrez les HopSpots près de chez vous</h3>
        <p className="text-gray-700 mt-1">Choisissez un parcours et voyez en direct l’impact de votre marche.</p>
        <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mt-4">
          <span className="text-gray-600 text-sm sm:text-base">🗺️ Carte interactive (à intégrer)</span>
        </div>
      </motion.section>

      {/* 🔥 CHALLENGES & COMMUNITY SECTION */}
<motion.section 
  className="bg-blue-50 p-6 rounded-lg w-full max-w-2xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 text-center">
    🔥 Défis & Communauté
  </h3>
  <p className="text-blue-700 mt-1 text-center">
    Rejoignez les défis hebdomadaires et progressez avec d’autres marcheurs.
  </p>

  {/* 📍 Cartes de défis - Alignement parfait */}
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* 🏆 Carte 1 */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between h-[180px]">
      <h4 className="font-bold text-gray-900 text-sm sm:text-base text-center">Défi 5KM</h4>
      <p className="text-gray-600 text-xs sm:text-sm text-center">
        Marchez 5KM cette semaine
      </p>
      <Link href="/defis" className="w-full">
        <button className="mt-2 w-full px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
          👟 Participer
        </button>
      </Link>
    </div>

    {/* 🏆 Carte 2 */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-between h-[180px]">
      <h4 className="font-bold text-gray-900 text-sm sm:text-base text-center">Défi HopSpots</h4>
      <p className="text-gray-600 text-xs sm:text-sm text-center">
        Activez 3 HopSpots cette semaine
      </p>
      <Link href="/defis" className="w-full">
        <button className="mt-2 w-full px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
          📍 Relever le défi
        </button>
      </Link>
    </div>
  </div>
</motion.section>


      <motion.section 
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            Prêt à marcher ? 🚶‍♂️
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">
            Rejoignez-nous dès maintenant et commencez votre parcours !
          </p>
        </div>

        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Link href="/register" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-200">
              Créer un compte
            </button>
          </Link>
          <Link href="/login" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-blue-600 bg-white border border-blue-600 hover:bg-blue-100 rounded-lg shadow-md transition-all duration-200">
              Se connecter
            </button>
          </Link>
        </div>
      </motion.section>

    </div>
  );
}
