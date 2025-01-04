import Image from "next/image"

export default function Nosotros ()  {
  return (
    <div className="w-full min-h-[120vh] bg-[#ECECEC] flex items-center flex-col">
        <div className="flex flex-col-reverse items-center lg:flex-row ">
            <div className="w-full lg:w-[50%] rounded-[20px] ">
                <Image className=" rounded-r-[20px] " alt="imagen" src='/nosotros1.svg' height={266} width={650}/></div>
            <div className="w-[90%] lg:w-[40%] h-[400px] flex flex-col justify-evenly">
                <h1>Hilos Cottonier</h1>
                <p>Desde 1965, nos dedicamos a la fabricación de hilos para coser de alta calidad. Ubicados en el emblemático barrio de Caballito, contamos con una fábrica equipada con tecnología avanzada que nos permite mantener un stock permanente y ofrecer una amplia variedad de productos.</p>
                <p>Nuestra experiencia y compromiso nos posicionan como aliados clave en diversas industrias, incluyendo confección de ropa de trabajo, marroquinería, fabricación de colchones, bolsas y prendas de vestir en general, entre otros.</p>
                <p>En COTTONIER SRL, la calidad es nuestra prioridad y estamos aquí para satisfacer las necesidades de nuestros clientes.</p>
            </div>
        </div>
        <div className="flex justify-between flex-col items-center lg:flex-row">
            <div className="w-[90%] lg:w-[40%] h-[300px] flex flex-col  justify-evenly  lg:pl-[50px]">
                <h2>Nuestra Mision</h2>
                <p>En nuestra fábrica de hilos para coser, nos comprometemos a abastecer el mercado textil argentino con productos de la más alta calidad. Para alcanzar este objetivo, implementamos un sistema de producción enfocado en la mejora continua, garantizando la excelencia en cada uno de nuestros procesos. </p>
                <p>Trabajamos con dedicación para ofrecer soluciones que superen las expectativas de nuestros clientes y contribuyan al crecimiento del sector textil.</p>
               
            </div>
            <div className=""><Image className="rounded-l-[20px]" src='/nosotros2.svg' height={566} width={674} alt="cottonier2"/></div>
            
        </div>
    </div>
  )
}
