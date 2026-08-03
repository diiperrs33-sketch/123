import { brands } from '@/content';

export default function Brands() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Trabalhamos com as melhores marcas
        </p>

        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-600 hover:text-gray-300 transition-colors"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
