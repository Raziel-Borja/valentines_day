'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hearts = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setPageHeight(document.documentElement.scrollHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{ y: pageHeight }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="text-4xl text-pink-400"
          style={{ position: 'absolute', pointerEvents: 'none' }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default Hearts;
