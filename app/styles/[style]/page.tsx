import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { style: string } }) {
  const styleRaw = params.style;
  const styleName = styleRaw.charAt(0).toUpperCase() + styleRaw.slice(1);
  return {
    title: `${styleName} AI Outfit Generator - Fitmixai`,
    description: `Generate realistic ${styleName} outfits using AI. Discover ${styleName} fashion inspiration and virtually try on clothes.`,
  };
}

export default function StylePage({ params }: { params: { style: string } }) {
  const validStyles = ['casual', 'streetwear', 'formal', 'sport', 'korean', 'minimalist'];
  
  if (!validStyles.includes(params.style)) {
    notFound();
  }

  const styleName = params.style.charAt(0).toUpperCase() + params.style.slice(1);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">{styleName} Fashion AI Generator</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-justify">
        Translate the {params.style} aesthetic onto your own photos instantly. Use our AI to explore new {params.style} outfit ideas.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl mb-12 border dark:border-blue-900/50">
        <h2 className="text-2xl font-semibold mb-4">Try on {styleName} style now</h2>
        <a href="/try-on" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Open AI Generator
        </a>
      </div>

      <div className="prose max-w-none dark:prose-invert text-justify">
        <h2>What is {styleName} style?</h2>
        <p>This section explores the core elements, history, and key pieces that define the {styleName} aesthetic in modern fashion.</p>
        
        <h2>Why use AI for {styleName} outfits?</h2>
        <p>Finding the perfect {styleName} pieces can be difficult. With the Fitmixai AI Outfit Generator, you can mix and match different elements virtually before ever buying a real item.</p>
      </div>
    </div>
  );
}
