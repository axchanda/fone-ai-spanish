import { Star } from 'lucide-react'

const STORIES = [
  {
    body: 'We were losing deals to competitors who could answer the AI question. With Fone AI, we launched AI receptionist services for 4 of our PBX clients in the first month. Revenue went up 28% with no new infrastructure investment or dev resources.',
    initials: 'CM',
    name: 'Carlos Mendoza',
    role: 'CEO, TeleSoluciones SA — Miami, FL',
    tag: 'UCaaS Reseller',
  },
  {
    body: 'I tried building AI telephony with VAPI and OpenAI. It was too expensive and couldn\'t be charged to my clients. Fone AI was live in two days, 2x cheaper, and my clients have not experienced a single outage. Fone AI is a no-brainer when it comes to AI agents.',
    initials: 'RL',
    name: 'Rafael Lopez',
    role: 'Founder, ComunicaNet — Barcelona, ES',
    tag: 'VoIP Provider',
  },
  {
    body: 'My clients manage their own AI agents now. Support tickets dropped 60%. The client portal works beautifully under our brand, and our clients think we built it. That is exactly what I needed to compete.',
    initials: 'AS',
    name: 'Ana Suarez',
    role: 'Director, HostedPBX Plus — Bogotá, CO',
    tag: 'PBX Operator',
  },
]

export default function ProviderStories() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="eyebrow mb-4">PBX Providers Who Transitioned</div>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            PBX Providers Who<br />
            <span className="gradient-text italic">Made The AI Transition.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {STORIES.map((s) => (
            <article key={s.name} className="card-base card-hover flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-5">"{s.body}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xs">
                  {s.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-sm text-ink-900 truncate">{s.name}</div>
                  <div className="text-[11px] text-gray-500 truncate">{s.role}</div>
                </div>
                <span className="text-[9px] font-bold tracking-wider uppercase text-brand-700 bg-brand-50 px-2 py-1 rounded-full whitespace-nowrap">
                  {s.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
