'use client'
import Link from 'next/link'
import Image from 'next/image'
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
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const products = [
  { name: 'Poliester Fibra Cortada', description: 'Títulos: 120(40/2) - 90(30/2) - 75(24/2) - 20/3', href: '/poliesterFibraCortada', icon: '/iconoCono.svg' },
  { name: 'Poliester Fibra Continua', description: 'Título: 150/1', href: '#', icon: '/iconoCono.svg' },
  { name: 'Algodón peinado apto para teñir', description: 'Títulos: 50(30/2) - 40(24/2)- hilado 24/2 - 24/3 - 7/3 ', href: '#', icon: '/iconoCono.svg' },
  { name: 'Algodón mercerizado', description: 'Títulos: 80(50/2) - 50(30/2) - 40(24/2) - 24/3', href: '#', icon: '/iconoCono.svg' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cottonier S.R.L.</span>
            <Image
              src="/Logo.svg"
              alt="Cottonier S.R.L."
              width={192}
              height={48}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href={"/"} className="text-sm font-semibold leading-6 text-gray-900">
            Inicio
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex focus:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Productos
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img src={item.icon} alt={item.name} className="h-6 w-6" />
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

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Cottonier S.R.L.</span>
              <Image
                src="/Logo.svg"
                alt="image cottonier"
                height={120}
                width={140}
                className="h-auto w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link
  href={"/"}
  onClick={() => setMobileMenuOpen(false)}  // Cerrar el menú cuando se haga clic
  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>
  Inicio
</Link>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Productos
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
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
                <Link
  href="/nosotros"
  onClick={() => setMobileMenuOpen(false)}  // Cerrar el menú cuando se haga clic
  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>
  Nosotros
</Link>
<Link
  href="/preguntasFrecuentes"
  onClick={() => setMobileMenuOpen(false)}  // Cerrar el menú cuando se haga clic
  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>
  Preguntas Frecuentes
</Link>
<Link
  href="/contacto"
  onClick={() => setMobileMenuOpen(false)}  // Cerrar el menú cuando se haga clic
  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
>
  Contacto
</Link>

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}