import Link from 'next/link';

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
      category: 'Tools',
      readTime: '6 min read',
      summary: 'Discover the top AI tools that are revolutionizing how we put together clothes, generate outfits, and virtually try on fashion.',
    },
    {
      title: 'How AI Virtual Try-On Actually Works',
      slug: 'how-ai-virtual-try-on-works',
      date: 'March 1, 2026',
      category: 'Technology',
      readTime: '5 min read',
      summary: 'A deep dive into the technology behind virtual fitting rooms. How generative AI models maintain body proportions and garment details.',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <section className="mb-16 text-center">
        <span className="eyebrow">Fitmixai Journal</span>
        <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Style thinking,<br className="hidden sm:block" /> written down.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
          Guides, deep-dives, and product thinking from the team building Fitmixai.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="editorial-card flex h-full flex-col rounded-[2rem] p-7 transition-transform duration-200 hover:-translate-y-1 md:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700 dark:text-amber-300">
                  {post.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-500">
                  <span>{post.readTime}</span>
                  <span className="h-px w-4 bg-stone-300 dark:bg-stone-600" />
                  <span>{post.date}</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] transition-colors duration-150 group-hover:text-amber-700 dark:group-hover:text-amber-300 md:text-3xl">
                {post.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-stone-600 dark:text-stone-400">
                {post.summary}
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                Read Article
                <span className="transition-transform duration-150 group-hover:translate-x-1.5">→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
