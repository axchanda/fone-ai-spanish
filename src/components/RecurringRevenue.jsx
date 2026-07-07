import Bar from './animation'
import profile from '../images/profile.jpg'

export default function LaunchAIVoiceSection({ onCtaClick }) {
  return (
    <section className="bg-[#1565F7] pt-16 md:pt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Lanza la Voz con IA Una Vez.
            <br />
            Cobra a Tus Clientes Para Siempre.
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-sm md:text-base text-white/90 leading-relaxed">
            Incluso con clientes existentes sólidos, sus ingresos se mantienen
            estancados porque no tiene una respuesta de voz con IA. En 30 minutos,
            le mostraremos la infraestructura exacta que le permite lanzar, marcar
            y facturar servicios de teléfono con IA bajo su propio nombre.
          </p>
        </div>

        {/* Tarjeta Negra */}
        <div className="relative mt-16 bg-black rounded-[28px] px-6 md:px-12 py-12 md:py-16 shadow-2xl">
          {/* Tarjeta de Testimonio */}
          <div className="max-w-6xl mx-auto relative">
            {/* Burbuja de Cita */}
            <div className="absolute -top-10 right-8 z-10">
              <div className="w-20 h-20 rounded-full bg-[#1565F7] flex items-center justify-center shadow-xl">
                <span className="text-white text-5xl leading-none">❞</span>
              </div>
            </div>

            {/* Tarjeta */}
            <div className="border border-white/20 rounded-[24px] px-8 md:px-16 py-12 md:py-14 bg-black">

              {/* Testimonio */}
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-white/90 text-[24px] leading-[1.6] font-light">
                  "Intenté construir telefonía con IA usando VAPI y OpenAI. Era demasiado
                  costoso y no podía trasladarlo a los clientes de forma limpia. Fone AI
                  estuvo en vivo en dos días, 2 veces más barato, y mis clientes no han
                  tenido ni una sola interrupción.
                </p>

                <h3 className="mt-2 text-white text-[28px] font-extrabold">
                  Ingresos por cliente: $180 → $540/mes.
                </h3>

                <p className="text-white/80 text-[24px] mt-2">
                  Los mismos clientes. La misma infraestructura. Pero un crecimiento
                  enorme en los ingresos."
                </p>
              </div>

              {/* Estrellas */}
              <div className="flex gap-2 mt-12">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#1565F7] text-3xl">★</span>
                ))}
              </div>

              {/* Divisor */}
              <div className="border-t border-white/10 mt-6 pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={profile}
                    alt="Mauricio"
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-white text-[30px] font-semibold leading-none">
                      Mauricio Colonel
                    </h4>

                    <p className="text-white/70 text-lg mt-2">
                      Fundador, Clever Ideas AI · México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón CTA */}
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={onCtaClick}
              className="bg-[#1565F7] hover:bg-blue-700 transition-all duration-300 text-white font-semibold text-xl px-10 py-5 rounded-xl shadow-[0_0_40px_rgba(21,101,247,0.65)]"
            >
              Obtener Mi Demo Personalizado de Lanzamiento con IA
            </button>

            <p className="text-[11px] text-gray-400 uppercase tracking-wide mt-5">
              • Los proveedores que se incorporaron el mes pasado ya están facturando
              servicios de IA
            </p>

            {/* Indicador de Progreso */}
            <Bar/>
          </div>
        </div>
      </div>

      {/* Área Gris Inferior */}
      <div className="bg-[#ECECEC] h-20 mt-[-40px]" />
    </section>
  );
}