import Bar from './animation'

export default function FeaturesSection({ onCtaClick }) {
  const features = [
    {
      title: "Voz Multilingüe",
      description:
        "Agentes de IA que hablan los idiomas de sus clientes de forma nativa. Más de 14 idiomas incluidos: español, portugués, inglés, francés, alemán, italiano y más, con acento y tono natural para cada mercado.",
    },
    {
      title: "Integración con Asterisk, FreeSWITCH, ViciDial y Más",
      description:
        "Integración SIP nativa con su infraestructura de telefonía existente. Sin migración de infraestructura. Conecte Fone AI directamente a su PBX mediante troncal SIP. Los agentes de IA responden, enrutan y transfieren llamadas dentro de su sistema actual.",
    },
    {
      title: "Agentes de IA con Prompts Preconfigurados",
      description:
        "Implemente agentes de IA listos para usar en recepción, reservas, soporte y calificación de leads. Sin necesidad de ingeniería de prompts compleja ni equipo de IA. Comience con plantillas probadas y ajuste para cada cliente.",
    },
    {
      title: "Autonomía del Cliente",
      description:
        "Permita que sus clientes creen, configuren y gestionen sus propios agentes de voz con IA de forma independiente, sin llamar a su equipo de soporte. Cada cliente obtiene su propio panel aislado con agentes, registros de llamadas y métricas de uso.",
    },
    {
      title: "Automatización de Flujos e Integraciones API",
      description:
        "Configure sistemas de citas para agendar reuniones, acceder a bases de datos, obtener datos de CRMs y activar flujos de trabajo automáticamente. API REST + automatizaciones nativas incluidas.",
    },
    {
      title: "Administración Completa en Marca Blanca",
      description:
        "Su logo, su dominio, su marca. Los clientes nunca ven Fone AI. Propiedad total de la marca en cada punto de contacto.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <h2 className="text-center font-bold leading-tight text-4xl md:text-5xl">
          Esto Es Lo Que Los Proveedores de PBX y UCaaS
          <br />
          Obtienen Con Fone AI -
          <span className="text-blue-500">
            {" "}
            Sin Gestionar Más de 15 Proveedores.
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Con Fone AI, los proveedores de PBX pueden implementar recepcionistas con IA,
          agentes de reservas y automatización de voz sin reconstruir su infraestructura.
        </p>

        {/* Características */}
        <div className="mt-12 space-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-green-500 text-2xl mt-1">✓</div>

              <div>
                <span className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded min">
                  {item.title}
                </span>

                <p className="text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-blue-600 hover:bg-blue-700 transition-all px-10 py-4 rounded-lg text-xl font-semibold shadow-[0_0_30px_rgba(37,99,235,0.6)]"
          >
            Reservar Mi Cupo de Demo en Fone AI
          </button>

          <p className="text-xs text-gray-400 mt-4 uppercase tracking-wide">
            • Sin Compromiso Requerido • Solo 3 Cupos de Proveedor Disponibles Este Mes
          </p>

          {/* Barra de progreso */}
          <Bar/>
        </div>
      </div>
    </section>
  );
}