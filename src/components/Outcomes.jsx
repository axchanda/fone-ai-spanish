import Bar from './animation'

export default function RevenueComparison({ onCtaClick }) {
  const diyItems = [
    "Configuración de integración VAPI + ElevenLabs + OpenAI",
    "Ingeniería de portal de marca blanca",
    "Necesidad de construir arquitectura multi-tenant",
    "Integración de sistema de facturación",
    "Sin ayuda de ingeniero de prompts",
    "Sin soporte de co-creación",
  ];

  const resellerItems = [
    "Motor de IA preconstruido incluido",
    "Portal de marca blanca listo",
    "Multi-tenant desde el primer día",
    "Facturación de uso automatizada",
    "Ingeniería de prompts y soporte de incorporación",
    "Soporte de co-creación incluido",
  ];

  return (
    <section className="bg-[#f5f5f5] py-10 lg:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Cada Mes Construyendo IA Usted Mismo Es
            <br />
            <span className="text-[#1565F7]">
              Ingresos Que Sus Competidores
            </span>
            <br />
            Ya Están Ganando.
          </h2>
        </div>

        {/* Tabla de Comparación */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-5xl grid md:grid-cols-2">
            {/* Lado Izquierdo */}
            <div className="rounded-tl-3xl overflow-hidden">
              <div className="bg-[#d9d9d9] h-16 flex items-center justify-center font-semibold text-gray-700">
                Construcción Propia (Típica)
              </div>

              {diyItems.map((item, index) => (
                <div
                  key={index}
                  className="h-16 border-b border-gray-200 bg-[#efefef] flex items-center px-5"
                >
                  <span className="text-red-500 mr-3">✕</span>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            {/* Lado Derecho */}
            <div className="rounded-3xl overflow-hidden shadow-xl relative md:mt-0">
              <div className="bg-black text-white h-16 flex items-center justify-center font-semibold">
                Fone AI (Revendedor)
              </div>

              {resellerItems.map((item, index) => (
                <div
                  key={index}
                  className="h-16 bg-[#1565F7] border-b border-blue-400 flex items-center justify-center px-5"
                >
                  <span className="text-white text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-10 lg:mt-10">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-[#1565F7] hover:bg-blue-700 transition-all duration-300 text-white font-semibold text-2xl px-12 py-5 rounded-xl shadow-[0_0_40px_rgba(21,101,247,0.5)]"
          >
            Reservar Mi Demo de Lanzamiento de Voz con IA
          </button>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase text-gray-700">
            <span className="text-[#1565F7] text-lg">•</span>
            <span>Solo 3 Cupos de Lanzamiento Disponibles Este Junio</span>
          </div>

          {/* Barra de Progreso */}
          <Bar/>
        </div>
      </div>
    </section>
  );
}