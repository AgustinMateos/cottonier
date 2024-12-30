import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  
  const redes = [
    {
      id: 1,
      name: "realfil",
      image: "/realfil.svg",
     
    },
    {
      id: 2,
      name: "realtex",
      image: "/realtex.svg",
      
    },
    {
        id: 3,
        name: "ultrafil",
        image: "/ultrafil.svg",
        
      },
  ];

  return (
    <div className="w-full bg-[#3A3A3A] flex justify-center items-center py-8 h-[400px] sm:h-[420px]">
    
      <div className="w-full max-w-[1800px] px-4 md:px-10 min-h-[280px] xs:w-[698px]">
        <div className="flex flex-col min-h-[160px] lg:flex-row items-start justify-between lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Sección izquierda */}
          <div className="flex h-[200px] justify-around flex-col items-start text-white space-y-4 lg:w-2/3">
          <Link href="/" className="flex items-center"><Image src="/cottonierLogoFooter.svg" alt="Logo" width={154} height={30} /></Link>
            
            

            <div className="flex flex-col xs:items-start sm:flex-row lg:flex-row lg:space-x-4 gap-4 lg:w-[850px]">
              <Link className="lg:w-[120px]" href={"/productos"}>
                <p className="font-archivo hover:font-bold hover:text-white">
                  Productos
                </p>
              </Link>
              <Link className="lg:w-[120px]" href={"/nosotros"}>
                <p className="font-archivo hover:font-bold hover:text-white">
                Nosotros
                </p>
              </Link>
              <Link className="lg:w-[220px]" href={"/preguntasFrecuentes"}>
                <p className="font-archivo hover:font-bold hover:text-white">
                 Preguntas Frecuentes
                </p>
              </Link>
              <Link className="lg:w-[180px]" href={"/contacto"}>
                <p className="font-archivo hover:font-bold hover:text-white">
                 Contacto
                </p>
              </Link>
            </div>
          </div>

         
        </div>

        {/* Línea de separación y redes sociales */}
        <div className="border-t  border-[#CBD5E1] text-white mt-8 pt-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <p className="font-archivo">Copyright 2024© COTTONIER S.R.L. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-4">
            {redes.map((red) => (
              
                <Image
                  width={60}
                  height={60}
                  src={red.image}
                  alt={red.name}
                  key={red.id}
                  className="cursor-pointer "
                />
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}