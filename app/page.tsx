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

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-12">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="relative aspect-[9/16] w-full max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800">
              <img src="/1.webp" alt="Upload photo step" className="object-cover w-full h-full" />
              <div className="absolute top-4 left-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload your photo</h3>
            <p className="text-gray-600 dark:text-gray-400">Snap a quick photo or choose one from your gallery.</p>
          </div>
          <div className="p-6">
            <div className="relative aspect-[9/16] w-full max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800">
              <img src="/2.webp" alt="Choose style step" className="object-cover w-full h-full" />
              <div className="absolute top-4 left-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose clothing style</h3>
            <p className="text-gray-600 dark:text-gray-400">Select from streetwear, casual, formal, and more.</p>
          </div>
          <div className="p-6">
            <div className="relative aspect-[9/16] w-full max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-zinc-800">
              <img src="/3.webp" alt="AI generate step" className="object-cover w-full h-full" />
              <div className="absolute top-4 left-4 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">3</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">AI generates outfit</h3>
            <p className="text-gray-600 dark:text-gray-400">See your new look instantly styled by AI.</p>
          </div>
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
