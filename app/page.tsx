'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';

/* ── Apple-style easing ── */
const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ── Data ── */
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

/* ── Feature section with parallax ── */
function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  // Parallax: image moves up slightly slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      className={`py-32 overflow-hidden border-0 ${isEven ? 'bg-surface-container-low' : 'bg-background'}`}
    >
      {/* Thin top divider line that reveals on scroll */}
      <motion.div
        className="h-px bg-outline-variant/40 mx-16 mb-32 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease }}
      />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
        <div className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? 'md:[&>*:first-child]:order-2' : ''}`}>

          {/* ── Phone mockups with parallax ── */}
          <motion.div
            className="relative flex gap-5 justify-center items-start py-4 border-0"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: isEven ? -70 : 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease }}
          >
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-primary-container rounded-full opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container rounded-full opacity-10 blur-2xl pointer-events-none" />

            {/* Primary phone */}
            <motion.div
              className="relative h-[520px] w-[240px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-outline-variant/40 z-10 bg-surface-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease, delay: 0.1 }}
            >
              <Image src={feature.images[0]} alt={feature.title} fill sizes="240px" className="object-cover object-top" />
            </motion.div>

            {/* Secondary phone, offset + delayed */}
            <motion.div
              className="relative h-[460px] w-[215px] mt-14 rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-outline-variant/40 z-10 bg-surface-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease, delay: 0.22 }}
            >
              <Image src={feature.images[1]} alt={feature.title} fill sizes="215px" className="object-cover object-top" />
            </motion.div>
          </motion.div>

          {/* ── Staggered text block ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="eyebrow">
              {feature.number} {feature.eyebrow}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mt-6 mb-8 text-editorial-spacing">
              {feature.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-on-surface-variant text-lg leading-relaxed mb-8">
              {feature.desc}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-4">
              {feature.bullets.map((bullet, j) => (
                <motion.li key={bullet} variants={fadeUp} className="flex items-center gap-4 text-on-surface">
                  <span className="material-symbols-outlined text-primary icon-filled">
                    {feature.icons[j]}
                  </span>
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

/* ── Main page ── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  // Hero parallax transforms
  const heroImageScale = useTransform(heroScroll, [0, 1], [1, 1.1]);
  const heroImageY    = useTransform(heroScroll, [0, 1], ['0%', '18%']);
  const heroTextY     = useTransform(heroScroll, [0, 1], ['0%', '28%']);
  const heroOpacity   = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ═══ 1. Hero ═══ */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex flex-col md:flex-row overflow-hidden border-0 bg-background"
      >
        {/* Left: parallax image — container keeps fixed 50% width, only inner content scales */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative shrink-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroImageScale, y: heroImageY }}
          >
            <Image
              src="/replicate-prediction-a6hbvmnrt9rn80cxd38b2z0n34.webp"
              alt="Fitmixai AI fashion editorial"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              quality={95}
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10 pointer-events-none" />
        </div>

        {/* Right: staggered text entrance + scroll fade */}
        <motion.div
          className="w-full md:w-1/2 flex items-center px-8 py-16 md:px-16 lg:px-24 xl:px-32"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="eyebrow mb-8">
              The Future of Dressing
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-7xl lg:text-8xl font-serif text-editorial-spacing mb-8 leading-[1.05] text-on-background"
            >
              Redefine<br /><span className="italic">Your</span> Style
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-on-surface-variant max-w-md mb-12 leading-relaxed">
              A curated digital experience that bridges the gap between your physical wardrobe and AI-powered intelligence. Scan, style, and{' '}
              <span className="text-primary">fit</span> from anywhere.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
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
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={fadeIn}
              className="mt-20 hidden md:flex items-center gap-3 text-on-surface-variant/50"
            >
              <motion.div
                className="w-px h-12 bg-outline-variant/60 origin-top"
                animate={{ scaleY: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══ 2. Feature sections ═══ */}
      {features.map((feature, i) => (
        <FeatureSection key={feature.number} feature={feature} index={i} />
      ))}

      {/* ═══ 3. Style Directory ═══ */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8">

          {/* Header */}
          <motion.div
            className="mb-14 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.span variants={fadeIn} className="eyebrow">Style Index</motion.span>
            <motion.h2 variants={fadeUp} className="mt-7 text-5xl font-semibold tracking-[-0.04em] md:text-6xl text-on-background">
              The Style Directory
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-8 text-on-surface-variant md:text-lg">
              Six curated aesthetic directions. Pick one and let AI generate your look — from casual everyday to sharp formal and everything between.
            </motion.p>
          </motion.div>

          {/* Staggered cards */}
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {stylesList.map((s) => (
              <motion.div key={s.slug} variants={fadeUp}>
                <Link href={`/styles/${s.slug}`} className="group block">
                  <div className="editorial-card flex h-full min-h-[200px] flex-col justify-end rounded-[2rem] px-6 py-8 transition-transform duration-300 hover:-translate-y-2 md:min-h-[240px] md:px-7 md:py-9">
                    <div className="mb-6 h-px bg-outline-variant/30" />
                    <span className="text-xs font-semibold uppercase tracking-[0.26em] text-on-surface-variant">Style</span>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:text-primary md:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-on-surface-variant">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
          >
            <Link
              href="/styles"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-outline-variant/50 text-sm font-semibold text-on-surface-variant hover:bg-primary hover:text-on-primary hover:border-primary transition-all"
            >
              View All Styles →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. Final CTA ═══ */}
      <section className="py-32 px-8 bg-background overflow-hidden">
        <motion.div
          className="max-w-screen-xl mx-auto bg-primary text-on-primary rounded-3xl p-16 md:p-32 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.94, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease }}
        >
          {/* Background glow orbs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <motion.div
              className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <motion.h2
            className="text-5xl md:text-7xl font-serif mb-8 relative z-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
          >
            Start Creating<br />Today
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-on-primary/80 mb-16 relative z-10 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
          >
            Upload one photo. Discover six style directions. Let the AI generate your perfect outfit preview.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
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
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

