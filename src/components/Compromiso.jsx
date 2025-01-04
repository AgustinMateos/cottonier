"use client";

import Image from "next/image";

export default function Compromiso() {
    return (
        <div className="relative h-[699px] w-[100%] bg-[#ECECEC]">
            <div className="w-full h-[80%] flex flex-col lg:flex-row justify-end">
                <div className="flex items-center flex-col lg:flex-row justify-between w-[90%] relative">
                    <div className="w-[90%] lg:w-[40%] h-[50%] flex justify-evenly flex-col ">
                        <h3 className="text-[35px] ">Cottonier y su compromiso.</h3>
                        <p>
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
                            className="rounded-l-[10px]"
                            alt="imagen cottonier"
                        />
                    </div>
                </div>
            </div>
            {/* Contenedor "Ofrecemos" con fondo blur */}
            <div className="absolute bottom-[30px] left-[25%] lg:left-[45%] justify-center pl-[70px] rounded-l-[40px] w-[75%] lg:w-[55%] h-[30vh] bg-white/30 backdrop-blur p-4 rounded-md flex flex-col  ">
               <div className="w-[100%]">
                <h3 className="text-[20px] font-semibold w-[30%]">Ofrecemos</h3>
                <ul className="list-disc ml-4 w-[100%] lg:w-[50%]">
                    <li>Poliéster fibra cortada en diversos títulos.</li>
                    <li>Poliéster texturizado para Overlock.</li>
                    <li>Hilos de algodón mercerizado y peinado.</li>
                    <li>Hilos de alta tenacidad (nylon).</li>
                </ul></div>
                
            </div>
        </div>
    );
}
