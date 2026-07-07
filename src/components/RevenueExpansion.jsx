import Bar from './animation'

export default function TelecomFeatures({ onCtaClick }) {
  const features = [
    {
      badge: "SIP / VoIP",
      title: "Integración Nativa SIP / VoIP",
      description:
        "Conecte Fone AI como agente remoto mediante extensiones SIP. Sus operadores, enrutamiento e infraestructura de telecomunicaciones actuales permanecen intactos.",
    },
    {
      badge: "Motores de IA",
      title: "Motores de IA Ya Incluidos",
      description:
        "OpenAI, ElevenLabs, AWS Polly, STT, RAG. Sin necesidad de conectar múltiples proveedores de IA y esperar que la infraestructura aguante.",
    },
    {
      badge: "RAG",
      title: "Su IA Conoce el Negocio de Su Cliente",
      description:
        "Suba documentos, SOPs, preguntas frecuentes, listas de precios o documentos de soporte usando RAG. Los agentes de IA responden usando contexto empresarial real en lugar de respuestas genéricas.",
    },
    {
      badge: "APIs y automatización",
      title: "Conecte CRMs, APIs y Automatizaciones Rápidamente",
      description:
        "APIs REST e integraciones con Make, Zapier, n8n, bases de datos y CRMs. Automatice reservas, obtenga datos de clientes, active flujos de trabajo y sincronice acciones automáticamente.",
    },
    {
      badge: "Sin reconstrucción",
      title: "No Se Requiere Reconstrucción del Backend",
      description:
        "Sin migración de infraestructura. Sin interrupción de operadores. Sin pesadilla de ingeniería. Solo voz con IA agregada sobre el negocio de telecomunicaciones que ya construyó.",
    },
    {
      badge: "Multi-Cliente",
      title: "Diseñado Para Operaciones de Telecomunicaciones Multi-Cliente",
      description:
        "Gestione múltiples espacios de trabajo de clientes, agentes de IA, facturación y uso desde un panel de revendedor sin convertir la incorporación en un caos operativo.",
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Se Integra Directamente en Su Infraestructura de Telecomunicaciones Existente.
          </h2>

          <h3 className="text-3xl md:text-5xl font-extrabold mt-1">
            <span className="text-blue-600">Viene Con</span>{" "}
            <span className="text-black">Todo Incluido.</span>
          </h3>
        </div>

        {/* Tarjetas de Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 min-h-[190px] hover:shadow-lg transition"
            >
              <span className="inline-flex items-center rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 mb-4">
                {item.badge}
              </span>

              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="flex flex-col items-center mt-14">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition"
          >
            Obtener Mi Demo En Vivo del Primer Cliente con IA
          </button>

          <p className="mt-6 text-xs uppercase tracking-wide text-gray-700 font-medium">
            • Cada Lanzamiento Retrasado Es Ingreso de IA Perdido
          </p>

          {/* Barras de Progreso */}
          <Bar/>
        </div>
      </div>
    </section>
  );
}