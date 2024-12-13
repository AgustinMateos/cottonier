'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Compromiso() {




    return (
        <div className="h-[699px] w-[100%] bg-[#ECECEC]">
            <div className="w-full h-[80%] flex justify-end  ">
                <div className="flex items-center justify-between w-[90%]">
                    <div className="w-[40%] h-[50%] flex justify-evenly flex-col">
                        <h3>Cottonier y su compromiso. </h3> <p>Con más de cinco décadas de trayectoria en el sector, nos enorgullecemos de contar con una red de proveedores sólidos en Perú, China, Brasil y Egipto. Esta colaboración nos permite cumplir con nuestra misión de abastecer el mercado textil argentino con una amplia gama de productos de alta calidad.</p></div>
                    <div className="">
                        <Image src={"/compromiso.jpg"}
                         width={683}
                        height={448}
                        className="rounded-l-[10px]" /></div>
                </div>
            </div>
            <div className="h-[20%] w-full" > </div>
        </div>
    );
}