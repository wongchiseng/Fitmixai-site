export const metadata = {
  title: 'About - FitMixs',
  description: 'Learn more about FitMixs and our mission to simplify fashion with Artificial Intelligence.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 prose prose-lg prose-blue dark:prose-invert text-justify">
      <h1 className="text-center">About FitMixs</h1>
      
      <p className="lead text-center mb-12 text-gray-600 dark:text-gray-400">
        Our mission is to make choosing clothes easier, more inspiring, and universally accessible using the power of AI.
      </p>

      <h2>The Story</h2>
      <p>
        Every morning, millions of people face the same dilemma: standing in front of a full closet and feeling like there's "nothing to wear." Mixing and matching clothing styles mentally is difficult, and buying new clothes without knowing how they fit your body type or current wardrobe leads to endless returns and wasted money.
      </p>
      <p>
        FitMixs was born out of the idea that technology can solve this. By leveraging advanced Generative AI and Virtual Try-On models, FitMixs allows anyone to test out different outfits smoothly and instantaneously. Whether you are exploring a new aesthetic like Streetwear or curating your Formal business attire, FitMixs lets you "try" before you even buy.
      </p>

      <h2>The Developer</h2>
      <p>
        FitMixs is developed by <strong>Kit</strong>. I graduated from the <em>Department of Engineering Science at National Taiwan University </em>. With a deep passion for bringing cutting-edge technology into everyday life, I combined my engineering background with a love for intuitive design to create an app that actually solves real-world fashion problems. 
      </p>

      <h2>Why AI for Fashion?</h2>
      <ul>
        <li><strong>Save Time:</strong> No more guessing what matches. Automatically generate styled outfits.</li>
        <li><strong>Save Money:</strong> Reduce buying mistakes by visualizing the outfit on <em>your</em> body first.</li>
        <li><strong>Discover Yourself:</strong> Step out of your comfort zone and try styles you normally wouldn't pick off the rack.</li>
      </ul>

      <div className="mt-12 text-center p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl not-prose border dark:border-zinc-800">
        <h3 className="text-2xl font-bold mb-4">Want to get in touch?</h3>
        <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact Kit &rarr;</a>
      </div>
    </div>
  );
}
