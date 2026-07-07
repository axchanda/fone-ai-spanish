export default function ThreeStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Conecte Su PBX",
      description:
        "Apunte su PBX existente a Fone AI mediante troncal SIP. Funciona con Asterisk, FreePBX, ViciDial, FreeSWITCH, 3CX, Issabel y más, sin cambios de código requeridos.",
      links: [
        "Asterisk",
        "FreePBX",
        "ViciDial",
        "FreeSWITCH",
        "3CX",
        "Issabel",
      ],
      active: false,
    },
    {
      number: "02",
      title: "Implemente Agentes de IA Bajo Su Marca",
      description:
        "Personalice su panel con su marca, configure agentes de IA multilingües con las bases de conocimiento de sus clientes y establezca sus propios precios. Su marca, sus reglas.",
      active: true,
    },
    {
      number: "03",
      title: "Lanza la Voz con IA Una Vez. Cobra Para Siempre.",
      description:
        "Active la voz con IA para sus clientes, establezca ingresos recurrentes y observe cómo la misma infraestructura que ya posee genera 3 veces más facturación mensual por cuenta.",
      active: false,
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            3 Pasos Para Capturar Los Ingresos de IA Que Sus
            <br />
            <span className="text-[#1565F7]">
              Competidores Ya Están Obteniendo.
            </span>
          </h2>

          <p className="mt-5 text-gray-500 text-sm md:text-base">
            Tres pasos. Sin ingeniería de IA. Sin reconstrucción del backend.
            Sin interrupciones en lo que ya opera.
          </p>
        </div>

        {/* Pasos */}
        <div className="relative mt-20">
          {/* Línea de conexión */}
          <div className="hidden lg:block absolute top-16 left-[18%] right-[18%] h-[2px] bg-[#1565F7]" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Círculo con número */}
                <div className="absolute -top-6 left-6">
                  <div className="w-16 h-16 rounded-full bg-[#1565F7] shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Tarjeta */}
                <div
                  className={`pt-14 pb-8 px-6 rounded-2xl border min-h-[260px] ${
                    step.active
                      ? "bg-[#e9edf3] border-[#d9dee7]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <h3 className="text-xl font-bold text-black leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {step.links && (
                    <div className="mt-5 flex flex-wrap gap-1 text-xs font-semibold text-[#1565F7]">
                      {step.links.map((item) => (
                        <span key={item}>{item} ·</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}