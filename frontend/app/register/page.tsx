'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

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
    <div className="flex flex-col items-center w-full h-screen bg-white px-6 py-8">
      {/* Logo */}
      <div className="mt-10">
        <Image src={logo} alt="HopOp Logo" width={332.677} height={212.975} />
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

        <div className="text-sm flex items-center space-x-2 mb-4">
          <input type="checkbox" className="w-4 h-4" />
          <span>
            J'accepte les{' '}
            <Link href="#" className="text-blue-500 underline">
              Conditions Générales d'utilisation
            </Link>
          </span>
        </div>

        <button
          className="w-full bg-[#2E3AB2] text-white font-semibold py-3 rounded-full text-lg"
          onClick={handleRegister}
        >
          S’inscrire
        </button>

        <div className="mt-4 space-y-2">
          <button className="w-full flex items-center justify-center border border-gray-300 bg-white py-3 rounded-full text-gray-700 text-lg">
            S’inscrire avec <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
<path d="M7.58408 0.648087C4.83986 1.63282 2.49939 3.78734 1.19983 6.50362C0.745616 7.44209 0.417572 8.44005 0.222007 9.47104C-0.276368 12.0353 0.0706016 14.7648 1.19983 17.1044C1.93162 18.6311 2.98515 19.9859 4.25948 21.0433C5.46441 22.0479 6.86491 22.7881 8.35372 23.2045C10.2274 23.7332 12.2272 23.7199 14.1197 23.2705C15.8294 22.8608 17.4443 22.0016 18.7313 20.7591C20.0939 19.444 21.0654 17.719 21.5827 15.8619C22.1442 13.833 22.2199 11.6718 21.8666 9.59661C18.3338 9.59661 14.8011 9.59661 11.262 9.59661C11.262 11.1299 11.262 12.6698 11.262 14.2031C13.3059 14.2031 15.3562 14.2031 17.4002 14.2031C17.1605 15.6769 16.3277 17.0185 15.1417 17.8512C14.3973 18.3733 13.5457 18.717 12.6625 18.8756C11.773 19.0342 10.8582 19.054 9.97502 18.869C9.0729 18.6839 8.21494 18.2874 7.46422 17.7322C6.2656 16.8532 5.35086 15.5579 4.88402 14.1105C4.40457 12.6367 4.39826 10.9911 4.88402 9.5173C5.21838 8.4797 5.77984 7.51479 6.51794 6.73493C7.42637 5.75681 8.60607 5.06287 9.88039 4.77868C10.9718 4.53415 12.1199 4.58042 13.1861 4.91747C14.0945 5.20827 14.9272 5.72376 15.6149 6.4111C16.3088 5.69072 16.9964 4.96374 17.6904 4.24336C18.05 3.85343 18.4348 3.48333 18.7881 3.08018C17.7408 2.0624 16.5044 1.24289 15.1606 0.727395C12.7508 -0.217686 10.0192 -0.237513 7.58408 0.648087Z" fill="white"/>
<path d="M7.584 0.648117C10.0191 -0.237483 12.7507 -0.217655 15.1732 0.720816C16.5169 1.23631 17.7471 2.05582 18.8006 3.0736C18.4473 3.47014 18.0688 3.84685 17.7029 4.23678C17.009 4.95716 16.3213 5.68414 15.6274 6.40452C14.9398 5.71719 14.107 5.19508 13.1986 4.91089C12.1325 4.57384 10.9843 4.52757 9.89292 4.77211C8.6186 5.05629 7.4389 5.75684 6.53047 6.72835C5.79237 7.50821 5.23091 8.47312 4.89655 9.51073C3.66639 8.51277 2.43622 7.50821 1.20605 6.51026C2.49931 3.78737 4.83978 1.63285 7.584 0.648117Z" fill="#E94435"/>
<path d="M0.222007 9.47108C0.417572 8.44009 0.751925 7.44213 1.19983 6.50366C2.43 7.50161 3.66016 8.50617 4.89033 9.50413C4.40457 10.9779 4.41088 12.6236 4.89033 14.0974C3.66016 15.0953 2.43 16.0999 1.19983 17.0978C0.0706016 14.7715 -0.276368 12.0354 0.222007 9.47108Z" fill="#F8BB15"/>
<path d="M11.2676 9.59003C14.8004 9.59003 18.3332 9.59003 21.8723 9.59003C22.2256 11.6652 22.1499 13.8264 21.5884 15.8553C21.0711 17.7124 20.0996 19.444 18.7369 20.7526C17.5446 19.781 16.346 18.8095 15.16 17.838C16.346 17.0119 17.1787 15.6637 17.4184 14.1899C15.3745 14.1899 13.3242 14.1899 11.2802 14.1899C11.2613 12.6632 11.2676 11.1299 11.2676 9.59003Z" fill="#547DBE"/>
<path d="M1.2002 17.1044C2.43036 16.1065 3.66053 15.1019 4.8907 14.1039C5.35753 15.5579 6.27227 16.8467 7.47089 17.7257C8.22161 18.2808 9.07957 18.6707 9.98169 18.8624C10.8649 19.0474 11.7859 19.0276 12.6691 18.869C13.5523 18.7104 14.404 18.3667 15.1484 17.8446C16.3407 18.8161 17.5393 19.7876 18.7253 20.7592C17.4384 22.0083 15.8234 22.8608 14.1138 23.2706C12.2275 23.72 10.2277 23.7332 8.34778 23.2045C6.85896 22.7881 5.45846 22.0479 4.25353 21.0433C2.98551 19.9793 1.93199 18.6245 1.2002 17.1044Z" fill="#34A751"/>
</svg>

          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 bg-white py-3 rounded-full text-gray-700 text-lg">
            S’inscrire avec <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
<path d="M9.5712 4.90831H14.3568V0H9.5712C7.98467 0 6.46313 0.646405 5.34129 1.79701C4.21944 2.94762 3.5892 4.50818 3.5892 6.13538V9.81661H0V14.7249H3.5892V22.0874H8.3748V14.7249H11.964L13.1604 9.81661H8.3748V6.13538C8.3748 5.80994 8.50085 5.49783 8.72521 5.26771C8.94958 5.03759 9.25389 4.90831 9.5712 4.90831Z" fill="#0085FF"/>
</svg>

          </button>
        </div>
      </div>

      <div className="text-center text-sm text-[#888888] mt-6">
        Déjà un compte ?{' '}
        <Link href="/login" className="text-[#3643BA] font-semibold">
          Connecte toi
        </Link>
      </div>
    </div>
  );
}
