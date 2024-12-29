export default function ComponentePrincipal() {
  return (
    <div
      className="w-full h-screen sm:h-[500px] lg:h-[100vh] bg-right bg-cover lg:bg-center flex items-center"
      style={{ backgroundImage: "url('/fondo4.svg')" }}
    >
      {/* Contenido dentro del div */}
      <div className="w-[100%] lg:w-[60%]  h-full flex items-center justify-center">
        <div className="w-[80%] h-[80%] md:h-[40%] flex flex-col justify-around  ">
          <div className="text-[40px]"> <h1>Tu aliado en calidad y variedad desde 1965:</h1></div>
       <div className="text-[32px]"><h2>Cottonier se ha consolidado como un líder en la producción y comercialización de hilos para coser, ofreciendo calidad y variedad para el mercado textil argentino. </h2></div>
        
      </div></div>
      
    </div>
  );
}
    // {/* {<div
    //       className="flex flex-col md:flex-row items-center justify-center w-full h-screen bg-cover bg-center"
    //       style={{ backgroundImage: "url('/fondo2.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    //     >
    //       {/* Contenido del componente */}
    //       <div className="relative w-full md:w-1/2 text-center md:text-left p-6 z-10">
    //         <h2 className="text-2xl md:text-4xl font-bold text-white">
    //           Tu aliado en calidad y variedad desde 1965
    //         </h2>
    //         <p className="mt-4 text-white md:max-w-[450px]">
    //           Desde 1965, Cottonier SRL se ha consolidado como un líder en la 
    //           producción y comercialización de hilos para coser, ofreciendo calidad
    //           y variedad para el mercado textil argentino. Nuestra experiencia y 
    //           compromiso nos permiten satisfacer las necesidades de nuestros clientes
    //           con productos de excelencia y un servicio confiable.
    //         </p>
    //       </div>
    //     </div>} */}