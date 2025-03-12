"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email.includes("@")) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }
    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    setError("");
    router.push("/trajets");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Connexion 🔑</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Entrez votre email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Entrez votre mot de passe" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200" 
            onClick={handleLogin}
          >
            Se connecter
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-4">
          <Link href="/forgot-password" className="text-blue-600 hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>
        
        <div className="text-center text-sm text-gray-600 mt-2">
          Pas encore inscrit ?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}
