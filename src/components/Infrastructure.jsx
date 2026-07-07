import { Check } from "lucide-react";
import bggif from "../images/video.mp4";
import { useState } from "react";

export default function DemoSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    platform: "",
    implementation: "",
  });

  const [loading, setLoading] = useState(false);

  const features = [
    {
      title: "Incorporación enfocada en telecomunicaciones.",
      desc: "Hablamos su idioma.",
    },
    {
      title: "Marca blanca lista desde el primer día.",
      desc: "Su marca, su portal.",
    },
    {
      title: "Plataforma orientada al revendedor.",
      desc: "Márgenes integrados desde el inicio.",
    },
    {
      title: "Soporte de co-creación.",
      desc: "Créditos gratuitos para incorporar a sus primeros clientes.",
    },
    {
      title: "Despliegue rápido.",
      desc: "Primeros clientes en vivo dentro de la primera semana.",
    },
    {
      title: "Todos los motores de IA incluidos.",
      desc: "ElevenLabs, OpenAI, STT, sin rastreo de tokens.",
    },
    {
      title: "Sin compromiso requerido.",
      desc: "Vea la plataforma y luego decida.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://yourdomain.com/api/demo.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("¡Demo programada exitosamente!");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          platform: "",
          implementation: "",
        });
      } else {
        alert(result.message || "Error en el envío.");
      }
    } catch (error) {
      console.error(error);
      alert("Algo salió mal.");
    }

    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-black text-white py-20 px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-95 pointer-events-none"
      >
        <source src={bggif} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CONTENIDO IZQUIERDO */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-none tracking-tight">
              Conviértase En El Proveedor
              <br />
              de Telecomunicaciones Que
              <br />
              Exitosamente
              <br />
              <span className="text-[#1565ff]">Transitó Hacia la IA.</span>
            </h2>

            <p className="text-gray-400 mt-8 max-w-lg text-lg leading-relaxed">
              Reserve una demo en vivo y vea cómo los proveedores de PBX y UCaaS
              están lanzando servicios de voz con IA bajo su propia marca sin
              reconstruir su infraestructura.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mt-1 shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>

                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      {item.title}
                    </span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TARJETA DEL FORMULARIO */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#101114] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <h3 className="text-3xl font-bold">Programe Su Demo En Vivo</h3>

              <p className="text-gray-500 text-sm mt-2">
                Demo de 30 minutos adaptada a operadores de PBX y UCaaS.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    placeholder="María Rodríguez"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    placeholder="Su empresa de telecomunicaciones"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Correo Corporativo
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      placeholder="usted@empresa.com"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">
                      Número de Teléfono
                    </label>
                    <input
                      type="text"
                      value={formData.phone}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Plataforma Actual
                  </label>
                  <input
                    type="text"
                    value={formData.platform}
                    placeholder="FreePBX, 3CX, Asterisk, Broadworks..."
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Cuándo Planea Implementar
                  </label>
                  <input
                    type="text"
                    value={formData.implementation}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#1565ff] hover:bg-[#0f58eb] transition-all font-semibold text-white shadow-[0_10px_30px_rgba(21,101,255,0.45)] disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Programar Mi Demo →"}
                </button>

                <p className="text-center text-xs text-gray-600">
                  Sin compromiso · Llamada de 30 minutos · Enfocada en telecomunicaciones
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}