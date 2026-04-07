import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    number: '01',
    eyebrow: 'Fit Preview',
    title: 'AI Virtual Try-On',
    desc: 'Upload a simple forward-facing photo of yourself, and our AI will seamlessly wrap different garments onto your body. It respects your unique shape, pose, and lighting to give you a realistic preview.',
    images: ['/5.webp', '/6.webp'],
    bullets: ['True-to-body garment placement', 'Natural draping and proportion'],
    icons: ['checkroom', 'high_quality'],
  },
  {
    number: '02',
    eyebrow: 'Taste Mapping',
    title: 'Endless Style Discovery',
    desc: 'Not sure what your aesthetic is? Swipe through endless style feeds ranging from Streetwear and Minimalist to Korean and Formal. Mark your favorites to let our AI learn your taste.',
    images: ['/7.webp', '/8.webp'],
    bullets: ['Six curated aesthetic directions', 'AI learns your preferences over time'],
    icons: ['style', 'trending_up'],
  },
  {
    number: '03',
    eyebrow: 'Look Building',
    title: 'Outfit Combinations Maker',
    desc: 'Have a jacket you love but do not know what pants match it? Fitmixai generates entire coordinated outfits so you do not have to stress over styling combinations.',
    images: ['/9.webp', '/10.webp'],
    bullets: ['Full head-to-toe combinations', 'Cohesive, styled — not random'],
    icons: ['dashboard_customize', 'auto_awesome'],
  },
  {
    number: '04',
    eyebrow: 'Render Quality',
    title: 'High-Quality Renderings',
    desc: 'Say goodbye to floating heads and awkward 2D cutouts. Our advanced diffusion models generate high-fidelity realism so the clothes naturally drape and fold as they would in real life.',
    images: ['/11.webp', '/12.webp'],
    bullets: ['Diffusion model rendering engine', 'Realistic fabric physics'],
    icons: ['hd', 'texture'],
  },
];

const stylesList = [
  { name: 'Casual', slug: 'casual', desc: 'Relaxed, everyday wear prioritising comfort and personal expression.' },
  { name: 'Streetwear', slug: 'streetwear', desc: 'Urban, casual clothing — hoodies, sneakers, and graphic statements.' },
  { name: 'Formal', slug: 'formal', desc: 'Suits, evening gowns, and sharp professional business attire.' },
  { name: 'Sport', slug: 'sport', desc: 'Athleisure, workout gear, and sporty comfortable fits.' },
  { name: 'Korean', slug: 'korean', desc: 'Trendy, oversized fits, pastels, and minimalist chic aesthetics.' },
  { name: 'Minimalist', slug: 'minimalist', desc: 'Simple lines, neutral colours, and capsule wardrobe essentials.' },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-background">
        {/* Left: Editorial fashion photo */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative shrink-0">
          <Image
            src="/replicate-prediction-a6hbvmnrt9rn80cxd38b2z0n34.webp"
            alt="Fitmixai AI fashion editorial"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            quality={95}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 flex items-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-xl">
            <span className="eyebrow mb-8">The Future of Dressing</span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-editorial-spacing mb-8 leading-[1.05] text-on-background">
              Redefine<br /><span className="italic">Your</span> Style
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md mb-12 leading-relaxed">
              A curated digital experience that bridges the gap between your physical wardrobe and AI-powered intelligence. Scan, style, and <span className="text-primary">fit</span> from anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/features"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg active:scale-95"
              >
                Get Started
              </Link>
              <Link
                href="/styles"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-on-surface-variant hover:text-primary hover:bg-primary-container transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
                </svg>
                Watch Film
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Sections */}
      {features.map((feature, i) => (
        <section key={feature.number} className={`py-32 ${i % 2 === 0 ? 'bg-surface-container-low' : 'bg-background'}`}>
          <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
            <div className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Images */}
              <div className="relative flex gap-5 justify-center items-start py-4">
                <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary-container rounded-full opacity-20 blur-3xl" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container rounded-full opacity-10 blur-2xl" />
                <div className="relative h-[520px] w-[240px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-outline-variant/40 z-10 bg-surface-container">
                  <Image src={feature.images[0]} alt={feature.title} fill sizes="240px" className="object-cover object-top" />
                </div>
                <div className="relative h-[460px] w-[215px] mt-14 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-outline-variant/40 z-10 bg-surface-container">
                  <Image src={feature.images[1]} alt={feature.title} fill sizes="215px" className="object-cover object-top" />
                </div>
              </div>
              {/* Text */}
              <div>
                <span className="eyebrow">{feature.number} {feature.eyebrow}</span>
                <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-8 text-editorial-spacing">{feature.title}</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">{feature.desc}</p>
                <ul className="space-y-4">
                  {feature.bullets.map((bullet, j) => (
                    <li key={bullet} className="flex items-center gap-4 text-on-surface">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{feature.icons[j]}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. Style Directory */}
      <section className="py-24 bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <span className="eyebrow">Style Index</span>
            <h2 className="mt-7 text-5xl font-semibold tracking-[-0.04em] md:text-6xl text-on-background">The Style Directory</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-on-surface-variant md:text-lg">
              Six curated aesthetic directions. Pick one and let AI generate your look — from casual everyday to sharp formal and everything between.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {stylesList.map((s) => (
              <Link key={s.slug} href={`/styles/${s.slug}`} className="group">
                <div className="editorial-card flex h-full min-h-[200px] flex-col justify-end rounded-[2rem] px-6 py-8 transition-transform duration-200 hover:-translate-y-1 md:min-h-[240px] md:px-7 md:py-9">
                  <div className="mb-6 h-px bg-outline-variant/30" />
                  <span className="text-xs font-semibold uppercase tracking-[0.26em] text-on-surface-variant">
                    Style
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:text-primary md:text-3xl">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/styles"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-outline-variant/50 text-sm font-semibold text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
            >
              View All Styles →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-screen-xl mx-auto bg-primary text-on-primary rounded-3xl p-16 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 relative z-10 leading-tight">
            Start Creating<br />Today
          </h2>
          <p className="text-xl md:text-2xl text-on-primary/80 mb-16 relative z-10 max-w-2xl mx-auto font-light">
            Upload one photo. Discover six style directions. Let the AI generate your perfect outfit preview.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <Link
              href="/features"
              className="bg-white text-primary px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">auto_awesome</span> See Features
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

