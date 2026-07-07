import {
  Star,
  Quote,
} from "lucide-react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import Bar from './animation'
import group from "../images/pn.png";
import group1 from "../images/quotw.png";

const testimonials = [
  {
    name: "Fernando Vega",
    role: "Operador PBX, México",
    text: (
      <>
        "Teníamos una sólida base de clientes VoIP en México pero sin oferta de IA.
        Los competidores comenzaban a presentarles propuestas. Fone AI nos permitió conectar
        nuestro PBX existente y lanzar bajo nuestra propia marca en menos de una semana.
        <span className="font-bold text-white">
          {" "}
          El primer cliente entró en vivo el día 4.
        </span>{" "}
        Ahora somos el único proveedor de voz con IA en nuestro segmento de mercado."
      </>
    ),
    image: img1,
  },

  {
    name: "Diego Ferreira",
    role: "Director, Soluciones VoIP · São Paulo, BR",
    text: (
      <>
        "Administro una empresa FreePBX en São Paulo. Pensé que la voz con IA significaba
        reconstruir toda mi infraestructura. Fone AI me demostró que estaba equivocado.
        <span className="font-bold text-white">
          {" "}
          Troncal SIP conectada en 2 horas, primera recepcionista con IA en vivo el mismo día.
        </span>{" "}
        Mis clientes creen que lo construí yo mismo. Ese es exactamente el punto."
      </>
    ),
    image: img2,
  },

  {
    name: "Patricia Wong",
    role: "CEO, ContactBase Systems · Toronto, CA",
    text: (
      <>
        "Gestionamos un centro de contacto VICIdial y pasábamos el 40% del tiempo de soporte
        resolviendo problemas de IA con nuestra antigua infraestructura. Desde que migramos a Fone AI,
        <span className="font-bold text-white">
          {" "}
          los tickets de soporte cayeron un 60% y nuestros clientes ahora gestionan sus propios
          agentes de IA
        </span>{" "}
        sin llamarnos. La autonomía del cliente fue la función que no sabíamos que necesitábamos."
      </>
    ),
    image: img3,
  },

  {
    name: "Ana Suarez",
    role: "Directora · Operadora PBX · Bogotá, CO",
    text: (
      <>
        "Cada plataforma de 'marca blanca' que probamos seguía exponiendo al proveedor original
        en algún lugar. Los clientes lo notaban de inmediato. Fone AI fue la primera plataforma que
        <span className="font-bold text-white">
          {" "}
          realmente se sentía nuestra de principio a fin.
        </span>{" "}
        La incorporación se volvió más rápida y los clientes gestionan sus propios agentes de IA
        sin llamar a nuestro equipo."
      </>
    ),
    image: img4,
  },

  {
    name: "Rafael Lopez",
    role: "Fundador, ComunicaNet · Barcelona, ES",
    text: (
      <>
        "Nuestros clientes preguntaban por agentes telefónicos con IA, pero construirlo internamente
        se convirtió en un agujero negro de ingeniería. Fone AI nos dio una plataforma de voz con IA
        lista para revendedores bajo nuestra marca sin reconstruir nuestra infraestructura.
        <span className="font-bold text-white">
          {" "}
          Los upsells de IA ahora generan más ingresos que algunas de nuestras cuentas de PBX alojado.
        </span>
        "
      </>
    ),
    image: img5,
  },

  {
    name: "Jorge Ruiz",
    role: "Fundador, TelecomPro · Miami, FL",
    text: (
      <>
        "Era escéptico sobre la capacidad multilingüe. Nuestra base de clientes está dividida entre
        hablantes de inglés y español. Fone AI maneja ambos con
        <span className="font-bold text-white">
          {" "}
          acentos naturales que los clientes no pueden distinguir de una persona real.
        </span>{" "}
        Esa fue la pieza que finalmente me convenció de lanzar."
      </>
    ),
    image: img6,
  },
];

export default function TestimonialsSection({ onCtaClick }) {
  return (
    <section className="bg-black py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Encabezado */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="font-black text-white leading-[2] text-4xl md:text-5xl lg:text-5xl font-extrabold">
            Descubra Cómo los Proveedores de PBX y UCaaS
            <br />
            Comenzaron a Vender Voz con IA
            <br />
            <span className="text-[#1463FF]">
              Sin Perder Meses
            </span>{" "}
            Construyéndola Ellos Mismos.
          </h2>
        </div>

        {/* Fila de calificación */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>

          <span className="text-white font-bold text-2xl md:text-3xl">
            4.9/5
          </span>

          <div className="hidden md:block w-px h-8 bg-white/20"></div>

          <p className="text-white text-sm md:text-lg font-medium">
            Más de 30 reseñas verificadas de proveedores UCaaS y PBX
          </p>

          <img
            src={group}
            alt="Revisores verificados"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Cuadrícula de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-black border border-[#232323] rounded-2xl p-6"
            >
              <div className="absolute -top-10 right-5 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                <img
                  src={group1}
                  alt="Perfil"
                  className="w-10 h-10 rounded-full object-cover top-5"
                />
              </div>

              <p className="text-[#CFCFCF] text-[18px] leading-7 min-h-[190px] max">
                {item.text}
              </p>

              <div className="flex gap-1 text-[#1463FF] mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <div className="border-t border-[#232323] mt-5 pt-5 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Área CTA */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-[#1463FF] hover:bg-[#0d57ef] text-white font-bold text-lg md:text-2xl px-8 md:px-16 py-5 rounded-xl shadow-[0_0_50px_rgba(20,99,255,.6)] transition"
          >
            Vea Cómo Triplicaron Sus Ingresos Con La Misma Base de Clientes
          </button>
        </div>

        {/* Texto inferior */}
        <div className="text-center mt-8">
          <p className="text-xs uppercase tracking-wider text-gray-400">
            <span className="text-[#1463FF]">• 34+</span> Proveedores Lanzaron IA.
            Lanza el Tuyo También.
          </p>
        </div>

        {/* Componente de progreso */}
        <Bar/>
      </div>
    </section>
  );
}