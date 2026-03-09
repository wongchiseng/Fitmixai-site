import Image from 'next/image';

export const metadata = {
  title: 'Features - Fitmixai',
  description: 'Explore the powerful features of Fitmixai. AI outfit generation, virtual try-on, and endless fashion styles.',
};

export default function Features() {
  const features = [
    {
      title: 'AI Virtual Try-On',
      desc: 'Upload a simple forward-facing photo of yourself, and our AI will seamlessly wrap different garments onto your body. It respects your unique shape, pose, and lighting to give you a realistic preview.',
      icon: '✨',
      images: ['/5.webp', '/6.webp'],
    },
    {
      title: 'Endless Style Discovery',
      desc: 'Not sure what your aesthetic is? Swipe through endless style feeds ranging from Streetwear and Minimalist to Korean and Formal. Mark your favorites to let our AI learn your taste.',
      icon: '🔍',
      images: ['/7.webp', '/8.webp'],
    },
    {
      title: 'Outfit Combinations Maker',
      desc: 'Have a jacket you love but do not know what pants match it? Fitmixai generates entire coordinated outfits so you do not have to stress over styling combinations.',
      icon: '👖',
      images: ['/9.webp', '/10.webp'],
    },
    {
      title: 'High-Quality Renderings',
      desc: 'Say goodbye to floating heads and awkward 2D cutouts. Our advanced diffusion models generate high-fidelity realism so the clothes naturally drape and fold as they would in real life.',
      icon: '📸',
      images: ['/11.webp', '/12.webp'],
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid items-center gap-12 mb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex rounded-full border border-amber-300/70 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800 dark:border-amber-400/20 dark:bg-amber-300/10 dark:text-amber-200">
            Product Tour
          </span>
          <h1 className="mt-6 text-5xl font-bold">App Features</h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400 md:text-[1.35rem] md:leading-9">
            Fitmixai combines wardrobe exploration, style discovery, and polished AI rendering into one visual workflow.
          </p>
        </div>

        <div className="relative min-h-[460px] rounded-[2rem] border border-black/5 bg-[linear-gradient(180deg,#f7f1e6_0%,#ffffff_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(41,35,25,0.7)_0%,rgba(12,12,12,1)_100%)]">
          <div className="absolute -top-4 right-5 rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white dark:bg-white dark:text-black">
            Preview
          </div>
          <div className="absolute left-4 top-10 w-[34%] max-w-[160px] rotate-[-10deg]">
            <div className="phone-frame">
              <div className="phone-screen">
                <Image src="/5.webp" alt="Fitmixai wardrobe screen" fill sizes="160px" className="object-contain p-2" />
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 top-4 w-[42%] max-w-[210px] -translate-x-1/2">
            <div className="phone-frame shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
              <div className="phone-screen">
                <Image src="/13.webp" alt="Fitmixai generated result" fill sizes="210px" className="object-contain p-2" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-4 w-[34%] max-w-[170px] rotate-[10deg]">
            <div className="phone-frame">
              <div className="phone-screen">
                <Image src="/9.webp" alt="Fitmixai outfit browsing screen" fill sizes="170px" className="object-contain p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-[2rem] border border-gray-100 bg-gray-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/50 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
              </div>
              <div className="flex -space-x-4">
                {feature.images.map((image, index) => (
                  <div
                    key={image}
                    className={`phone-frame w-[86px] ${index === 1 ? 'translate-y-5' : ''}`}
                  >
                    <div className="phone-screen">
                      <Image
                        src={image}
                        alt={`${feature.title} preview ${index + 1}`}
                        fill
                        sizes="86px"
                        className="object-contain p-1.5"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center bg-blue-600 dark:bg-blue-600/20 text-white dark:text-blue-100 p-12 border dark:border-blue-500/30 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to upgrade your wardrobe?</h2>
        <p className="mb-8">Experience the future of fashion currently in development.</p>
        <a href="/contact" className="bg-white dark:bg-blue-500 text-blue-600 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-blue-600 transition inline-block">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
