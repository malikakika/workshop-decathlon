"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState("/default-avatar.png");
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+33 6 12 34 56 78");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error] = useState("");

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        
        {/* 🏆 TITRE */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Mon Profil</h1>

        {/* 🖼️ AVATAR */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
            <Image src={avatar} alt="Avatar" width={112} height={112} className="object-cover w-full h-full" priority />
          </div>
          <label className="cursor-pointer text-sm text-blue-600 hover:underline">
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
            Modifier l’avatar
          </label>
        </div>

        {/* 📌 FORMULAIRE INFOS UTILISATEUR */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom & Prénom</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input 
              type="tel" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>

          {/* 💾 BOUTON SAUVEGARDER */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200">
            Sauvegarder
          </button>
        </div>

        {/* 🔒 MODIFICATION DU MOT DE PASSE */}
        <h2 className="text-lg font-semibold mt-8 mb-4">Modifier mon mot de passe</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nouveau mot de passe</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>

          {/* 🔄 BOUTON METTRE À JOUR */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200">
            Mettre à jour
          </button>
        </div>
      </div>
    </div>
  );
}
