'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Slider() {
  const slides = [
    {
      id: 1,
      href: '/poliesterFibraCortada',
      src: '/18.png',
      alt: 'Producto 1',
      info: {
        left: ['REALTEX 120', '100% POLIESTER FIBRA CORTADA', 'HILO DE RECTA'],
        right: ['CONOS DE 4000MTS', 'CARTA DE 180 COLORES', 'Dato 1F'],
      },
    },
    {
      id: 2,
      href: '/poliesterFibraCortada',
      src: '/11.png',
      alt: 'Producto 2',
      info: {
        left: ['REALTEX 20/3', '100% POLIESTER FIBRA CORTADA', 'HILO DE JEAN'],
        right: ['CONOS DE 3000MTS', 'CARTA DE 30 COLORES', 'Dato 2F'],
      },
    },
    {
      id: 3,
      href: '/poliesterFibraCortada',
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
    <div className="bg-[#ECECEC] relative w-full h-[95vh] flex flex-col items-center justify-center">
     
      <div className="relative w-full h-[60vh] md:h-[40vh] flex items-center justify-center">
        
        <div className="absolute top-5 text-2xl w-[90%]  font-bold flex flex-col h-[300px] md:h-[300px] md:justify-center justify-around items-center">
          <h3 className="pt-[10px] pb-[10px] text-2xl text-center">Nuestros productos más destacados</h3>
          <p className="text-2xl text-center">Estos son algunos de nuestros productos más elegidos por nuestros clientes.</p>
        </div>
      </div>

      {/* Vista móvil (scroll horizontal) */}
      <div className="sm:hidden w-full overflow-x-scroll flex gap-4 px-4">
        {slides.map((slide) => (
          <Link
            href={slide.href}
            key={slide.id}
            className="min-w-[80%] bg-white rounded-[20px] shadow-md p-4 flex flex-col items-center justify-center"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={300}
              height={300}
              className="rounded-lg h-[60%] w-[100%] object-cover"
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">{slide.info.left[0]}</h3>
              <p className="text-sm">{slide.info.left[1]}</p>
              <p className="text-sm">{slide.info.right[0]}</p>
              <div className="pt-[10px]"><p>Ver más</p></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Vista de escritorio */}
      <div className="relative w-full sm:flex justify-center items-center hidden">
        {/* Contenedor de información izquierda */}
        <div className="w-1/6 flex flex-col gap-4 text-center">
          {slides[currentIndex].info.left.map((info, idx) => (
            <div key={idx} className="p-3">
              {info}
            </div>
          ))}
        </div>

        {/* Slider principal (con imagenes) */}
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
            <div key={idx} className="p-3">
              {info}
            </div>
          ))}
        </div>
      </div>

      
            {/* Controles del slider */}
            <div className="absolute top-[60%] left-4 right-4 sm:flex justify-center gap-4 hidden">
        <button
          onClick={handlePrev}
          className="bg-transparent text-white px-4 py-2 pr-[70px] rounded hover:bg-transparent text-7xl drop-shadow-lg z-20"
        >
          {'<'}
        </button>
        <button
          onClick={handleNext}
          className="bg-transparent text-white px-4 py-2 pl-[70px] rounded hover:bg-transparent text-7xl drop-shadow-lg z-20"
        >
          {'>'}
        </button>
      </div>

    </div>
  );
}
