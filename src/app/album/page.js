'use client';

import { useEffect } from 'react'; // Importa useEffect
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';

const photos = [
  { src: '/foto_1.jpeg', alt: 'Nuestro primer 14 de Febrero.' },
  { src: '/foto_2.jpeg', alt: 'Mi mejor viaje' },
  { src: '/foto_3.jpeg', alt: 'El día era nublado, pero tú le diste luz.' },
  { src: '/foto_4.jpeg', alt: 'Un festejo increíble.' },
  { src: '/foto_5.jpeg', alt: 'Finos señores.' },
  { src: '/foto_6.jpeg', alt: 'Gracias por cada momento.' },
  { src: '/foto_7.jpeg', alt: 'Movies night.' },
  { src: '/foto_8.jpeg', alt: 'Un año contigo.' },
  { src: '/foto_9.jpeg', alt: '🫣' },
  { src: '/foto_10.jpeg', alt: 'Navidad de novios.' },
  { src: '/foto_11.jpeg', alt: 'Acabando The Office.' },
  { src: '/foto_12.jpeg', alt: 'Acho, jurao te ves bien linda.' },
];

export default function AlbumPage() {
  // Efecto para reproducir música automáticamente al cargar la página
  useEffect(() => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.play().catch(() => {
        // Maneja errores de reproducción automática (por políticas del navegador)
        console.log('La reproducción automática fue bloqueada.');
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 p-8 relative">
      {/* Audio de fondo */}
      <audio id="background-music" loop>
        <source src="/Sade_-_Kiss_Of_Life_-_Official_-_1993_[_YouConvert.net_].mp3" type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>

      <Sidebar />
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">Álbum de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center w-80 h-96 mx-auto"
          >
            <div className="relative w-64 h-64">
              <Image
                src={photo.src}
                fill // Reemplaza layout="fill" por fill
                style={{ objectFit: 'cover' }} // Reemplaza objectFit="cover"
                className="rounded-lg"
                alt={photo.alt}
                priority={index < 3} // Prioriza la carga de las primeras imágenes
              />
            </div>
            <p className="text-center text-gray-700 mt-2 text-xl">{photo.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}