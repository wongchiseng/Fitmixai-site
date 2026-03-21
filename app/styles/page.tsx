export const metadata = {
  title: 'Fashion Styles & AI Outfit Inspiration - Fitmixai',
  description: 'Explore various fashion styles like Streetwear, Casual, Formal, and Korean. Generate outfits for any aesthetic with AI.',
};

export default function Styles() {
  const stylesList = [
    { name: 'Streetwear', slug: 'streetwear', desc: 'Urban, casual clothing like hoodies, sneakers, and graphic tees.' },
    { name: 'Casual', slug: 'casual', desc: 'Relaxed, everyday wear prioritizing comfort and personal expression.' },
    { name: 'Formal', slug: 'formal', desc: 'Suits, evening gowns, and professional business attire.' },
    { name: 'Korean', slug: 'korean', desc: 'Trendy, oversized fits, pastels, and minimalist chic aesthetics.' },
    { name: 'Sport', slug: 'sport', desc: 'Athleisure, workout gear, and sporty comfortable fits.' },
    { name: 'Minimalist', slug: 'minimalist', desc: 'Simple lines, neutral colors, and capsule wardrobe essentials.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Explore Fashion Styles</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 text-justify mb-12 text-center max-w-2xl mx-auto">
        Discover different aesthetics and use our AI Outfit Generator to visualize yourself in these trending styles.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stylesList.map((s) => (
          <a key={s.slug} href={`/styles/${s.slug}`} className="block group">
            <div className="bg-gray-100 dark:bg-zinc-900 rounded-2xl p-8 h-64 flex flex-col justify-end group-hover:bg-gray-200 dark:hover:bg-zinc-800 transition dark:border dark:border-zinc-800">
              <h2 className="text-2xl font-bold mb-2">{s.name}</h2>
              <p className="text-gray-700 dark:text-gray-400 text-justify">{s.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
