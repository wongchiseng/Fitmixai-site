export const metadata = {
  title: 'Features - FitMixs',
  description: 'Explore the powerful features of FitMixs. AI outfit generation, virtual try-on, and endless fashion styles.',
};

export default function Features() {
  const features = [
    {
      title: 'AI Virtual Try-On',
      desc: 'Upload a simple forward-facing photo of yourself, and our AI will seamlessly wrap different garments onto your body. It respects your unique shape, pose, and lighting to give you a realistic preview.',
      icon: '✨',
    },
    {
      title: 'Endless Style Discovery',
      desc: 'Not sure what your aesthetic is? Swipe through endless style feeds ranging from Streetwear and Minimalist to Korean and Formal. Mark your favorites to let our AI learn your taste.',
      icon: '🔍',
    },
    {
      title: 'Outfit Combinations Maker',
      desc: 'Have a jacket you love but do not know what pants match it? FitMixs generates entire coordinated outfits so you do not have to stress over styling combinations.',
      icon: '👖',
    },
    {
      title: 'High-Quality Renderings',
      desc: 'Say goodbye to floating heads and awkward 2D cutouts. Our advanced diffusion models generate high-fidelity realism so the clothes naturally drape and fold as they would in real life.',
      icon: '📸',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">App Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          FitMixs combines cutting-edge AI with intuitive design to revolutionize how you interact with clothing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {features.map((feature) => (
          <div key={feature.title} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-blue-600 text-white p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to upgrade your wardrobe?</h2>
        <p className="mb-8">Experience the future of fashion currently in development.</p>
        <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition inline-block">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
