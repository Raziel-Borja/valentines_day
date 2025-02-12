'use client';

import Image from 'next/image';

const PhotoCard = ({ src, alt, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <div className="relative w-64 h-64 mx-auto">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }} // Usa style para objectFit
          className="rounded-lg"
          priority={src === '/foto_1.jpeg'} // Prioriza la carga de la primera imagen
        />
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default PhotoCard;