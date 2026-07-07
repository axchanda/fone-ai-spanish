import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ArrowRight, Loader2 } from 'lucide-react'

const BENEFITS = [
  'Incorporación enfocada en telecomunicaciones. Hablamos su idioma.',
  'Marca blanca lista desde el primer día. Su marca, su portal.',
  'Plataforma orientada al revendedor. Márgenes integrados desde el inicio.',
  'Soporte de co-creación. Créditos gratuitos para incorporar a sus primeros clientes.',
  'Despliegue rápido. Primeros clientes en vivo dentro de la primera semana.',
  'Todos los motores de IA incluidos. ElevenLabs, OpenAI, STT, sin rastreo de tokens, minutos o créditos.',
  'Sin compromiso requerido. Vea la plataforma y luego decida.',
]

export default function DemoForm() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    full_name: '',
    company_name: '',
    work_email: '',
    phone: '',
    current_platform: '',
    timeline: '',
  })

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const data = new FormData()
      Object.entries(form).forEach(([k, v]) => data.append(k, v))

      const res = await fetch('https://getnos.io/fone-ai/main.php', {
        method: 'POST',
        body: data,
      })

      const json = await res.json().catch(() => ({}))

      if (res.ok && json.success) {
        navigate('/thank-you')
      } else {
        setError(json.message || 'Algo salió mal. Por favor intente de nuevo.')
        setSubmitting(false)
      }
    } catch (err) {
      setError('Error de red. Por favor verifique su conexión e intente de nuevo.')
      setSubmitting(false)
    }
  }

  return (
    <section id="demo" className="section-padding bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-4">
              Programe Su Demo
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Conviértase En El Proveedor<br />
              de Telecomunicaciones Que <span className="text-brand-300 italic">Exitosamente</span><br />
              Transitó Hacia la IA.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-7">
              Reserve una demo en vivo y vea cómo los proveedores de PBX y UCaaS están lanzando
              servicios de voz con IA bajo su propia marca sin reconstruir su infraestructura.
            </p>

            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-green-400 text-green-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-gray-200 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/30 to-transparent blur-2xl pointer-events-none" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-white text-ink-900 rounded-2xl p-6 md:p-8 shadow-2xl"
            >
              <h3 className="font-display font-bold text-xl md:text-2xl mb-1">Programe Su Demo En Vivo</h3>
              <p className="text-sm text-gray-500 mb-6">Demo de 30 minutos adaptada a operadores de PBX y UCaaS.</p>

              <div className="space-y-4">
                <Field label="Nombre Completo" required>
                  <input
                    type="text"
                    required
                    value={form.full_name}
                    onChange={update('full_name')}
                    placeholder="María Rodríguez"
                    className="input-base"
                  />
                </Field>

                <Field label="Nombre de la Empresa" required>
                  <input
                    type="text"
                    required
                    value={form.company_name}
                    onChange={update('company_name')}
                    placeholder="Su empresa de telecomunicaciones"
                    className="input-base"
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Correo Corporativo" required>
                    <input
                      type="email"
                      required
                      value={form.work_email}
                      onChange={update('work_email')}
                      placeholder="usted@empresa.com"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Número de Teléfono">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="input-base"
                    />
                  </Field>
                </div>

                <Field label="Plataforma Actual">
                  <input
                    type="text"
                    value={form.current_platform}
                    onChange={update('current_platform')}
                    placeholder="FreePBX, 3CX, Asterisk, Broadworks..."
                    className="input-base"
                  />
                </Field>

                <Field label="Cuándo Planea Implementar" required>
                  <select
                    required
                    value={form.timeline}
                    onChange={update('timeline')}
                    className="input-base"
                  >
                    <option value="">Seleccione un plazo</option>
                    <option value="immediately">De inmediato</option>
                    <option value="1-3 months">En 1-3 meses</option>
                    <option value="3-6 months">En 3-6 meses</option>
                    <option value="exploring">Solo explorando</option>
                  </select>
                </Field>
              </div>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full mt-6 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Programar Mi Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-gray-500 text-center mt-4">
                Sin compromiso · Llamada de 30 minutos · Enfocada en telecomunicaciones
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.625rem;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          font-size: 0.875rem;
          color: #0a0a0f;
          transition: all 0.2s;
          outline: none;
        }
        .input-base:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }
        .input-base::placeholder {
          color: #9ca3af;
        }
      `}</style>
    </section>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-gray-700 mb-1.5 block">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  )
}