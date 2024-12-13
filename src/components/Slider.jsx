'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function Slider() {
  const slides = [
    {
      id: 1,
      src: '/18.png',
      alt: 'Producto 1',
      info: {
        left: ['Dato 1A', 'Dato 1B', 'Dato 1C'],
        right: ['Dato 1D', 'Dato 1E', 'Dato 1F'],
      },
    },
    {
      id: 2,
      src: '/11.png',
      alt: 'Producto 2',
      info: {
        left: ['Dato 2A', 'Dato 2B', 'Dato 2C'],
        right: ['Dato 2D', 'Dato 2E', 'Dato 2F'],
      },
    },
    {
      id: 3,
      src: '/4.png',
      alt: 'Producto 3',
      info: {
        left: ['Dato 3A', 'Dato 3B', 'Dato 3C'],
        right: ['Dato 3D', 'Dato 3E', 'Dato 3F'],
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const getClassNames = (index) => {
    if (index === currentIndex) {
      return 'z-20 scale-125 opacity-100'; // Imagen principal
    }
    if (index === (currentIndex + 1) % slides.length) {
      return 'z-10 scale-90 opacity-50 translate-x-24'; // Imagen derecha
    }
    if (index === (currentIndex - 1 + slides.length) % slides.length) {
      return 'z-10 scale-90 opacity-50 -translate-x-24'; // Imagen izquierda
    }
    return 'hidden'; // Otras imágenes
  };

  return (
    <div className="bg-[#ECECEC] w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="relative w-full h-[40vh] flex items-center justify-center">
        <h3 className="absolute top-5 text-2xl font-bold">Nuestros productos más destacados</h3>
      </div>
      <div className="relative w-full flex justify-center items-center">
        {/* Contenedor de información izquierda */}
        <div className="w-1/6 flex flex-col gap-4 text-center">
          {slides[currentIndex].info.left.map((info, idx) => (
            <div
              key={idx}
              className="p-3 bg-white rounded shadow-md hover:shadow-lg transition"
            >
              {info}
            </div>
          ))}
        </div>

        {/* Slider principal */}
        <div className="relative w-[60%] h-[60vh] flex items-center justify-center overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-all object-cover duration-500 ease-in-out ${getClassNames(index)}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={500}
                height={500}
                className="rounded-lg h-[90vh] rounded-r-[10px]"
              />
            </div>
          ))}
        </div>

        {/* Contenedor de información derecha */}
        <div className="w-1/6 flex flex-col gap-4 text-center">
          {slides[currentIndex].info.right.map((info, idx) => (
            <div
              key={idx}
              className="p-3 bg-white rounded shadow-md hover:shadow-lg transition"
            >
              {info}
            </div>
          ))}
        </div>
      </div>

      {/* Controles del slider */}
      <div className="mt-5 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-gray-800"
        >
          {'>'}
        </button>
      </div>
    </div>
  );
}
