import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

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
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-[15px] dark:text-stone-100">
          <Link href="/" className="font-display text-3xl font-semibold uppercase tracking-[0.08em]">
            Fitmixai
          </Link>
          <div className="flex items-center gap-5 text-sm uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400">
            <Link href="/features" className="site-link">Features</Link>
            <Link href="/styles" className="site-link">Styles</Link>
            <Link href="/blog" className="site-link">Blog</Link>
            <Link href="/contact" className="site-link">Contact</Link>
          </div>
        </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="mt-20 border-t border-black/6 bg-[linear-gradient(180deg,rgba(243,237,228,0.52)_0%,rgba(255,255,255,0.9)_100%)] py-12 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(33,30,28,0.94)_0%,rgba(10,10,10,0.98)_100%)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            <div>
              <h3 className="font-display mb-4 text-2xl font-semibold">Fitmixai</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">AI Outfit Generator & Virtual Try-On</p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Links</h4>
              <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/styles">Styles</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Company</h4>
              <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">Legal</h4>
              <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-7xl px-6 text-center text-sm text-stone-400 dark:text-stone-500">
            &copy; {new Date().getFullYear()} Fitmixai. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
