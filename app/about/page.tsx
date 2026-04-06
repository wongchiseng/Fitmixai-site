import Link from 'next/link';

export const metadata = {
  title: 'About - Fitmixai',
  description: 'Learn more about Fitmixai and our mission to simplify fashion with Artificial Intelligence.',
};

const values = [
  {
    label: 'Save Time',
    desc: 'No more guessing what matches. Automatically generate styled outfits in seconds.',
  },
  {
    label: 'Save Money',
    desc: 'Reduce buying mistakes by visualising the outfit on your body before you commit.',
  },
  {
    label: 'Discover Yourself',
    desc: 'Step outside your comfort zone and try styles you would never pull off a rack alone.',
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,253,250,0.95)_0%,rgba(244,235,220,0.88)_45%,rgba(255,255,255,0.86)_100%)] px-6 py-14 dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(34,30,27,0.95)_0%,rgba(25,21,19,0.95)_48%,rgba(15,15,15,0.98)_100%)] md:px-12 md:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(212,162,90,0.18),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Story</span>
          <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            Making fashion decisions easier for everyone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
            Every morning, millions of people stand in front of a full closet and feel like there&apos;s nothing to wear. Fitmixai was built to solve that — one AI-generated preview at a time.
          </p>
        </div>
      </section>

      {/* Story + Developer */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="editorial-card rounded-[2rem] p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
            The Origin
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Why Fitmixai exists</h2>
          <p className="mt-5 leading-8 text-stone-600 dark:text-stone-400">
            Mixing and matching clothing styles mentally is genuinely hard. Buying new pieces without knowing how they&apos;ll look on your body leads to returns, regret, and wasted money. By pairing advanced generative AI with a clean, deliberate UI, Fitmixai lets anyone test an outfit before ever opening their wallet.
          </p>
          <p className="mt-4 leading-8 text-stone-600 dark:text-stone-400">
            Whether exploring Streetwear, curating a Formal wardrobe, or testing Korean minimalism — every style direction lives inside one calm, premium interface.
          </p>
        </div>

        <div className="editorial-card rounded-[2rem] p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
            The Developer
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Built by Kit</h2>
          <p className="mt-5 leading-8 text-stone-600 dark:text-stone-400">
            Kit graduated from the Department of Engineering Science at National Taiwan University. With a deep passion for bringing cutting-edge technology into everyday life, he combined an engineering background with a love for intuitive design to build an app that actually solves real-world fashion problems.
          </p>
          <p className="mt-4 leading-8 text-stone-600 dark:text-stone-400">
            Fitmixai is a solo product, built with focus and care — no committees, no bloat.
          </p>
        </div>
      </section>

      {/* Why AI */}
      <section className="mt-16 rounded-[2.5rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(241,234,223,0.8)_100%)] p-8 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,24,22,0.9)_0%,rgba(16,16,16,0.96)_100%)] md:p-12">
        <div className="mb-10">
          <span className="eyebrow">Why AI for Fashion</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Three reasons it actually matters.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="rounded-[1.8rem] border border-black/6 bg-white/72 p-7 dark:border-white/8 dark:bg-white/4">
              <h3 className="text-2xl font-semibold">{v.label}</h3>
              <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 flex flex-col items-center gap-5 text-center">
        <p className="text-base text-stone-500 dark:text-stone-400">Want to learn more or get in touch?</p>
        <Link
          href="/contact"
          className="rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
        >
          Contact Kit →
        </Link>
      </section>
    </div>
  );
}
