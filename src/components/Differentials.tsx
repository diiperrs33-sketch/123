import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { differentials, stats } from '@/content';
import { Reveal } from './Reveal';

export default function Differentials() {
  return (
    <section id="sobre" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-neon-700/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-400">
                Diferenciais
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Qualidade que faz
                <br />
                a <span className="text-gradient-blue">diferença</span>.
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                Combinamos tecnologia, experiência e atendimento próximo para
                entregar resultados que superam expectativas. Cada projeto é
                tratado com dedicação exclusiva.
              </p>

              <ul className="mt-7 space-y-3.5">
                {differentials.map((d, i) => (
                  <Reveal key={d.text} delay={i * 0.08}>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neon-400" />
                      <span className="text-gray-200">{d.text}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-neon-400 hover:scale-[1.02] active:scale-95"
              >
                Fale com um especialista
              </a>
            </Reveal>
          </div>

          {/* Center image */}
          <div className="lg:col-span-4">
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-white/5" />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-card">
                  <img
                    src="https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                    alt="Equipe de técnicos em serviço"
                    className="h-[420px] lg:h-[520px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

                  <div className="absolute left-4 bottom-4 glass-strong rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-neon-400" />
                      <p className="text-sm font-semibold text-white">
                        Equipe certificada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right stats */}
          <div className="lg:col-span-4 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={0.2 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 text-center lg:text-left transition-colors hover:border-neon-500/40"
                  >
                    <div className="flex items-center gap-3 lg:gap-4 flex-col lg:flex-row">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon-500/15 border border-neon-500/30">
                        <Icon className="h-6 w-6 text-neon-400" />
                      </span>
                      <div>
                        <p className="text-3xl font-extrabold text-white">
                          {s.value}
                        </p>
                        <p className="text-sm text-gray-400">{s.label}</p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
