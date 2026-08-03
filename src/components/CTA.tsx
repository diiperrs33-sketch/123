import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Snowflake } from 'lucide-react';
import { Reveal } from './Reveal';

export default function CTA() {
  return (
    <section id="contato" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            {/* Background image */}
            <img
              src="https://images.pexels.com/photos/6961112/pexels-photo-6961112.jpeg?auto=compress&cs=tinysrgb&h=700&w=1600"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-ink-950/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
            <div className="pointer-events-none absolute -top-20 -right-10 h-72 w-72 rounded-full bg-neon-500/15 blur-3xl" />

            <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-400">
                  Vamos começar
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Pronto para transformar
                  <br />
                  o seu <span className="text-gradient-blue">ambiente</span>?
                </h2>
                <p className="mt-5 text-gray-300 max-w-lg leading-relaxed">
                  Solicite um orçamento gratuito e sem compromisso. Nossa equipe
                  responde em até 24 horas com a melhor solução para você.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://wa.me/5500000000000"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink-950 shadow-glow transition-all hover:bg-gray-100"
                  >
                    Solicitar orçamento
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                  >
                    Ver serviços
                  </a>
                </div>

                {/* Contact info */}
                <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-xl">
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <Phone className="h-4 w-4 text-neon-400" />
                    (00) 0000-0000
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <Mail className="h-4 w-4 text-neon-400" />
                    contato@nexus.com
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-300">
                    <MapPin className="h-4 w-4 text-neon-400" />
                    Sua cidade, Brasil
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/20 to-neon-700/10 border border-neon-500/30">
                <Snowflake className="h-5 w-5 text-neon-400" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                NEXUS<span className="text-neon-400">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Soluções inteligentes em climatização, energia solar e automação
              para residências e empresas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-neon-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-neon-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-neon-400 transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-neon-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Serviços</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>Climatização</li>
              <li>Energia solar</li>
              <li>Manutenção elétrica</li>
              <li>Automação inteligente</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-neon-400" /> (00) 0000-0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-neon-400" /> contato@nexus.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-neon-400" /> Sua cidade, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Nexus. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Desenvolvido com tecnologia de ponta.
          </p>
        </div>
      </div>
    </footer>
  );
}
