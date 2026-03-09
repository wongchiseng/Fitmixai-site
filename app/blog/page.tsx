export const metadata = {
  title: 'Blog - Fitmixai AI Fashion Guides',
  description: 'Read the latest styling guides, AI fashion news, and outfit generator tips from the Fitmixai team.',
};

export default function Blog() {
  const posts = [
    {
      title: '10 Best AI Outfit Generators in 2026',
      slug: '10-best-ai-outfit-generators-2026',
      date: 'March 9, 2026',
      summary: 'Discover the top AI tools that are revolutionizing how we put together clothes, generate outfits, and virtually try on fashion.',
    },
    {
      title: 'How AI Virtual Try-On Actually Works',
      slug: 'how-ai-virtual-try-on-works',
      date: 'March 1, 2026',
      summary: 'A deep dive into the technology behind virtual fitting rooms. How generative AI models maintain body proportions and garment details.',
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 text-center">Fitmixai Journal</h1>
      
      <div className="grid gap-8">
        {posts.map(post => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="border border-gray-200 dark:border-zinc-800 dark:bg-zinc-900/50 rounded-3xl p-8 hover:shadow-lg dark:hover:border-zinc-600 transition">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-justify">
                {post.summary}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
