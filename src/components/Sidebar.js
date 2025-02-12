'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón de menú flotante */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-pink-500 text-white rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar superpuesta */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <nav className="flex flex-col p-6 space-y-4 text-lg">
          <Link href="/">
            <span className="block p-2 text-pink-600 hover:bg-pink-100 rounded">Inicio</span>
          </Link>
          <Link href="/album">
            <span className="block p-2 text-pink-600 hover:bg-pink-100 rounded">Álbum de Fotos</span>
          </Link>
        </nav>
      </div>

      {/* Fondo oscuro cuando la sidebar está abierta */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
