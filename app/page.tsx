import Image from 'next/image';

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

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
      <section className="text-center space-y-6 pt-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          AI Outfit Generator & <br className="hidden md:block"/> Virtual Try-On
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Upload a photo and instantly try different outfits with AI. 
          Discover new fashion styles and create your perfect look.
        </p>
        <div className="pt-4">
          <a href="/features" className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition">
            Explore Features
          </a>
        </div>
      </section>

      <section className="rounded-[2rem] bg-[linear-gradient(180deg,#f8f5ef_0%,#ffffff_100%)] px-6 py-16 dark:bg-[linear-gradient(180deg,rgba(37,35,31,0.9)_0%,rgba(10,10,10,1)_100%)] md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">How it Works</h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 md:text-lg">
            A simple three-step flow, presented like a product walkthrough instead of three disconnected screenshots.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[2rem] border border-black/5 bg-white/85 p-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur dark:border-white/10 dark:bg-zinc-950/75"
            >
              <div className="mb-6 flex items-center justify-between text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 dark:text-amber-300">
                  Step {step.number}
                </span>
                <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black">
                  {step.number}
                </span>
              </div>

              <div className="phone-frame mx-auto w-full max-w-[220px]">
                <div className="phone-screen bg-[radial-gradient(circle_at_top,_rgba(255,214,102,0.45),_transparent_55%),linear-gradient(180deg,#f3efe6_0%,#fffdf9_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,214,102,0.18),_transparent_55%),linear-gradient(180deg,#201d18_0%,#111111_100%)]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 220px, 220px"
                    className="object-contain p-2"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-zinc-900/50 p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm dark:border dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-3">AI Virtual Try-On</h3>
            <p className="text-gray-600 dark:text-gray-400">Try on clothes instantly with our advanced AI technology.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm dark:border dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-3">Outfit Generator</h3>
            <p className="text-gray-600 dark:text-gray-400">Generate limitless outfit combinations.</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm dark:border dark:border-zinc-800">
            <h3 className="text-xl font-bold mb-3">Style Discovery</h3>
            <p className="text-gray-600 dark:text-gray-400">Explore trending fashion styles like casual, streetwear, formal.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">Explore Styles</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Casual', 'Streetwear', 'Formal', 'Sport', 'Korean', 'Minimalist'].map(style => (
            <a key={style} href={'/styles/' + style.toLowerCase()} className="group relative h-48 bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center hover:bg-gray-200 dark:hover:bg-zinc-800 dark:border dark:border-zinc-800 transition">
              <span className="text-xl font-semibold group-hover:scale-110 transition">{style}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          <div className="pb-6 border-b dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2">What is AI virtual try-on?</h3>
            <p className="text-gray-600 dark:text-gray-400">AI virtual try-on simulates how clothing would look on you based on a photo you upload.</p>
          </div>
          <div className="pb-6 border-b dark:border-zinc-800">
            <h3 className="text-lg font-semibold mb-2">How does AI outfit generator work?</h3>
            <p className="text-gray-600 dark:text-gray-400">Our generator creates complete, cohesive outfit combinations tailored to your aesthetic.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
