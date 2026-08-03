import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/content';
import { Reveal } from './Reveal';

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-400">
            O que fazemos
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Nossos <span className="text-gradient-blue">serviços</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Soluções completas em climatização, energia e automação para
            residências, empresas e condomínios.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 shadow-card transition-colors hover:border-neon-500/40"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/40 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950/70 backdrop-blur-md border border-neon-500/30 shadow-glow-sm">
                      <Icon className="h-5 w-5 text-neon-400" />
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {s.description}
                    </p>
                    <a
                      href="#contato"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-400 group-hover:gap-2.5 transition-all"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-neon-500/[0.06] to-transparent" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
