
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
     
    },
    {
      pregunta: '¿Cuál es el mínimo de compra?',
      respuesta: 'El mínimo de compra son 6 conos por color.',
     
    },
    {
      pregunta: '¿Realizan envíos al interior del país?',
      respuesta: (
        <>
          Realizamos despachos de la mercadería por expreso o transporte sugerido por nuestro cliente, para compras superiores a $500.000, sujeto a nuestro radio de cobertura.
        </>
      ),
      
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
     
    },
    {
      pregunta: '¿Qué agujas son sugeridas según título de hilo?',
      respuesta: (
        <>
          <div className="grid grid-rows-1 gap-6">
            {/* HILOS 100% POLIÉSTER FIBRA CORTADA */}
            <div>
              <p className="font-semibold">HILOS 100% POLIÉSTER FIBRA CORTADA:</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="font-semibold text-[13px] sm:text-[16px]">Etiqueta Nro.</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Título inglés</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Sistema Americano</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Sistema Alemán</div>

                {/* Datos para No 120 */}
                <div>120</div>
                <div>40/2</div>
                <div>11</div>
                <div>75</div>

                {/* Datos para No 90 */}
                <div>90</div>
                <div>30/2</div>
                <div>12/14</div>
                <div>80/90</div>

                {/* Datos para No 75 */}
                <div>75</div>
                <div>24/2</div>
                <div>16/18</div>
                <div>100/110</div>

                {/* Datos para No 24/3 */}
                <div>24/3</div>
                <div>24/3</div>
                <div>19/20</div>
                <div>100/125</div>

                {/* Datos para No 20/3 */}
                <div>20/3</div>
                <div>20/3</div>
                <div>21/23</div>
                <div>130/140</div>
              </div>
            </div>

            {/* HILOS 100% ALGODÓN PEINADO Y MERCERIZADO */}
            <div>
              <p className="font-semibold">HILOS 100% ALGODÓN PEINADO Y MERCERIZADO:</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="font-semibold text-[13px] sm:text-[16px]">Etiqueta Nro.</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Título inglés</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Sistema Americano</div>
                <div className="font-semibold text-[13px] sm:text-[16px]">Sistema Alemán</div>

                {/* Datos para No 80 */}
                <div> 80</div>
                <div>50/2</div>
                <div>9/11</div>
                <div>75</div>

                {/* Datos para No 50 */}
                <div> 50</div>
                <div>30/2</div>
                <div>12/14</div>
                <div>80/90</div>

                {/* Datos para No 40 */}
                <div>40</div>
                <div>24/2</div>
                <div>16/18</div>
                <div>100/110</div>

                {/* Datos para No 30 */}
                <div>24/3</div>
                <div>24/23</div>
                <div>19/20</div>
                <div>110/120</div>
              </div>
            </div>
          </div>
        </>
      ),
      
    },
    {
      pregunta: '¿Cómo puedo visualizar la carta de colores?',
      respuesta: 'Puedes visualizar la carta de colores en nuestra tienda online o solicitándonosla directamente a través de los canales de ventas mencionados.',
      
    },
    {
      pregunta: '¿Cuáles son los tiempos de entrega de los pedidos?',
      respuesta: 'Los pedidos se preparan dentro de las 24hs de haber realizado el mismo. Una vez abonado, ya se encontrarán listos para el retiro.',
      
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
     
    },
    {
      pregunta: '¿Puedo comprar hilos directamente de su fábrica?',
      respuesta: 'No tomamos pedidos en nuestra fábrica. Los pedidos deben realizarse por alguno de nuestros canales de ventas previo retiro por nuestra fábrica.',
      
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
     
    },
  ];

  const [abierta, setAbierta] = useState(null);

  const toggleRespuesta = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-[90px] bg-[#ECECEC]">
      <div className="max-w-4xl mx-auto p-[10px] sm:p-6 bg-[#ECECEC]">
        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="border p-[0.5rem] sm:p-4 bg-[#ffffff] text-[10px] rounded-[20px] pb-4 flex items-center  gap-4"
            >
              {/* Imagen con rotación dinámica */}
              <div className="flex-shrink-0 transition-transform duration-300">
                <Image
                  src="/flechaFaq.svg"
                  alt="Flecha FAQ"
                  width={20}
                  height={20}
                  className={`transform ${
                    abierta === index ? 'rotate-90' : 'rotate-0'
                  }`}
                />
              </div>

              <div className="flex-1 ">
                {/* Pregunta */}
                <div
                  className="cursor-pointer text-lg font-medium text-black"
                  onClick={() => toggleRespuesta(index)}
                >
                  {item.pregunta}
                {/* Respuesta */}
                {abierta === index && (
                  <div className="mt-2 text-gray-700 text-[16px] sm:text-[15px]">{item.respuesta}</div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



