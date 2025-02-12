'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hearts = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Efecto para actualizar el tamaño de la página y la ventana
  useEffect(() => {
    // Verifica que estamos en el cliente antes de acceder a `window` y `document`
    if (typeof window !== 'undefined') {
      const updateDimensions = () => {
        setPageHeight(document.documentElement.scrollHeight);
        setWindowWidth(window.innerWidth);
      };

      // Actualiza las dimensiones al cargar la página
      updateDimensions();

      // Escucha cambios en el tamaño de la ventana
      window.addEventListener('resize', updateDimensions);

      // Limpia el listener al desmontar el componente
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * windowWidth }} // Posición inicial en x
          animate={{ y: pageHeight }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="text-4xl text-pink-400"
          style={{ position: 'absolute', pointerEvents: 'none', left: `${Math.random() * 100}%` }} // Asegura que los corazones se distribuyan en toda la pantalla
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default Hearts;