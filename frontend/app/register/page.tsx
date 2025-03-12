'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    if (!email.includes('@')) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    setError('');
    router.push('/trajets');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#3743B9] rounded-t-[170px] ">
      <div className="w-full max-w-md bg-[#3743B9] p-6 rounded-t-[50px] text-center relative overflow-hidden font-['Roboto'] shadow-lg">
        <div className="absolute top-0 left-0 w-full h-[180px] flex items-center justify-center">
          <svg width="240" height="195" viewBox="0 0 240 195" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.801758" y="-32.6965" width="244.664" height="244.278" fill="white" />
          </svg>
        </div>

        <div className="mt-[140px] space-y-4">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="text-left">
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border-none bg-[#B6DFF3] rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-800 placeholder-gray-500"
              placeholder="ex: jon.smith@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-white">Mot de passe</label>
            <input
              type="password"
              className="w-full px-4 py-3 border-none bg-[#B6DFF3] rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-800 placeholder-gray-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-white text-sm flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>
              J'accepte les <Link href="#" className="underline">Conditions Générales</Link>
            </span>
          </div>

          <button
            className="w-full border border-white text-white font-semibold py-2 rounded-full transition-all duration-200 hover:bg-white hover:text-[#3743B9]"
            onClick={handleRegister}
          >
            S’inscrire
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 bg-white py-2 rounded-full text-gray-700 mt-2">
            S’inscrire avec Google
          </button>
        </div>

        <div className="text-center text-sm text-white mt-6">
          Déjà un compte ?{' '}
          <Link href="/login" className="font-semibold underline text-[#FFEA28]">
            Connecte toi
          </Link>
        </div>
      </div>
    </div>
  );
}
