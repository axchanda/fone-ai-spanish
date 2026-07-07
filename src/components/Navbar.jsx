import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Plataforma', href: '#what-you-get' },
    { label: 'Cómo Funciona', href: '#how-it-works' },
    { label: 'Precios', href: '#revenue' },
    { label: 'Revendedores', href: '#testimonials' },
  ]

  return (
    <div className="w-full bg-black border-b border-white/10 font-poppins">
      <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-center gap-2 text-xs md:text-sm pt-10 pb-10">

        <span className="bg-[#ff4d4d] text-white text-[14px] font-bold uppercase px-3 py-[3px] rounded-md tracking-wide font-poppins">
          ATENCIÓN
        </span>

        <p className="text-white font-medium text-[10px] lg:text-[14px]">
          Proveedores de PBX y UCaaS,&nbsp;
          <span className="text-[#ff4d4d] font-semibold text-[14px]">
            Agregue Servicios de Voz con IA
          </span>
          &nbsp;Antes de que sus competidores capturen los ingresos.
        </p>

      </div>
    </div>
  )
}