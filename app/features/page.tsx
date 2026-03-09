import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Features - Fitmixai',
  description: 'Explore the powerful features of Fitmixai. AI outfit generation, virtual try-on, and endless fashion styles.',
};

export default function Features() {
  const features = [
    {
      title: 'AI Virtual Try-On',
      desc: 'Upload a simple forward-facing photo of yourself, and our AI will seamlessly wrap different garments onto your body. It respects your unique shape, pose, and lighting to give you a realistic preview.',
      eyebrow: 'Fit Preview',
      images: ['/5.webp', '/6.webp'],
    },
    {
      title: 'Endless Style Discovery',
      desc: 'Not sure what your aesthetic is? Swipe through endless style feeds ranging from Streetwear and Minimalist to Korean and Formal. Mark your favorites to let our AI learn your taste.',
      eyebrow: 'Taste Mapping',
      images: ['/7.webp', '/8.webp'],
    },
    {
      title: 'Outfit Combinations Maker',
      desc: 'Have a jacket you love but do not know what pants match it? Fitmixai generates entire coordinated outfits so you do not have to stress over styling combinations.',
      eyebrow: 'Look Building',
      images: ['/9.webp', '/10.webp'],
    },
    {
      title: 'High-Quality Renderings',
      desc: 'Say goodbye to floating heads and awkward 2D cutouts. Our advanced diffusion models generate high-fidelity realism so the clothes naturally drape and fold as they would in real life.',
      eyebrow: 'Render Quality',
      images: ['/11.webp', '/12.webp'],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(145deg,rgba(255,255,255,0.92)_0%,rgba(242,233,219,0.86)_45%,rgba(255,251,245,0.9)_100%)] px-6 py-12 dark:border-white/8 dark:bg-[linear-gradient(145deg,rgba(32,28,25,0.96)_0%,rgba(23,20,18,0.96)_50%,rgba(15,15,15,1)_100%)] md:px-10 md:py-16">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(212,162,90,0.16),transparent_62%)]" />
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative z-10">
            <span className="eyebrow">Product Tour</span>
            <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Features presented as a system, not a list of widgets.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400 md:text-xl">
              Fitmixai brings outfit generation, style discovery, and polished rendering into one calmer flow. The page now reads like a product narrative instead of stitched screenshots.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[0.78fr_1fr] md:grid-rows-[1fr_1fr]">
            <article className="editorial-card grain rounded-[2rem] p-3 md:row-span-2">
              <div className="image-stage h-[440px] md:h-full">
                <Image src="/13.webp" alt="Fitmixai generated result" fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
              </div>
            </article>
            <article className="editorial-card grain rounded-[2rem] p-3">
              <div className="image-stage h-[210px]">
                <Image src="/5.webp" alt="Fitmixai wardrobe screen" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
              </div>
            </article>
            <article className="editorial-card grain rounded-[2rem] p-3 md:translate-x-8">
              <div className="image-stage h-[210px]">
                <Image src="/9.webp" alt="Fitmixai outfit browsing screen" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-2 lg:gap-10">
        {features.map((feature) => (
          <article key={feature.title} className="editorial-card rounded-[2rem] p-5 md:p-6">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div className="max-w-[52%]">
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
                  {feature.eyebrow}
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">{feature.title}</h2>
              </div>
              <div className="grid shrink-0 grid-cols-2 gap-3">
                {feature.images.map((image, index) => (
                  <div
                    key={image}
                    className={`image-stage grain h-[150px] w-[108px] overflow-hidden rounded-[1.5rem] md:h-[180px] md:w-[132px] ${index === 1 ? 'translate-y-5' : ''}`}
                  >
                    <Image
                      src={image}
                      alt={`${feature.title} preview ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 108px, 132px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-8 text-stone-600 dark:text-stone-400">
              {feature.desc}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-24 overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(28,24,21,0.96)_0%,rgba(60,44,24,0.96)_100%)] px-8 py-12 text-stone-50 dark:border-white/8 md:px-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <span className="eyebrow border-white/14 bg-white/8 text-amber-200">Launch Direction</span>
            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Ready to present Fitmixai as a finished product, not just a concept?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              The CTA is now aligned with the rest of the site: warmer, sharper, and more brand-led. No isolated blue block, no off-system interaction style.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/contact"
              className="rounded-full bg-stone-50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 hover:bg-amber-100"
            >
              Get in Touch
            </Link>
            <p className="max-w-sm text-sm leading-7 text-stone-400 lg:text-right">
              For product questions, partnerships, or an early look at development progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
