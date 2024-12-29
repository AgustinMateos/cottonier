'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Poliester Fibra Cortada', description: 'Títulos: 120(40/2) - 90(30/2) - 75(24/2) - 20/3', href: '/poliesterFibraCortada', icon: '/iconoCono.svg'  },
    { name: 'Poliester Fibra Continua', description: 'Título: 150/1', href: '#', icon: '/iconoCono.svg' },
    { name: 'Algodón peinado apto para teñir', description: 'Títulos: 50(30/2) - 50(24/2) - 24/3 - 7/3', href: '#', icon: '/iconoCono.svg' },
    { name: 'Algodón mercerizado', description: 'Títulos: 80(50/2) - 52(32/2) - 40(24/2) - 24/3', href: '#', icon: '/iconoCono.svg' },
    { name: 'Hilo bolsero', description: 'Título: 20/6', href: '#', icon: '/iconoCono.svg' },
    { name: 'Hilo monofilamento de nylon', description: 'Título: 120', href: '#', icon: '/iconoCono.svg' },
    { name: 'Lubricantes', description: 'Tipos: Silicona - Aceite', href: '#', icon: '/iconoCono.svg' },
]
const callsToAction = [
    { name: 'Destacados', href: '#', icon: '/iconoCono.svg' },
    { name: 'Contacto', href: '/contacto', icon: '/iconoTelefono.svg' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <header className="">
     
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          
          <div className="flex lg:flex-1 bg-white">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cottonier S.R.L.</span>
              <img alt="" src="/logo.svg" className="h-[3rem] w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
  
          {/* Inicio en Desktop */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Inicio
            </a>
            <Popover className="relative">
              <PopoverButton className="flex focus:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Productos
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </PopoverButton>
  
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {/* Verificar si el icono es una ruta o un componente */}
                        {typeof item.icon === 'string' ? (
                          <img src={item.icon} alt={item.name} className="h-6 w-6" />
                        ) : (
                          <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                        )}
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <img
                        src={item.icon}
                        alt={`${item.name} icon`}
                        className="h-5 w-5 flex-none"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
  
            <a href="/nosotros" className="text-sm font-semibold leading-6 text-gray-900">
              Nosotros
            </a>
            <a href="/preguntasFrecuentes" className="text-sm font-semibold leading-6 text-gray-900">
              Preguntas Frecuentes
            </a>
            <a href="/contacto" className="text-sm font-semibold leading-6 text-gray-900">
              Contacto
            </a>
          </PopoverGroup>
        </nav>
  
        {/* Inicio en Mobile */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cottonier S.R.L.</span>
                <img
                  alt=""
                  src="logo.svg"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* Enlace de Inicio en Mobile */}
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Inicio
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Productos
                      <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="/nosotros"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Nosotros
                  </a>
                  <a
                    href="/preguntasFrecuentes"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Preguntas Frecuentes
                  </a>
                  <a
                    href="/contacto"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    )
  }
  