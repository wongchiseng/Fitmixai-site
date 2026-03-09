import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fitmixai - AI Outfit Generator & Virtual Try-On',
  description: 'Create outfits instantly with AI. Upload a photo and try different clothing styles with Fitmixai AI virtual try-on.',
  keywords: 'AI outfit generator, virtual try on, AI fashion, AI clothing changer, fashion inspiration',
  openGraph: {
    title: 'Fitmixai - AI Outfit Generator & Virtual Try-On',
    description: 'Create outfits instantly with AI. Upload a photo and try different clothing styles with Fitmixai AI virtual try-on.',
    url: 'https://fitmixai.com',
    siteName: 'Fitmixai',
    images: [
      {
        url: 'https://fitmixai.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto dark:text-gray-100">
          <a href="/" className="text-2xl font-bold">Fitmixai</a>
          <div className="space-x-4 flex">
            <a href="/features" className="hover:text-blue-600 dark:hover:text-blue-400">Features</a>
            <a href="/styles" className="hover:text-blue-600 dark:hover:text-blue-400">Styles</a>
            <a href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</a>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 dark:bg-zinc-950 border-t dark:border-zinc-800 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Fitmixai</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">AI Outfit Generator & Virtual Try-On</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Links</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="/features">Features</a></li>
                <li><a href="/styles">Styles</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Fitmixai. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
