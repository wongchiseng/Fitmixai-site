import Link from 'next/link';
import { notFound } from 'next/navigation';

const styleData: Record<string, { headline: string; intro: string; whatIs: string; whyAI: string }> = {
  casual: {
    headline: 'Casual',
    intro: 'Relaxed, everyday wear that puts comfort and personal expression first.',
    whatIs: 'Casual style is built around relaxed silhouettes, soft fabrics, and a wardrobe that works from coffee runs to weekend hangs. Think denim, plain tees, chinos, and easy layers.',
    whyAI: 'Casual dressing has infinite micro-variations. With Fitmixai, you can test colour palette shifts, proportion play, and accessory pairings without touching your actual wardrobe.',
  },
  streetwear: {
    headline: 'Streetwear',
    intro: 'Urban energy through oversized fits, graphics, and culture-led pieces.',
    whatIs: 'Streetwear fuses skateboarding, hip-hop, and sportswear into a bold visual language. Hoodies, cargo pants, chunky sneakers, and statement logos are its building blocks.',
    whyAI: 'Streetwear thrives on limited drops and rare combinations. The Fitmixai AI Generator lets you test bold looks before you invest in hard-to-find pieces.',
  },
  formal: {
    headline: 'Formal',
    intro: 'Sharp tailoring and refined details that command every room.',
    whatIs: 'Formal style lives in suits, blazers, dress shirts, and structured silhouettes. Getting the fit right here matters more than any other category.',
    whyAI: 'Suiting is expensive and unforgiving. See how different cuts and colours drape on your proportions before committing to a purchase.',
  },
  sport: {
    headline: 'Sport',
    intro: 'Athleisure and performance gear that moves as fast as you do.',
    whatIs: 'Sport style blends function with aesthetics — compression pieces, lightweight shells, and co-ordinated sets designed for both the gym and the street.',
    whyAI: 'Performance wear depends heavily on fit and colour blocking. Preview combinations on your actual body type before ordering.',
  },
  korean: {
    headline: 'Korean',
    intro: 'Oversized comfort, pastel palettes, and carefully curated minimalism.',
    whatIs: 'Korean fashion is defined by thoughtful layering, clean lines, and a soft colour language. Wide-leg trousers, longline coats, and tonal dressing are its signatures.',
    whyAI: 'The devil is in the proportions. Fitmixai makes it easy to see exactly how a Korean-inspired overlap of pieces lands on your silhouette.',
  },
  minimalist: {
    headline: 'Minimalist',
    intro: 'Fewer pieces, sharper decisions, more intention behind every garment.',
    whatIs: 'Minimalist style is the art of restraint — neutral palettes, clean cuts, and capsule collections where each item earns its place.',
    whyAI: 'When you own fewer pieces, every new addition is a big decision. Visualise how a new piece integrates with your existing wardrobe before buying.',
  },
};

export async function generateMetadata({ params }: { params: { style: string } }) {
  const data = styleData[params.style];
  if (!data) return {};
  return {
    title: `${data.headline} AI Outfit Generator - Fitmixai`,
    description: `Generate realistic ${data.headline} outfits using AI. Discover ${data.headline} fashion inspiration and virtually try on clothes.`,
  };
}

export default function StylePage({ params }: { params: { style: string } }) {
  const validStyles = ['casual', 'streetwear', 'formal', 'sport', 'korean', 'minimalist'];

  if (!validStyles.includes(params.style)) {
    notFound();
  }

  const data = styleData[params.style];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,253,250,0.95)_0%,rgba(244,235,220,0.88)_45%,rgba(255,255,255,0.86)_100%)] px-6 py-14 dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(34,30,27,0.95)_0%,rgba(25,21,19,0.95)_48%,rgba(15,15,15,0.98)_100%)] md:px-12 md:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(212,162,90,0.18),transparent_60%)]" />
        <div className="relative z-10">
          <Link
            href="/styles"
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300"
          >
            ← All Styles
          </Link>
          <span className="eyebrow block">{data.headline} Style</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {data.headline} Fashion AI Generator
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
            {data.intro}
          </p>
        </div>
      </section>

      {/* Content cards */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="editorial-card rounded-[2rem] p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
            What Is {data.headline} Style?
          </span>
          <p className="mt-5 leading-8 text-stone-600 dark:text-stone-400">{data.whatIs}</p>
        </div>
        <div className="editorial-card rounded-[2rem] p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
            Why Use AI for {data.headline}?
          </span>
          <p className="mt-5 leading-8 text-stone-600 dark:text-stone-400">{data.whyAI}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(28,24,21,0.96)_0%,rgba(60,44,24,0.96)_100%)] px-8 py-12 text-stone-50 dark:border-white/8 md:px-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="eyebrow border-white/14 bg-white/8 text-amber-200">Try It Now</span>
            <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              See yourself in {data.headline} style with one upload.
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-stone-50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 hover:bg-amber-100"
          >
            Get Early Access
          </Link>
        </div>
      </section>
    </div>
  );
}
