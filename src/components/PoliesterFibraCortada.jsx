'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PoliesterFibraCortada = () => {
    const [activeData, setActiveData] = useState({
        titulo: "120(40/2)",
        bobina: "Conos de 4000mts.",
        catalogo: "Catálogo de colores: 180 colores",
        utilizado: "Utilizado para la confección de prendas livianas como guardapolvos, comisaria, remeras, lenceria, medias, ropa interior, ropa de trabajo, ropa deportiva, corbatas, ropa blanca, polleras y delantales.",
        images: ["/poliesterFibraCortada/ULTRAFIL120(40-2).png", "/REALTEX120.png"],
    });

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const data = {
        "120(40/2)": {
            titulo: "120(40/2)",
            bobina: "Conos de 4000mts.",
            catalogo: "Catálogo de colores: 180 colores",
            utilizado: "Utilizado para la confección de prendas livianas como guardapolvos, comisaria, remeras, lenceria, medias, ropa interior, ropa de trabajo, ropa deportiva, corbatas, ropa blanca, polleras y delantales.",
            images: ["/poliesterFibraCortada/ULTRAFIL120(40-2).png", "/REALTEX120.png"],
        },
        "90(30/2)": {
            titulo: "90(30/2)",
            bobina: "Conos de 5000mts.",
            catalogo: "Carta de 55 colores",
            utilizado: "Utilizado para la confección de sacos, pantalones, ropa de trabajo, corpiños, bodies, sombreros, trajes de baño, sábanas y fundas, banderines, joggins, calzoncillos, ropa deportiva, atraques y todas costuras que requiera un hilo más grueso que el 120.",
            images: ["/poliesterFibraCortada/ULTRAFIL90(30-2).png"],
        },
        "75(24/2)": {
            titulo: "75(24/2)",
            bobina: "Conos de 5000mts.",
            catalogo: "Catálogo de colores: 33 Colores",
            utilizado: "Utilizado para la confección de impermeables, chalecos, camisas, polleras de jean, guantes, cubrecamas, gorras, colchones, calzado deportivo liviano, camperas, tapicería liviana, atraques, ropas de esquí, sombreros. además, es ideal para acompañar al título 20/3.",
            images: ["/poliesterFibraCortada/REALTEX75(24-2).png", "/11.png"],
        },
        "20/3": {
            titulo: "20/3",
            bobina: "Conos de 3000mts.",
            catalogo: "Catálogo de colores: 33 colores",
            utilizado: "Utilizado para costuras de jean (abarca todo tipo de prenda de jean), ropa de montaña, artículos de cuero, tapicería, fundas para auto, cinturones, uniformes de tela pesada, ropa de abrigo.",
            images: ["/poliesterFibraCortada/REALTEX20-3.png", "/poliesterFibraCortada/ULTRAFIL20-3.png"],
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
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeData.images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [activeData.images.length]);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100); // Animación con retraso
    }, []);

    const handleTitleClick = (title) => {
        setIsVisible(false);
        setTimeout(() => {
            setActiveData(data[title]);
            setCurrentImageIndex(0); // Reiniciar índice de imagen
            setIsVisible(true);
        }, 300);
    };

    return (
        <div className="min-h-screen bg-[#ECECEC] pt-[60px]">
            <div className="w-full flex flex-col items-center h-[80vh] md:h-[30vh] justify-center">
                <div className="w-[80%] h-[90%] md:h-[50%] flex flex-col justify-around">
                    <h1 className="text-[40px]">Poliester Fibra Cortada</h1>
                    <p>
                        Nuestro hilo de poliéster 100% fibra cortada se distingue por su técnica de unión a aire (air spliced), lo que minimiza prácticamente la presencia de nudos. Su hilatura es similar al algodón, ofreciendo una suavidad excepcional gracias a un tratamiento especial que protege tanto el hilo como las máquinas de coser del desgaste. Además, cuenta con elongación controlada, garantizando un rendimiento óptimo en todas tus aplicaciones de costura.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <h4 className="w-[80%] h-[10vh] md:h-[5vh] text-[20px]">Detalles de productos</h4>
                {isSmallScreen ? (
                    <div className="relative w-[80%]">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full p-[10px] rounded-[10px] flex justify-between items-center bg-white"
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
                            <ul className="absolute w-full mt-2 bg-white border rounded">
                                {Object.keys(data).map((title) => (
                                    <li
                                        key={title}
                                        className={`p-2 cursor-pointer hover:bg-gray-200 ${activeData.titulo === title ? "bg-gray-100 font-semibold" : ""}`}
                                        onClick={() => {
                                            handleTitleClick(title);
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
                                    className={`h-[50px] w-[200px] flex items-center justify-center text-white border-t-[#bdbdbd] rounded-[20px] ${activeData.titulo === title
                                        ? "bg-[#0c0c0c] text-white"
                                        : "bg-[#bdbdbd]"} `}
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleTitleClick(title);
                                    }}
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex flex-col-reverse md:flex-col items-center justify-between md:justify-center w-full max-h-[160vh] md:h-[57vh] lg:h-[65vh]">
                    <div className="flex flex-col-reverse items-center sm:flex-row md:justify-between">
                        <div className="flex w-[90%] md:w-[50%] flex-col">
                            <div className="h-[55vh] md:h-[40vh] flex justify-end">
                                <div
                                    className={`transition-transform duration-500 ease-out transform ${isVisible
                                        ? "translate-y-0 opacity-100"
                                        : isSmallScreen
                                            ? "translate-y-1/2 opacity-0"
                                            : "-translate-x-full opacity-0"
                                        } flex flex-col items-center justify-center bg-white w-[90%] md:w-[100%] mx-auto p-6 rounded-lg shadow-lg`}
                                >
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
                        <div className="lg:w-[600px] flex flex-col items-center">
                            {activeData.images.length > 0 && (
                                <>
                                    <Image
                                        src={activeData.images[currentImageIndex]}
                                        width={450}
                                        height={400}
                                        className="object-cover pt-[50px] h-[40vh] lg:h-[52vh] aspect-auto transition-opacity duration-500"
                                        alt="Imagen del producto"
                                    />
                                    {activeData.images.length > 1 && (
                                        <div className="w-full h-[50px] flex items-center justify-center">
                                            <div className="w-[20%] flex justify-evenly">
                                                {activeData.images.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                        className={`h-[20px] w-[20px] rounded-full ${currentImageIndex === index ? "bg-black" : "bg-gray-300"} cursor-pointer`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliesterFibraCortada;
