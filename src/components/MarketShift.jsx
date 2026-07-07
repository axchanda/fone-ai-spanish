import CTAButton from "./Button";
import aiIcon from '../images/strip.png'  
import messageIcon from '../images/message.png'
import messageIcon1 from '../images/message1.png'
import messageIcon2 from '../images/message2.png'
import Bar from './animation'

import {
  MessageCircle,
  BarChart3,
  TrendingDown,
} from "lucide-react";

export default function ProvidersSection({ onCtaClick }) {
  const cards = [
    {
      icon: <img src={messageIcon} alt="message" className="w-7 h-7" />,
      title: "Sus Clientes Ya Esperan IA",
      desc: "¿Soportas agentes telefónicos con IA? ya está entrando en las conversaciones de ventas de pymes y empresas. La pregunta ya no es si, sino cuándo tendrás una respuesta.",
    },
    {
      icon: <img src={messageIcon1} alt="message" className="w-7 h-7" />,
      title: "Sus Competidores Ya Le Están Vendiendo a Sus Clientes",
      desc: "Los proveedores de UCaaS con IA integrada se están posicionando como la alternativa moderna mientras los proveedores tradicionales de PBX quedan atrás. Cada trimestre sin IA es posicionamiento perdido.",
    },
    {
      icon: <img src={messageIcon2} alt="message" className="w-7 h-7" />,
      title: "Los Márgenes de PBX Alojado Están Disminuyendo",
      desc: "La voz con IA se está convirtiendo en la próxima capa de upsell de alto margen para los proveedores de telecomunicaciones que quieren seguir siendo competitivos. Sin ella, solo compites por precio.",
    },
  ];

  return (
    <section className="bg-[#f4f4f6] py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="min text-[26px] lg:text-[60px] md:text-[90px] font-extrabold leading-tight lg:leading-[80px]">
            Los Proveedores de Telefonía
            <br />
            Que Ganan Más Negocios Hoy
            <br />
            <span className="text-blue-600">
              Ya Venden
            </span>{" "}
            Voz con IA.
          </h2>

          <p className="mt-6 text-black text-lg leading-relaxed max-w-4xl mx-auto font-poppins">
            Los proveedores de UCaaS con IA integrada están atacando activamente
            sus cuentas ahora mismo. Cada semana sin una respuesta de IA es una
            semana que ellos usan para posicionarse como la alternativa moderna.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 min-h-[260px]"
            >
              <div className="text-black mb-6">
                {card.icon}
              </div>

              <h3 className="font-bold text-lg text-black mb-4 font-['Poppins']">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-poppins">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="flex justify-center mt-16 px-4">
          <button
            type="button"
            onClick={onCtaClick}
            className="
              w-full sm:w-auto
              max-w-md
              bg-[#0b42b1]
              hover:bg-[#0d57ef]
              text-white
              font-bold
              text-[15px] sm:text-lg md:text-2xl
              px-6 sm:px-8 md:px-6
              py-4 md:py-5
              rounded-xl
              shadow-[0_0_50px_rgba(20,99,255,.6)]
              transition
              text-center
              leading-tight
            "
          >
            Reservar Mi Demo de Lanzamiento de Voz con IA
          </button>
        </div>

        {/* Texto inferior */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <p className="uppercase tracking-wide text-xs font-semibold text-black">
            Los Proveedores Que Esperaron Perdieron Otro Trimestre Ante Competidores con IA
          </p>
        </div>

        {/* Barras de progreso */}
        <Bar/>

      </div>
    </section>
  );
}