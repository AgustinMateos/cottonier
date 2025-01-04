'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slider() {
  const slides = [
    {
      id: 1,
      src: '/18.png',
      alt: 'Producto 1',
      info: {
        left: ['REALTEX 120', '100% POLIESTER FIBRA CORTADA', 'HILO DE RECTA'],
        right: ['CONOS DE 4000MTS', 'CARTA DE 180 COLORES', 'Dato 1F'],
      },
    },
    {
      id: 2,
      src: '/11.png',
      alt: 'Producto 2',
      info: {
        left: ['REALTEX 20/3', '100% POLIESTER FIBRA CORTADA', 'HILO DE JEAN'],
        right: ['CONOS DE 3000MTS', 'CARTA DE 30 COLORES', 'Dato 2F'],
      },
    },
    {
      id: 3,
      src: '/4.png',
      alt: 'Producto 3',
      info: {
        left: ['AJS 150 ', '100% POLIESTER FIBRA CONTINUA', 'HILO DE OVERLOCK'],
        right: ['CONOS DE 400GRS', 'CARTA DE 15 COLORES', 'Dato 3F'],
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNeedle, setShowNeedle] = useState(false);

  useEffect(() => {
    // Dispara la animación cuando el componente se monta
    setShowNeedle(true);
  }, []);

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
    <div className="bg-[#ECECEC] w-full h-[90vh] flex flex-col items-center justify-center">
      {/* Aguja */}
      <div className="relative w-full h-[40vh] flex items-center justify-center">
        <div
          className={`absolute top-[-14vh] w-full transition-transform duration-1000 ${
            showNeedle ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Image className="w-full h-auto" width={600} height={150} src="/aguja.svg" alt="Aguja" />
        </div>
        <div className="absolute top-5 text-2xl font-bold flex flex-col h-[100px] justify-around items-center" > <h3 className=" top-5 text-2xl font-bold">Nuestros productos más destacados</h3>
        <p className=" top-5 text-2xl font-bold"> Estos son algunos de nuestros productos más elegidos por nuestros clientes.</p>
     </div>
        </div>

      <div className="relative w-full flex justify-center items-center">
        {/* Contenedor de información izquierda */}
        <div className="w-1/6 flex flex-col gap-4 text-center">
          {slides[currentIndex].info.left.map((info, idx) => (
            <div
              key={idx}
              className="p-3  "
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
