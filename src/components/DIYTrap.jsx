import {
  BarChart3,
  Flame,
  Cpu,
  User,
  Wrench,
  MonitorSmartphone,
} from "lucide-react";

import CTAButton from "./Button";
import ProgressBar from "./animation";

export default function ChaosSection({ onCtaClick }) {
  const cards = [
    {
      id: "01",
      icon: <BarChart3 size={24} />,
      title: "Sus Márgenes Se Reducen a Medida Que Crece el Uso",
      desc: "VAPI + OpenAI + ElevenLabs parece manejable hasta que el volumen de llamadas escala. La mayoría de las pilas de voz IA DIY superan silenciosamente los $0.10/minuto, destruyendo la rentabilidad antes de escalar.",
    },
    {
      id: "02",
      icon: <Flame size={24} />,
      title: "La Infraestructura de IA Se Convierte en un Pozo Sin Fondo",
      desc: "Síntesis de voz. LLMs. Registros. STT. Orquestación. Hosting. Lo que comienza como 'solo probando IA' se convierte en una factura de infraestructura creciente sin márgenes predecibles.",
    },
    {
      id: "03",
      icon: <Cpu size={24} />,
      title: "Las Integraciones Se Vuelven Sesiones Interminables de Depuración",
      desc: "CRMs, n8n, Make, enrutamiento SIP, APIs, transferencias en vivo. Un flujo de trabajo roto puede arruinar toda la experiencia del cliente.",
    },
    {
      id: "04",
      icon: <User size={24} />,
      title: "Las Transferencias a Humanos Son Más Difíciles de Lo Que Parecen",
      desc: "Lograr que los agentes de IA transfieran llamadas a personas reales de forma confiable es un problema técnico que la mayoría de los proveedores subestiman hasta que falla.",
    },
    {
      id: "05",
      icon: <Wrench size={24} />,
      title: "Los Tickets de Soporte Se Disparan",
      desc: "Cuando las llamadas de IA fallan, sus clientes lo culpan a usted. Sin paneles de control e infraestructura adecuados, su equipo de soporte se convierte en un departamento de resolución de problemas a tiempo completo.",
    },
    {
      id: "06",
      icon: <MonitorSmartphone size={24} />,
      title: "La Marca Blanca Falsa Destruye Su Posicionamiento",
      desc: "La mayoría de las herramientas de marca blanca solo cambian el logo. Los clientes eventualmente descubren al proveedor real debajo y su posicionamiento premium desaparece.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-10 lg:py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-[26px] lg:text-[56px] leading-[1.05] font-black tracking-tight text-black">
            Lo Que Comienza Como{" "}
            <span className="text-blue-600">
              "Lo Construiremos Nosotros Mismos"
            </span>
            <br />
            Suele Terminar en Caos Operativo.
          </h2>

          <p className="mt-5 text-gray-500 text-[15px]">
            Lo que la mayoría de los proveedores de PBX descubren solo después de
            desperdiciar de 3 a 6 meses intentando el camino DIY.
          </p>
        </div>

        {/* Caja de advertencia */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-[#FFF3CD] border border-[#F4D35E] rounded-xl px-5 py-4 flex items-center gap-4">
            <div className="text-yellow-600 text-xl">⚠</div>

            <div>
              <div className="text-[11px] font-bold uppercase text-[#C46A00]">
                Costo Oculto DIY
              </div>

              <div className="font-semibold text-[#B45309]">
                La mayoría de las pilas de voz IA DIY superan silenciosamente
                <span className="text-red-500">
                  {" "} $0.20/min
                </span>
                {" "}una vez que agregas VAPI + OpenAI + ElevenLabs
              </div>
            </div>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E7E7E7] rounded-2xl p-6 min-h-[185px] relative"
            >
              <span className="absolute top-5 right-5 text-[11px] text-gray-400 font-semibold">
                {card.id}
              </span>

              <div className="mb-5 text-black">
                {card.icon}
              </div>

              <h3 className="font-bold text-[18px] leading-snug mb-3">
                {card.title}
              </h3>

              <p className="text-gray-500 text-[13px] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="flex justify-center mt-8 lg:mt-16">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-[#0b42b1] hover:bg-[#0d57ef] text-white font-bold text-lxl md:text-2xl px-8 md:px-16 py-5 rounded-xl shadow-[0_0_50px_rgba(20,99,255,.6)] transition"
          >
            Reservar Mi Demo de Lanzamiento de Voz con IA
          </button>
        </div>

        {/* Componente de progreso */}
        <div className="mt-2 lg:mt-2 flex justify-center">
          <ProgressBar />
        </div>
      </div>
    </section>
  );
}