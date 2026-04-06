import Link from 'next/link';

export const metadata = {
  title: 'Fashion Styles & AI Outfit Inspiration - Fitmixai',
  description: 'Explore various fashion styles like Streetwear, Casual, Formal, and Korean. Generate outfits for any aesthetic with AI.',
};

const stylesList = [
  { name: 'Casual', slug: 'casual', desc: 'Relaxed, everyday wear prioritising comfort and personal expression.' },
  { name: 'Streetwear', slug: 'streetwear', desc: 'Urban, casual clothing — hoodies, sneakers, and graphic statements.' },
  { name: 'Formal', slug: 'formal', desc: 'Suits, evening gowns, and sharp professional business attire.' },
  { name: 'Sport', slug: 'sport', desc: 'Athleisure, workout gear, and sporty comfortable fits.' },
  { name: 'Korean', slug: 'korean', desc: 'Trendy, oversized fits, pastels, and minimalist chic aesthetics.' },
  { name: 'Minimalist', slug: 'minimalist', desc: 'Simple lines, neutral colours, and capsule wardrobe essentials.' },
];

export default function Styles() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <section className="mb-14 text-center">
        <span className="eyebrow">Style Index</span>
        <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Explore every aesthetic.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
          Choose a direction, let the AI do the rest. Six carefully curated style families live inside one unified visual system.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {stylesList.map((s) => (
          <Link key={s.slug} href={`/styles/${s.slug}`} className="group">
            <div className="editorial-card flex h-full min-h-[200px] flex-col justify-end rounded-[2rem] px-6 py-8 transition-transform duration-200 hover:-translate-y-1 md:min-h-[240px] md:px-7 md:py-9">
              <div className="mb-6 h-px bg-black/8 dark:bg-white/8" />
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400 dark:text-stone-500">
                Style
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:text-amber-700 dark:group-hover:text-amber-300 md:text-3xl">
                {s.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
