import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    image: '/1.webp',
    title: 'Upload your photo',
    description: 'Start with a clean portrait. Fitmixai uses it as the base for every outfit preview.',
    number: '01',
  },
  {
    image: '/2.webp',
    title: 'Choose clothing style',
    description: 'Browse styles, select pieces, and shape the aesthetic you want to explore.',
    number: '02',
  },
  {
    image: '/3.webp',
    title: 'AI generates outfit',
    description: 'Receive a polished try-on result that feels closer to a real product preview.',
    number: '03',
  },
];

const stats = [
  { value: '6+', label: 'Style Directions' },
  { value: '10K+', label: 'Outfits Generated' },
  { value: '< 10s', label: 'Generation Time' },
  { value: '100%', label: 'AI Powered' },
];

const faqs = [
  {
    q: 'What is AI virtual try-on?',
    a: 'AI virtual try-on simulates how clothing would look on you based on a photo you upload, giving a more intuitive preview before you commit to a style.',
  },
  {
    q: 'How does the AI outfit generator work?',
    a: 'The generator builds complete outfits around your selected aesthetic so the result feels cohesive instead of assembled manually.',
  },
  {
    q: 'Do I need a professional photo?',
    a: 'No. A clear, forward-facing portrait taken on any modern phone works well. The AI adapts to natural lighting and everyday backgrounds.',
  },
  {
    q: 'Are my photos stored or shared?',
    a: 'Photos are processed temporarily to generate your preview and are not used to train public models or shared with third parties.',
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(255,253,250,0.95)_0%,rgba(244,235,220,0.88)_45%,rgba(255,255,255,0.86)_100%)] px-6 py-14 dark:border-white/8 dark:bg-[linear-gradient(135deg,rgba(34,30,27,0.95)_0%,rgba(25,21,19,0.95)_48%,rgba(15,15,15,0.98)_100%)] md:px-10 md:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(212,162,90,0.18),transparent_60%)]" />
        <div className="grid items-end gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <span className="eyebrow">AI Styling Studio</span>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] md:text-7xl">
              AI Outfit Generator and virtual try-on, designed like a finished product.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400 md:text-xl">
              Fitmixai turns one portrait into a sharper styling workflow: discover looks, test garments, and generate polished outfit previews with a coherent visual system.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/features"
                className="rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
              >
                Explore Features
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-700 transition hover:border-amber-600 hover:text-amber-700 dark:border-white/12 dark:text-stone-200 dark:hover:border-amber-400 dark:hover:text-amber-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          <div className="relative h-[380px] w-full md:h-[500px] mt-10 md:mt-0 flex items-center justify-end lg:-mr-12">
            <div className="relative h-full w-[55%] md:w-[50%] z-10">
              <Image
                src="/13.webp"
                alt="Fitmixai generated fashion preview"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-contain object-right"
                priority
              />
            </div>
            <div className="relative flex flex-col justify-center gap-6 h-full w-[45%] z-0 -translate-x-2 md:-translate-x-4">
              <div className="relative h-[30%] w-full">
                <Image
                  src="/5.webp"
                  alt="Fitmixai wardrobe browsing interface"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-contain object-left-bottom"
                />
              </div>
              <div className="relative h-[45%] w-full">
                <Image
                  src="/9.webp"
                  alt="Fitmixai outfit combination screen"
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-contain object-left-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.6rem] border border-black/6 bg-white/60 px-5 py-6 text-center dark:border-white/8 dark:bg-white/4"
          >
            <p className="font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">{stat.value}</p>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="mt-24 rounded-[2.5rem] px-1">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Three screens, one visual story.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
            Each step has a clear role in the journey — no filler, no fake device frames.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.number} className="editorial-card rounded-[2rem] p-4 md:p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
                  Step {step.number}
                </span>
                <span className="text-sm font-medium text-stone-400 dark:text-stone-500">
                  0{index + 1}
                </span>
              </div>

              <div className="relative h-[360px] w-full md:h-[480px]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400 md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Core Value */}
      <section className="mt-24 rounded-[2.5rem] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(241,234,223,0.8)_100%)] p-8 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(28,24,22,0.9)_0%,rgba(16,16,16,0.96)_100%)] md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Core Value</span>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">One product, one point of view.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
            Fitmixai is not just a generator. It is a cleaner decision-making tool for people trying to see themselves in new styles with more confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI Virtual Try-On',
              desc: 'Try on clothes instantly with sharper proportions, better garment presence, and a more realistic preview of how pieces work together.',
            },
            {
              title: 'Outfit Generator',
              desc: 'Generate combinations that feel styled, not random, so users can move from inspiration to a concrete look faster.',
            },
            {
              title: 'Style Discovery',
              desc: 'Explore casual, streetwear, formal, Korean, and minimalist directions inside one calmer and more premium interface.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.8rem] border border-black/6 bg-white/72 p-6 dark:border-white/8 dark:bg-white/4">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Style Index */}
      <section className="mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Style Index</span>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Explore styles with the same visual language.</h2>
          </div>
          <Link
            href="/styles"
            className="hidden shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700 transition hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-200 md:block"
          >
            View All →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {['Casual', 'Streetwear', 'Formal', 'Sport', 'Korean', 'Minimalist'].map((style) => (
            <Link key={style} href={`/styles/${style.toLowerCase()}`} className="group">
              <div className="editorial-card rounded-[1.8rem] px-5 py-8 transition-transform duration-200 hover:-translate-y-1 md:px-6 md:py-10">
                <div className="mb-10 h-px bg-black/8 dark:bg-white/8" />
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400 dark:text-stone-500">Style</span>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] transition-colors duration-150 group-hover:text-amber-700 dark:group-hover:text-amber-300">{style}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">What users need to know first.</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-[1.8rem] border border-black/6 bg-white/74 p-7 dark:border-white/8 dark:bg-white/4"
            >
              <h3 className="text-xl font-semibold md:text-2xl">{faq.q}</h3>
              <p className="mt-3 leading-7 text-stone-600 dark:text-stone-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto mt-24 max-w-3xl overflow-hidden rounded-[2.5rem] border border-black/6 bg-[linear-gradient(135deg,rgba(28,24,21,0.96)_0%,rgba(60,44,24,0.96)_100%)] px-8 py-14 text-center text-stone-50 md:px-14 md:py-20">
        <span className="eyebrow border-white/14 bg-white/8 text-amber-200">Get Started</span>
        <h2 className="mx-auto mt-7 max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          Ready to see yourself differently?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-stone-300">
          Upload one photo. Discover six style directions. Let the AI do the rest.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/features"
            className="rounded-full bg-stone-50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:bg-amber-100"
          >
            See Features
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/18 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-200 transition hover:border-amber-300 hover:text-amber-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
