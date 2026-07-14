import { ArrowRight, Check, Mic, Cpu, Phone, BookOpen, Workflow, Link2, TrendingUp, TrendingDown } from 'lucide-react'
import favicon from '../images/logo.png'
import Bar from './animation'
import logo1 from '../images/freepbx.png'
import logo2 from '../images/asterisk.png'
import logo3 from '../images/vividial.jpg'
import logo4 from '../images/3cx.png'
import logo5 from '../images/issabel.png'
import { useEffect, useRef } from 'react'

function AICanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const cx = () => canvas.width / 2
    const cy = () => canvas.height / 2

    const RING_COUNT = 3
    const rings = Array.from({ length: RING_COUNT }, (_, ri) => ({
      radius: 120 + ri * 90,
      particleCount: 60 + ri * 30,
      speed: 0.0008 + ri * 0.0004,
      offset: (ri * Math.PI * 2) / RING_COUNT,
      particles: Array.from({ length: 60 + ri * 30 }, (__, pi) => ({
        angle: (pi / (60 + ri * 30)) * Math.PI * 2,
        spread: (Math.random() - 0.5) * 40,
        size: 1 + Math.random() * 2.5,
        color: [
          `rgba(147,51,234,${0.5 + Math.random() * 0.5})`,
          `rgba(59,130,246,${0.5 + Math.random() * 0.5})`,
          `rgba(236,72,153,${0.4 + Math.random() * 0.5})`,
          `rgba(34,211,238,${0.4 + Math.random() * 0.5})`,
          `rgba(255,255,255,${0.6 + Math.random() * 0.4})`,
        ][Math.floor(Math.random() * 5)],
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.03 + Math.random() * 0.05,
      })),
    }))

    const AI_WORDS = [
      'IA', 'LLM', 'STT', 'TTS', 'RAG', 'NLP',
      'API', 'SIP', 'GPT', 'VoIP', 'UCaaS', 'PBX',
      'ML', 'ASR', 'NLU', 'IVR', 'WebRTC', 'ACD',
    ]
    const wordTags = AI_WORDS.map((word, i) => ({
      word,
      x: 60 + Math.random() * (canvas.width - 120),
      y: 40 + Math.random() * (canvas.height - 80),
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.15 - Math.random() * 0.25,
      opacity: 0.12 + Math.random() * 0.18,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.008 + Math.random() * 0.012,
      fontSize: 9 + Math.floor(Math.random() * 5),
    }))

    const NODE_COUNT = 28
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1.5 + Math.random() * 2,
      pulse: Math.random() * Math.PI * 2,
    }))

    const packets = Array.from({ length: 8 }, () => ({
      from: Math.floor(Math.random() * NODE_COUNT),
      to: Math.floor(Math.random() * NODE_COUNT),
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.003,
    }))

    let time = 0

    const draw = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const ox = cx(), oy = cy()

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 180)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.025
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
        const p = 0.5 + 0.5 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + 3 * p, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(139,92,246,${0.08 * p})`
        ctx.lineWidth = 1; ctx.stroke()
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${0.4 + 0.3 * p})`
        ctx.fill()
      })

      packets.forEach(p => {
        p.t += p.speed
        if (p.t >= 1) { p.t = 0; p.from = p.to; p.to = Math.floor(Math.random() * NODE_COUNT) }
        const a = nodes[p.from], b = nodes[p.to]
        const px = a.x + (b.x - a.x) * p.t
        const py = a.y + (b.y - a.y) * p.t
        ctx.beginPath(); ctx.arc(px, py, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(196,181,253,0.85)'; ctx.fill()
        const tail = Math.max(0, p.t - 0.05)
        const tx = a.x + (b.x - a.x) * tail, ty = a.y + (b.y - a.y) * tail
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(px, py)
        ctx.strokeStyle = 'rgba(196,181,253,0.3)'; ctx.lineWidth = 1.2; ctx.stroke()
      })

      rings.forEach((ring, ri) => {
        ring.offset += ring.speed
        ring.particles.forEach(p => {
          p.twinkle += p.twinkleSpeed
          const angle = p.angle + ring.offset
          const spreadR = ring.radius + p.spread
          const px = ox + Math.cos(angle) * spreadR
          const py = oy + Math.sin(angle) * spreadR * 0.38
          const twinkleScale = 0.5 + 0.5 * Math.sin(p.twinkle)
          const size = p.size * twinkleScale
          ctx.beginPath()
          ctx.arc(px, py, Math.max(0.3, size), 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.fill()
        })
      })

      const glowR = 58 + Math.sin(time * 1.2) * 4

      ctx.save()
      ctx.setLineDash([4, 6])
      ctx.beginPath()
      ctx.ellipse(ox, oy, glowR + 18, (glowR + 18) * 0.4, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(167,139,250,0.25)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()

      const glowGrad = ctx.createRadialGradient(ox, oy, 0, ox, oy, glowR)
      glowGrad.addColorStop(0, 'rgba(109,40,217,0.55)')
      glowGrad.addColorStop(0.5, 'rgba(79,70,229,0.25)')
      glowGrad.addColorStop(1, 'rgba(79,70,229,0)')
      ctx.beginPath()
      ctx.arc(ox, oy, glowR, 0, Math.PI * 2)
      ctx.fillStyle = glowGrad
      ctx.fill()

      ctx.beginPath()
      ctx.arc(ox, oy, glowR - 10, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(196,181,253,0.35)'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.font = `bold ${34 + Math.sin(time) * 1.5}px sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.shadowColor = 'rgba(167,139,250,0.9)'
      ctx.shadowBlur = 22
      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.fillText('IA', ox, oy)
      ctx.shadowBlur = 0

      wordTags.forEach(tag => {
        tag.x += tag.vx; tag.y += tag.vy; tag.phase += tag.phaseSpeed
        if (tag.y < -20) { tag.y = canvas.height + 20; tag.x = 60 + Math.random() * (canvas.width - 120) }
        if (tag.x < 0 || tag.x > canvas.width) tag.vx *= -1
        const wobble = Math.sin(tag.phase) * 8
        const alpha = tag.opacity * (0.7 + 0.3 * Math.sin(tag.phase * 1.3))
        ctx.font = `bold ${tag.fontSize}px monospace`
        ctx.textAlign = 'left'
        ctx.textBaseline = 'alphabetic'
        const w = ctx.measureText(tag.word).width + 10
        const xPos = tag.x + wobble, yPos = tag.y
        ctx.strokeStyle = `rgba(139,92,246,${alpha * 0.6})`
        ctx.lineWidth = 0.7
        ctx.strokeRect(xPos - 5, yPos - tag.fontSize, w, tag.fontSize + 6)
        ctx.fillStyle = `rgba(196,181,253,${alpha})`
        ctx.fillText(tag.word, xPos, yPos)
      })

      const scanY = ((Date.now() / 5000) % 1) * canvas.height
      const scanGrad = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      scanGrad.addColorStop(0, 'rgba(139,92,246,0)')
      scanGrad.addColorStop(0.5, 'rgba(139,92,246,0.03)')
      scanGrad.addColorStop(1, 'rgba(139,92,246,0)')
      ctx.fillStyle = scanGrad
      ctx.fillRect(0, scanY - 50, canvas.width, 100)

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  )
}

export default function Hero({ onCtaClick }) {
  return (
    <section className="relative pt-18 md:pt-4 pb-20 md:pb-28 overflow-hidden bg-black text-white">

      <AICanvas />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(88,28,219,0.18) 0%, rgba(49,10,130,0.10) 40%, transparent 70%)' }} />
        <div className="absolute top-0 left-0 w-full h-full"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(67,20,150,0.12) 0%, transparent 65%)' }} />
      </div>

      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none z-0" />

      <div className="absolute left-10 top-8 hidden md:flex items-center gap-3 px-4 py-3 text-white shadow-2xl shadow-black/25 backdrop-blur-md z-10">
        <img src={favicon} alt="Fone AI" className="h-12 w-auto" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-6xl mx-auto pt-8 md:pt-4">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/6 border border-white/10 shadow-sm mb-6 animate-fade-in">
            <span className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-gray-200">
              Con la confianza de proveedores visionarios de PBX, UCaaS y VoIP
            </span>
          </div>

          <h1 className="text-[38px] lg:text-7xl font-extrabold leading-[48px] lg:leading-[90px] mb-6 animate-fade-in-up text-center" style={{ letterSpacing: '-2.38px' }}>
            <span className="font-poppins block text-white">Lanza <span className="text-[#0063FF]">'IA Agentica'</span></span>
            <span className="font-poppins block text-white">Con Tu Propia Marca</span>
            <span className="font-poppins block text-gray-300">Sin Construirla Tu Mismo.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            La demanda de voz con IA ya esta aqui. La mayoria de proveedores de PBX y UCaaS siguen atrapados
            gestionando herramientas de IA inestables e infraestructura costosa. Fone AI te da una plataforma
            de voz con IA en etiqueta blanca lista para lanzar bajo tu marca, sin el caos de ingenieria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up relative" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="hero-cta-glow" />
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-[#0b42b1] hover:bg-[#0d57ef] text-white font-bold text-lxl md:text-2xl px-8 md:px-16 py-5 rounded-xl shadow-[0_0_50px_rgba(20,99,255,.6)] transition"
              >
                Solicitar Mi Demo de Lanzamiento de Voz IA
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-6">
            <Bar />
          </div>

          <p className="text-xs uppercase tracking-[0.18em] text-gray-400 font-semibold mt-10">
            Plataforma Compatible con los PBX Estandar de la Industria
          </p>
        </div>

        <div className="overflow-hidden py-6">
          <div className="flex w-max animate-marquee">
            <img src={logo1} alt="Logo 1" className="w-32 h-20 object-contain mx-6" />
            <img src={logo2} alt="Logo 2" className="w-32 h-20 object-contain mx-6" />
            <img src={logo3} alt="Logo 3" className="w-32 h-20 object-contain mx-6" />
            <img src={logo4} alt="Logo 4" className="w-32 h-20 object-contain mx-6" />
            <img src={logo5} alt="Logo 5" className="w-32 h-20 object-contain mx-6" />
            <img src={logo1} alt="Logo 1" className="w-32 h-20 object-contain mx-6" />
            <img src={logo2} alt="Logo 2" className="w-32 h-20 object-contain mx-6" />
            <img src={logo3} alt="Logo 3" className="w-32 h-20 object-contain mx-6" />
            <img src={logo4} alt="Logo 4" className="w-32 h-20 object-contain mx-6" />
            <img src={logo5} alt="Logo 5" className="w-32 h-20 object-contain mx-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TechChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/6 border border-white/10 shadow-sm text-xs font-medium text-gray-200 hover:border-brand-300 hover:shadow-md transition">
      <span className="text-brand-300">{icon}</span>
      {label}
    </div>
  )
}

function SidebarSection({ title, children }) {
  return (
    <div className="mb-4">
      <div className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-1.5 px-1">{title}</div>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

function SidebarItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] cursor-pointer ${active ? 'bg-brand-600 text-white font-semibold' : 'text-gray-600 hover:bg-white'}`}>
      <span className="text-[11px]">{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  )
}

function KpiCard({ label, value, delta, positive, negative }) {
  return (
    <div className="border border-gray-200 rounded-xl p-3 bg-white">
      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">{label}</div>
      <div className="font-display font-bold text-lg md:text-xl text-ink-900">{value}</div>
      <div className={`flex items-center gap-1 text-[10px] font-semibold mt-1 ${positive ? 'text-green-600' : 'text-blue-600'}`}>
        {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {delta}
      </div>
    </div>
  )
}

function MiniChart() {
  const bars = [40, 55, 48, 62, 58, 70, 65, 78, 72, 85, 82, 95]
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t bg-gradient-to-t from-brand-600 to-brand-400 hover:from-brand-700 hover:to-brand-500 transition-all"
            style={{ height: `${h}%` }}
          />
          <span className="text-[9px] text-gray-400">s{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

function UseBar({ label, pct, color }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-medium text-gray-700 mb-0.5">
        <span>{label}</span>
        <span className="text-gray-500">{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function CallRow({ agent, name, client, caller, dur, outcome, status }) {
  const statusColor = {
    Activo: 'bg-green-100 text-green-700',
    Completado: 'bg-gray-100 text-gray-700',
    Perdido: 'bg-red-100 text-red-700',
  }[status]

  return (
    <div className="grid grid-cols-12 gap-2 px-4 py-2.5 hover:bg-gray-50">
      <div className="col-span-3 flex items-center gap-2 min-w-0">
        <div className="w-6 h-6 rounded-md bg-brand-100 text-brand-700 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
          {agent}
        </div>
        <span className="truncate text-gray-900 font-medium">{name}</span>
      </div>
      <div className="col-span-3 text-gray-600 truncate hidden md:block">{client}</div>
      <div className="col-span-2 text-gray-500 font-mono text-[10px] hidden md:block">{caller}</div>
      <div className="col-span-1 text-gray-600 font-mono text-[10px] hidden md:block">{dur}</div>
      <div className="col-span-2 text-gray-600 truncate hidden md:block">{outcome}</div>
      <div className="col-span-9 md:col-span-1 flex justify-end">
        <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${statusColor}`}>{status}</span>
      </div>
    </div>
  )
}
