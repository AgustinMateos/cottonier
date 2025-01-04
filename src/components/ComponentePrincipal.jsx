export default function ComponentePrincipal() {
  return (
    <div
      className="w-full h-screen sm:h-[500px] lg:h-[100vh] bg-right bg-cover lg:bg-center flex items-center"
      style={{ backgroundImage: "url('/fondo4.svg')" }}
    >
      {/* Contenido dentro del div */}
      <div className="w-[100%] lg:w-[60%]  h-full flex items-center  justify-start md:justify-center">
        <div className=" w-[90%] md:w-[80%]  bg-white/50 backdrop-blur sm:bg-transparent rounded-r-[20px] p-4  md:h-[50%] h-[60%] flex flex-col justify-around  ">
          <div className= "text-[30px] md:text-[40px]"> 
            <h1>Tu aliado en calidad y variedad desde 1965:</h1>
          </div>
       <div className="text-[20px] md:text-[32px]"><h2>Cottonier se ha consolidado como un líder en la producción y comercialización de hilos para coser, ofreciendo calidad y variedad para el mercado textil argentino. </h2></div>
        
      </div></div>
      
    </div>
  );
}
    