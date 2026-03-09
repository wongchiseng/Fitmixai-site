export const metadata = {
  title: 'Contact Us - FitMixs',
  description: 'Get in touch with the FitMixs team for support, business inquiries, or general questions.',
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
        Have questions about FitMixs, need support, or want to explore partnership opportunities? We'd love to hear from you.
      </p>
      
      <div className="bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-3xl p-12">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="text-2xl font-semibold mb-4">Send us an email</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          We usually respond within 24 hours.
        </p>
        <a 
          href="mailto:wongchikit4867@gmail.com" 
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition inline-block"
        >
          wongchikit4867@gmail.com
        </a>
      </div>
    </div>
  );
}
