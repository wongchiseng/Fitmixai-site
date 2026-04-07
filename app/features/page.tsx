import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Features - Fitmixai',
  description: 'Explore the powerful features of Fitmixai. AI outfit generation, virtual try-on, and endless fashion styles.',
};

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

export default function Features() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center overflow-hidden bg-surface-container-low">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary-container rounded-full opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary-container rounded-full opacity-10 blur-[80px] pointer-events-none" />

        {/* Phone mockups */}
        <div className="w-full md:w-1/2 flex justify-center items-end gap-5 pt-16 pb-0 md:pt-20 md:pb-0 px-8 relative z-10">
          <div className="relative h-[480px] w-[220px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-outline-variant/40 bg-surface-container self-end">
            <Image src="/13.webp" alt="Fitmixai app wardrobe screen" fill sizes="220px" className="object-cover object-top" priority />
          </div>
          <div className="relative h-[420px] w-[195px] rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-outline-variant/30 bg-surface-container mb-8 opacity-90">
            <Image src="/9.webp" alt="Fitmixai app outfit screen" fill sizes="195px" className="object-cover object-top" priority />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 p-8 md:p-20 lg:p-28 flex flex-col items-start relative z-10">
          <span className="eyebrow mb-6">Product Tour</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-editorial-spacing mb-8 leading-tight text-on-background">
            Features<br /><span className="italic">built</span> for style.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md leading-relaxed">
            Outfit generation, style discovery, and polished rendering — brought together into one calm, intentional flow.
          </p>
        </div>
      </section>

      {/* Feature Sections - Alternating */}
      {features.map((feature, i) => (
        <section key={feature.number} className={`py-32 ${i % 2 === 0 ? 'bg-background' : 'bg-surface-container-low'}`}>
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

      {/* CTA */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-screen-xl mx-auto bg-primary text-on-primary rounded-3xl p-16 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-editorial-spacing leading-tight">
                Ready to see yourself<br /><span className="italic">differently?</span>
              </h2>
              <p className="text-on-primary/80 text-lg leading-relaxed max-w-2xl">
                For product questions, partnerships, or an early look at what we&apos;re building — reach out.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-start lg:items-end shrink-0">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap"
              >
                Get in Touch
              </Link>
              <Link
                href="/styles"
                className="border border-white/30 text-on-primary px-10 py-5 rounded-full font-semibold hover:scale-105 transition-transform whitespace-nowrap text-center"
              >
                Browse Styles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

