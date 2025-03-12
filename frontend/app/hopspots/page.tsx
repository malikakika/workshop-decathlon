"use client";

import {  VtmnTextInput,VtmnButton } from "@vtmn/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const handleLogin = async () => {
    router.push("/trajets");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">Connexion</h1>
      <label htmlFor="email">Email</label>

      <VtmnTextInput id="email" placeholder="Entrez votre email" identifier={""} />
      <label htmlFor="motdepasse">Mot de passe</label>

      <VtmnTextInput id="motdepasse" placeholder="Entrez votre mot de passe" identifier={""} />

      <VtmnButton variant="primary" className="mt-4" onClick={handleLogin}>Se connecter</VtmnButton>
    </div>
  );
}

