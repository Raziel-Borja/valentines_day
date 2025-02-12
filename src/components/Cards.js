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
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
  );
};

export default PhotoCard;