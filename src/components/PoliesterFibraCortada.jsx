"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PoliesterFibraCortada = () => {
    const [activeData, setActiveData] = useState({
        titulo: "120(40/2)",
        bobina: "CONOS DE 4000MTS",
        catalogo: "Catálogo de colores: 180 colores",
        utilizado: "UTILIZADO PARA LA CONFECCIÓN DE PRENDAS LIVIANAS COMO GUARDAPOLVOS, CAMISERIA, REMERAS, LENCERÍA, MEDIAS, ROPA INTERIOR, ROPA DE TRABAJO, ROPA DEPORTIVA, CORBATAS, ROPA BLANCA, POLLERAS, DELANTALES.",
        images: ["/4.png", "/11.png"],
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const images = ["/4.png", "/11.png"];

    const data = {
        "120(40/2)": {
            titulo: "120(40/2)",
            bobina: "CONOS DE 4000MTS",
            catalogo: "Catálogo de colores: 180 colores",
            utilizado: "UTILIZADO PARA LA CONFECCIÓN DE PRENDAS LIVIANAS COMO GUARDAPOLVOS, CAMISERIA, REMERAS, LENCERÍA, MEDIAS, ROPA INTERIOR, ROPA DE TRABAJO, ROPA DEPORTIVA, CORBATAS, ROPA BLANCA, POLLERAS, DELANTALES.",
            images: ["/4.png", "/11.png"],
        },
        "90(30/2)": {
            titulo: "90(30/2)",
            bobina: "CONOS DE 5000MTS",
            catalogo: "CARTA DE 55 COLORES",
            utilizado: "UTILIZADO PARA LA CONFECCIÓN DE SACOS, PANTALONES, ROPA DE TRABAJO, CORPIÑOS, BODIES, SOMBREROS, TRAJES DE BAÑO, SABANAS Y FUNDAS, BANDERINES, JOGGINS, CALZONCILLOS, ROPA DEPORTIVA, ATRAQUES Y TODAS COSTURAS QUE REQUIERA UN HILO MAS GRUESO QUE EL 120.",
            images: ["/realtex.svg", "/11.png"],
        },
        "75(24/2)": {
            titulo: "75(24/2)",
            bobina: "CONOS DE 5000MTS",
            catalogo: "Catálogo de colores: 33 COLORES",
            utilizado: "UTILIZADO PARA LA CONFECCIÓN DE IMPERMEABLES, CHALECOS, CAMISAS, POLLERAS DE JEAN, GUANTES, CUBRECAMAS, GORRAS, COLCHONES, CALZADO DEPORTIVO LIVIANO, CAMPERAS, TAPICERÍA LIVIANA, ATRAQUES, ROPAS DE ESQUÍ, SOMBREROS. ADEMAS, ES IDEAL PARA ACOMPAÑAR AL TITULO 20/3.",
            images: ["/4.png", "/11.png"],
        },
        "20/3": {
            titulo: "20/3",
            bobina: "CONOS DE 3000MTS",
            catalogo: "Catálogo de colores: 33 colores",
            utilizado: "UTILIZADO PARA COSTURAS DE JEAN (ABARCA TODO TIPO DE PRENDA DE JEAN), ROPA DE MONTAÑA, ARTÍCULOS DE CUERO, TAPICERÍA, FUNDAS PARA AUTO, CINTURONES, UNIFORMES DE TELA PESADA, ROPA DE ABRIGO.",
            images: ["/4.png", "/18.png"],
        },
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen bg-[#ECECEC] pt-[60px]">
            <div className="w-full flex flex-col items-center h-[80vh] md:h-[30vh] justify-center ">
                <div className="w-[80%] h-[90%] md:h-[50%] flex flex-col justify-around">
                    <h1 className="text-[40px]">Poliester Fibra Cortada</h1>
                    <p>
                        Nuestro hilo de poliéster 100% fibra cortada se distingue por su técnica de unión a aire (air spliced), lo que minimiza prácticamente la presencia de nudos. Su hilatura es similar al algodón, ofreciendo una suavidad excepcional gracias a un tratamiento especial que protege tanto el hilo como las máquinas de coser del desgaste. Además, cuenta con elongación controlada, garantizando un rendimiento óptimo en todas tus aplicaciones de costura.
                    </p>
                </div>
            </div>
            <div>
                <div className="w-full flex items-center flex-col h-auto md:h-[80vh] justify-between">
                    <h4 className="w-[80%] h-[10vh] md:h-[5vh] text-[20px]">Detalles de productos</h4>
                    {isSmallScreen ? (
                        <div className="relative w-[80%]">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full p-2 border rounded flex justify-between items-center bg-white"
                            >
                                {activeData.titulo}
                                <svg
                                    className={`w-4 h-4 transform ${isDropdownOpen ? "rotate-180" : ""} transition-transform`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute w-full mt-2 bg-white border rounded shadow-md">
                                    {Object.keys(data).map((title) => (
                                        <li
                                            key={title}
                                            className={`p-2 cursor-pointer hover:bg-gray-200 ${
                                                activeData.titulo === title ? "bg-gray-100 font-semibold" : ""
                                            }`}
                                            onClick={() => {
                                                setActiveData(data[title]);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <ul className="flex w-full flex-row flex-wrap items-center text-center h-[40vh] md:h-[10vh] justify-evenly">
                            {Object.keys(data).map((title) => (
                                <li key={title}>
                                    <a
                                        className={`h-[50px] w-[200px] flex items-center justify-center text-white border-t-[#bdbdbd] rounded-[20px] ${
                                            activeData.titulo === title ? "bg-[#0c0c0c] text-white" : "bg-[#bdbdbd]"
                                        }`}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveData(data[title]);
                                        }}
                                    >
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="flex flex-col-reverse md:flex-col items-center justify-between md:justify-center w-full max-h-[160vh] md:h-[57vh]">
                        <div className="flex flex-col-reverse sm:flex-row">
                            <div className="flex w-[100%] md:w-[50%] flex-col">
                                <div className="h-[70vh] md:h-[40vh] flex justify-end">
                                    <div className="p-[20px] md:p-[40px] flex items-center flex-col justify-center bg-[#FAFAFA] rounded-t-[20px] sm:rounded-t-[0px] md:rounded-r-[20px]">
                                        <h3 className="w-[100%] h-[20vh]">Título: {activeData.titulo}</h3>
                                        <h4 className="w-[100%] h-[50vh]">{activeData.utilizado}</h4>
                                        <div className="flex justify-between w-[100%]">
                                            <p>{activeData.bobina}</p>
                                            <p>{activeData.catalogo}</p>
                                        </div>
                                        <div className="w-full h-[10vh] items-center flex justify-start">
                                            <Link href={"/contacto"}>Contacto</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={activeData.images[currentImageIndex]}
                                    width={600}
                                    height={400}
                                    className="object-cover h-[40vh] aspect-auto transition-opacity duration-500"
                                    alt="Imagen del producto"
                                />
                                <div className="w-full h-[50px] flex items-center justify-center">
                                    <div className="w-[20%] flex justify-evenly">
                                        {images.map((_, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-[20px] w-[20px] rounded-full ${
                                                    currentImageIndex === index ? "bg-[#0c0c0c]" : "bg-[#bdbdbd]"
                                                } cursor-pointer`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliesterFibraCortada;
