'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function PreguntasFrecuentesHome() {
  const preguntas = [
    {
      pregunta: '¿Cómo puedo hacer un pedido de hilos?',
      respuesta: (
        <>
          Contamos con los siguientes canales de ventas para realizar pedidos:
          <ul className="list-disc pl-5 mt-2">
            <li>Whatsapp: 11-2604-9496</li>
            <li>Teléfono fijo: 4582-2014 / 4581-9129 / 4581-9179 / 4581-2407</li>
            <li>E-mail: ventas@cottonier.com.ar</li>
          </ul>
        </>
      ),
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Cuál es el mínimo de compra?',
      respuesta: 'El mínimo de compra son 6 conos por color.',
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Realizan envíos al interior del país?',
      respuesta: (
        <>
          Realizamos despachos de la mercadería por expreso o transporte sugerido por nuestro cliente, para compras superiores a $500.000, sujeto a nuestro radio de cobertura.
        </>
      ),
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Cómo puede revender hilos Cottonier?',
      respuesta: (
        <>
          Contamos con una red de distribuidores a lo largo y ancho de todo el país. Para revender hilos Cottonier, debe enviarnos los siguientes datos mediante alguno de nuestros canales de ventas:
          <ul className="list-disc pl-5 mt-2">
            <li>Número de CUIT</li>
            <li>Razón social</li>
            <li>Dirección – Localidad - provincia</li>
            <li>E-mail</li>
            <li>Número de contacto</li>
          </ul>
        </>
      ),
      imagen: '/flechaFaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Qué agujas son sugeridas según título de hilo?',
      respuesta: (
        <>
          <p className="font-semibold">HILOS 100% POLIÉSTER FIBRA CORTADA:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>No 120: 11, 75, 12/14, 80/90, 16/18, 100/110, 19/20, 110/125, 21/23, 130/140</li>
            <li>No 90: 75, 12/14, 80/90, 16/18, 100/110, 110/125</li>
            <li>No 75: 75, 80/90, 110/125</li>
          </ul>
          <p className="font-semibold mt-2">HILOS 100% ALGODÓN PEINADO Y MERCERIZADO:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>No 80: 9/11, 12/14, 16/18, 19/20, 75</li>
            <li>No 50: 16/18, 19/20, 80/90</li>
            <li>No 40: 100/110, 110/125</li>
          </ul>
        </>
      ),
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Cómo puedo visualizar la carta de colores?',
      respuesta: 'Puedes visualizar la carta de colores en nuestra tienda online o solicitándonosla directamente a través de los canales de ventas mencionados.',
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Cuáles son los tiempos de entrega de los pedidos?',
      respuesta: 'Los pedidos se preparan dentro de las 24hs de haber realizado el mismo. Una vez abonado, ya se encontrarán listos para el retiro.',
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Qué tipos de pago aceptan?',
      respuesta: (
        <>
          Aceptamos los siguientes medios de pago:
          <ul className="list-disc pl-5 mt-2">
            <li>Efectivo/débito, al momento de retiro.</li>
            <li>Transferencia bancaria, previo retiro.</li>
          </ul>
        </>
      ),
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Puedo comprar hilos directamente de su fábrica?',
      respuesta: 'No tomamos pedidos en nuestra fábrica. Los pedidos deben realizarse por alguno de nuestros canales de ventas previo retiro por nuestra fábrica.',
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
    {
      pregunta: '¿Cuáles son los días y horarios de retiro?',
      respuesta: (
        <>
          Dirección: Nicasio Oroño 1166 – Caballito - CABA
          <br />
          Días y horarios: Lunes a viernes de 09 a 16:30hs.
        </>
      ),
      imagen: '/flechafaq.svg', // Ruta de la imagen
    },
  ];


  const [abierta, setAbierta] = useState(null);

  const toggleRespuesta = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#ECECEC]">
      <div className="max-w-4xl mx-auto p-6 bg-[#ECECEC]">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="border p-4 bg-[#ffffff] rounded-[20px] pb-4 flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <Image src="/flechaFaq.svg" alt="Flecha FAQ" width={20} height={20} />
              </div>

              <div className="flex-1">
                <div
                  className="cursor-pointer text-lg font-medium text-black"
                  onClick={() => toggleRespuesta(index)}
                >
                  {item.pregunta}
                </div>
                {abierta === index && (
                  <div className="mt-2 text-gray-700">{item.respuesta}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function PreguntasFrecuentesHome() {
//   // Array con las preguntas frecuentes y sus respuestas
//   const preguntas = [
//     {
//       pregunta: '¿Cómo puedo hacer un pedido de hilos?',
//       respuesta: (
//         <>
//           Contamos con los siguientes canales de ventas para realizar pedidos:
//           <ul className="list-disc pl-5 mt-2">
//             <li>Whatsapp: 11-2604-9496</li>
//             <li>Teléfono fijo: 4582-2014 / 4581-9129 / 4581-9179 / 4581-2407</li>
//             <li>E-mail: ventas@cottonier.com.ar</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       pregunta: '¿Cuál es el mínimo de compra?',
//       respuesta: 'El mínimo de compra son 6 conos por color.',
//     },
//     {
//       pregunta: '¿Realizan envíos al interior del país?',
//       respuesta: (
//         <>
//           Realizamos despachos de la mercadería por expreso o transporte sugerido por nuestro cliente, para compras superiores a $500.000, sujeto a nuestro radio de cobertura.
//         </>
//       ),
//     },
//     {
//       pregunta: '¿Cómo puede revender hilos Cottonier?',
//       respuesta: (
//         <>
//           Contamos con una red de distribuidores a lo largo y ancho de todo el país. Para revender hilos Cottonier, debe enviarnos los siguientes datos mediante alguno de nuestros canales de ventas:
//           <ul className="list-disc pl-5 mt-2">
//             <li>Número de CUIT</li>
//             <li>Razón social</li>
//             <li>Dirección – Localidad - provincia</li>
//             <li>E-mail</li>
//             <li>Número de contacto</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       pregunta: '¿Qué agujas son sugeridas según título de hilo?',
//       respuesta: (
//         <>
//           <p className="font-semibold">HILOS 100% POLIÉSTER FIBRA CORTADA:</p>
//           <ul className="list-disc pl-5 mt-2">
//             <li>No 120: 11, 75, 12/14, 80/90, 16/18, 100/110, 19/20, 110/125, 21/23, 130/140</li>
//             <li>No 90: 75, 12/14, 80/90, 16/18, 100/110, 110/125</li>
//             <li>No 75: 75, 80/90, 110/125</li>
//           </ul>
//           <p className="font-semibold mt-2">HILOS 100% ALGODÓN PEINADO Y MERCERIZADO:</p>
//           <ul className="list-disc pl-5 mt-2">
//             <li>No 80: 9/11, 12/14, 16/18, 19/20, 75</li>
//             <li>No 50: 16/18, 19/20, 80/90</li>
//             <li>No 40: 100/110, 110/125</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       pregunta: '¿Cómo puedo visualizar la carta de colores?',
//       respuesta: 'Puedes visualizar la carta de colores en nuestra tienda online o solicitándonosla directamente a través de los canales de ventas mencionados.',
//     },
//     {
//       pregunta: '¿Cuáles son los tiempos de entrega de los pedidos?',
//       respuesta: 'Los pedidos se preparan dentro de las 24hs de haber realizado el mismo. Una vez abonado, ya se encontrarán listos para el retiro.',
//     },
//     {
//       pregunta: '¿Qué tipos de pago aceptan?',
//       respuesta: (
//         <>
//           Aceptamos los siguientes medios de pago:
//           <ul className="list-disc pl-5 mt-2">
//             <li>Efectivo/débito, al momento de retiro.</li>
//             <li>Transferencia bancaria, previo retiro.</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       pregunta: '¿Puedo comprar hilos directamente de su fábrica?',
//       respuesta: 'No tomamos pedidos en nuestra fábrica. Los pedidos deben realizarse por alguno de nuestros canales de ventas previo retiro por nuestra fábrica.',
//     },
//     {
//       pregunta: '¿Cuáles son los días y horarios de retiro?',
//       respuesta: (
//         <>
//           Dirección: Nicasio Oroño 1166 – Caballito - CABA
//           <br />
//           Días y horarios: Lunes a viernes de 09 a 16:30hs.
//         </>
//       ),
//     },
//   ];

//   // Estado para manejar la visibilidad de las respuestas
//   const [abierta, setAbierta] = useState(null);

//   // Función para alternar la visibilidad de la respuesta
//   const toggleRespuesta = (index) => {
//     if (abierta === index) {
//       setAbierta(null); // Si la misma pregunta es clickeada, cerramos la respuesta
//     } else {
//       setAbierta(index); // Abrimos la respuesta de la pregunta seleccionada
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>

//       <div className="space-y-4">
//         {preguntas.map((item, index) => (
//           <div
//             key={index}
//             className="border p-4 bg-[#D9D9D9] rounded-[20px] pb-4 flex items-center gap-4"
//           >
//             {/* Imagen al lado de la pregunta */}
//             <div className="flex-shrink-0">
//               <Image src={item.imagen} alt="Icono pregunta" width={50} height={50} />
//             </div>
            
//             <div className="flex-1">
//               <div
//                 className="cursor-pointer text-lg font-medium text-black"
//                 onClick={() => toggleRespuesta(index)}
//               >
//                 {item.pregunta}
//               </div>
//               {abierta === index && (
//                 <div className="mt-2 text-gray-700">{item.respuesta}</div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

