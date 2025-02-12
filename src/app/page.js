'use client';

import { useState, useEffect } from 'react'; // Importa useEffect
import Sidebar from '@/components/Sidebar';
import Hearts from '@/components/Hearts';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

export default function ValentinePage() {
  const [showConfetti, setShowConfetti] = useState(false); // Estado para controlar el confeti
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // Estado para el tamaño de la ventana

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

  // Efecto para obtener el tamaño de la ventana solo en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleAccept = () => {
    // Mostrar el confeti
    setShowConfetti(true);

    // Mostrar la alerta de SweetAlert2
    Swal.fire({
      title: '💖 ¡Me haces muy feliz! 💖',
      text: '¡Gracias por ser mi novia! 💕',
      confirmButtonText: '🥰 ¡Te amo! 🥰',
      background: '#fff0f6',
      color: '#d63384',
      confirmButtonColor: '#ff85c0',
    }).then(() => {
      // Detener el confeti después de que se cierre la alerta
      setShowConfetti(false);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 relative">
      {/* Audio de fondo */}
      <audio id="background-music" loop>
        <source src="/Sade_-_Kiss_Of_Life_-_Official_-_1993_[_YouConvert.net_].mp3" type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>

      <Sidebar />
      <Hearts />

      {/* Confeti */}
      {showConfetti && typeof window !== 'undefined' && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false} // El confeti se detiene después de caer
          numberOfPieces={500} // Cantidad de confeti
          gravity={0.2} // Velocidad de caída
        />
      )}

      <div className="text-center bg-white p-6 rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl font-bold text-pink-600">¡Hola, mi amor!</h1>
        <p className="mt-2 text-gray-700">¿Quieres ser mi Valentine este 14 de febrero?</p>
        <button
          onClick={handleAccept}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600"
        >
          ¡Sí, acepto!
        </button>
      </div>
    </div>
  );
}