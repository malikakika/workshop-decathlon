'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email.includes('@')) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }
    setError('');
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-white px-6 py-8">
      {/* Logo */}
      <div className="mt-10">
        <Image src={logo} alt="HopOp Logo" width={150} height={60} />
      </div>

      <div className="w-full max-w-sm mt-10">
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-[#E3F2FD] rounded-full text-gray-800 placeholder-gray-500 focus:outline-none"
            placeholder="ex: jon.smith@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium">Mot de passe</label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-[#E3F2FD] rounded-full text-gray-800 placeholder-gray-500 focus:outline-none"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-right mb-4">
          <Link href="#" className="text-[#3643BA]  text-sm font-medium underline">
            Mot de passe oublié ?
          </Link>
        </div>

        <button
          className="w-full bg-[#2E3AB2] text-white font-semibold py-3 rounded-full text-lg"
          onClick={handleLogin}
        >
          Se connecter
        </button>

       
      </div>

      <div className="text-center text-sm text-gray-700 mt-6">
        Pas encore de compte ?{' '}
        <Link href="/register" className="text-[#3643BA]  font-semibold">
          Inscris-toi
        </Link>
      </div>
    </div>
  );
}
