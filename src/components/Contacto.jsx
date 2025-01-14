'use client'

import React, { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contacto() {
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const items = [
    {
      src: "/Phone.svg",
      alt: "Teléfono",
      text: "4582-2014/4581-9129",
    },
    {
      src: "/mail.svg",
      alt: "Correo",
      text: "VENTAS@COTTONIER.COM.AR",
    },
    {
      src: "/schedule.svg",
      alt: "Horario",
      text: "Lunes a Viernes de 9:00 a 16:30 horas.",
    },
  ];

  const handleCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      alert("Por favor, valida el CAPTCHA antes de enviar.");
      return;
    }
    // Aquí agregas la lógica para enviar el formulario
    alert("Formulario enviado con éxito.");
  };

  return (
    <div className="bg-[#ECECEC] pt-[60px]">
      <div className="w-full flex flex-row flex-wrap justify-around h-[80vh] md:h-[30vh] items-center ">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col text-center items-center">
            <Image src={item.src} alt={item.alt} width={50} height={50} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col-reverse sm:flex-row sm:h-auto flex-wrap md:flex-nowrap justify-evenly min-h-[150vh] md:min-h-[50vh] p-[20px]">
        {/* Mapa */}
        <div className="w-full md:w-[40%] h-[400px] md:h-auto ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.29072711729!2d-58.4709084826477!3d-34.608645076235554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca1b9d1f4617%3A0x8a5192b989746c98!2sCottonier%20S.R.L.%20FABRICA%20DE%20HILOS!5e0!3m2!1ses-419!2sar!4v1734843189223!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Formulario */}
        <div className="w-full h-[60%] md:w-[40%] p-6 bg-white rounded-[20px] ">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tu teléfono"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tu email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Consulta
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
                placeholder="Tu consulta"
                required
              />
            </div>

            {/* CAPTCHA */}
            <ReCAPTCHA
              sitekey="6Ldjx7YqAAAAAHXjDw1yqjYYK_oEfciZvSyg9zjk"
              onChange={handleCaptchaChange}
            />

            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={!isCaptchaValid}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
