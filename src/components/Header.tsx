import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Snowflake, ArrowRight } from 'lucide-react';
import { useScrolled } from './Reveal';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(30);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-500/20 to-neon-700/10 border border-neon-500/30 shadow-glow-sm">
              <Snowflake className="h-5 w-5 text-neon-400" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              NEXUS<span className="text-neon-400">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-neon-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neon-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-neon-400 hover:shadow-glow active:scale-95"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg glass text-white"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-neon-500 px-5 py-3 text-sm font-semibold text-white"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
