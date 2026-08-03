import { motion } from 'framer-motion';
import {
  ArrowRight,
  Snowflake,
  Thermometer,
  Wind,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Reveal } from './Reveal';

const avatars = [
  'https://images.pexels.com/photos/8837170/pexels-photo-8837170.jpeg?auto=compress&cs=tinysrgb&h=120&w=120&fit=crop',
  'https://images.pexels.com/photos/30386568/pexels-photo-30386568.jpeg?auto=compress&cs=tinysrgb&h=120&w=120&fit=crop',
  'https://images.pexels.com/photos/9951800/pexels-photo-9951800.jpeg?auto=compress&cs=tinysrgb&h=120&w=120&fit=crop',
  'https://images.pexels.com/photos/6196685/pexels-photo-6196685.jpeg?auto=compress&cs=tinysrgb&h=120&w=120&fit=crop',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-neon" />
      <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-neon-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-neon-700/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-neon-200">
                <Snowflake className="h-3.5 w-3.5 text-neon-400" />
                Soluções inteligentes em climatização e energia
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
                Conforto e eficiência
                <br />
                para o seu
                <br />
                <span className="text-gradient-blue">ambiente perfeito</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base sm:text-lg text-gray-400 leading-relaxed">
                Projetamos, instalamos e mantemos sistemas de climatização e
                energia solar com tecnologia de ponta. Qualidade comprovada por
                mais de 250 clientes satisfeitos.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-neon-400 hover:scale-[1.02] active:scale-95"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Conhecer serviços
                </a>
              </div>
            </Reveal>

            {/* Social proof */}
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {avatars.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-ink-950"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-white">
                      +250 clientes satisfeitos
                    </p>
                    <p className="text-xs text-gray-400">atendidos com excelência</p>
                  </div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/10" />
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-neon-400 text-neon-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-white">
                    5.0 <span className="text-gray-400 font-normal">avaliação</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <Reveal delay={0.2} className="relative">
            <div className="relative">
              {/* Decorative ring */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-white/5" />
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] border border-white/[0.03]" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-card">
                <img
                  src="https://images.pexels.com/photos/32737485/pexels-photo-32737485.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200"
                  alt="Sistema de climatização inteligente"
                  className="h-[340px] sm:h-[420px] lg:h-[500px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -left-3 sm:-left-6 top-10 sm:top-14 glass-strong rounded-2xl p-3.5 shadow-card animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-500/15 border border-neon-500/30">
                    <Thermometer className="h-5 w-5 text-neon-400" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">Temperatura</p>
                    <p className="text-sm font-bold text-white">22°C ideal</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="absolute -right-3 sm:-right-6 top-24 sm:top-32 glass-strong rounded-2xl p-3.5 shadow-card animate-float-slower"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-500/15 border border-neon-500/30">
                    <Wind className="h-5 w-5 text-neon-400" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">Eficiência</p>
                    <p className="text-sm font-bold text-white">A+ energia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute left-6 sm:left-10 -bottom-5 glass-strong rounded-2xl p-3.5 shadow-card animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-500/15 border border-neon-500/30">
                    <ShieldCheck className="h-5 w-5 text-neon-400" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-400">Garantia</p>
                    <p className="text-sm font-bold text-white">24 meses</p>
                  </div>
                </div>
              </motion.div>

              {/* Connecting lines */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full hidden sm:block"
                style={{ overflow: 'visible' }}
              >
                <line
                  x1="20%"
                  y1="20%"
                  x2="35%"
                  y2="35%"
                  stroke="rgba(43,120,245,0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <line
                  x1="80%"
                  y1="30%"
                  x2="65%"
                  y2="45%"
                  stroke="rgba(43,120,245,0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
