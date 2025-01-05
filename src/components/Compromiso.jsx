'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Compromiso() {
  const [showOfrecemos, setShowOfrecemos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOfrecemos(true);
    }, 300); // Esperar 300ms antes de activar el estado
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("Estado showOfrecemos:", showOfrecemos);
  }, [showOfrecemos]); // Verificar el estado cada vez que cambie

  return (
    <div className="relative h-[699px] w-[100%] bg-[#ECECEC]">
      <div className="w-full h-[90%] flex flex-col lg:flex-row justify-end">
        <div className="flex items-center flex-col lg:flex-row justify-between w-[90%] relative">
          <div className="w-[95%] p-[20px] lg:w-[40%] h-[100%] sm:h-[50%] flex justify-evenly flex-col ">
            <h3 className="text-[35px] ">Cottonier y su compromiso.</h3>
            <p className="pt-[10px]">
              Con más de cinco décadas de trayectoria en el sector, nos
              enorgullecemos de contar con una red de proveedores sólidos en
              Perú, China, Brasil y Egipto. Esta colaboración nos permite cumplir
              con nuestra misión de abastecer el mercado textil argentino con una
              amplia gama de productos de alta calidad.
            </p>
          </div>
          <div>
            <Image
              src={"/compromiso.jpg"}
              width={683}
              height={448}
              className=" rounded-r-[10px] md:rounded-l-[10px]"
              alt="imagen cottonier"
            />
          </div>
        </div>
      </div>

      {/* Contenedor "Ofrecemos" con fondo blur */}
      <div
        className={`${
          showOfrecemos ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } absolute bottom-[30px] left-[5%] sm:left-[25%] lg:left-[45%] justify-center pl-[50px] sm:pl-[70px] rounded-l-[40px] w-[95%] sm:w-[75%] lg:w-[55%] h-[30vh] bg-white/30 backdrop-blur p-4 rounded-md flex flex-col transition-all duration-700 ease-in-out`}
      >
        <div className="w-[100%]">
          <h3 className="text-[20px] font-semibold w-[30%]">Ofrecemos</h3>
          <ul className="list-disc ml-4 w-[100%] lg:w-[50%]">
            <li>Poliéster fibra cortada en diversos títulos.</li>
            <li>Poliéster texturizado para Overlock.</li>
            <li>Hilos de algodón mercerizado y peinado.</li>
            <li>Hilos de alta tenacidad (nylon).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
