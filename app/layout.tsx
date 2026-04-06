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
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,242,234,0.82)] px-6 [-webkit-backdrop-filter:blur(14px)] [backdrop-filter:blur(14px)] dark:border-white/6 dark:bg-[rgba(18,16,15,0.82)]">
          <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 text-[15px] dark:text-stone-100">
            <Link href="/" className="font-display text-2xl font-semibold uppercase tracking-[0.08em] transition-opacity hover:opacity-70">
              Fitmixai
            </Link>
            <div className="flex items-center gap-1 text-sm uppercase tracking-[0.2em] text-stone-600 dark:text-stone-400">
              <Link href="/features" className="site-link rounded-full px-4 py-2 transition hover:bg-black/5 dark:hover:bg-white/6">Features</Link>
              <Link href="/styles" className="site-link rounded-full px-4 py-2 transition hover:bg-black/5 dark:hover:bg-white/6">Styles</Link>
              <Link href="/blog" className="site-link rounded-full px-4 py-2 transition hover:bg-black/5 dark:hover:bg-white/6">Blog</Link>
              <Link href="/about" className="site-link hidden rounded-full px-4 py-2 transition hover:bg-black/5 dark:hover:bg-white/6 md:block">About</Link>
              <Link
                href="/contact"
                className="ml-3 rounded-full bg-stone-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="mt-24 border-t border-black/6 bg-[linear-gradient(180deg,rgba(243,237,228,0.52)_0%,rgba(255,255,255,0.9)_100%)] py-14 dark:border-white/8 dark:bg-[linear-gradient(180deg,rgba(33,30,28,0.94)_0%,rgba(10,10,10,0.98)_100%)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="col-span-2 md:col-span-1">
                <Link href="/" className="font-display text-2xl font-semibold uppercase tracking-[0.08em]">Fitmixai</Link>
                <p className="mt-3 max-w-xs text-sm leading-6 text-stone-500 dark:text-stone-400">
                  AI Outfit Generator &amp; Virtual Try-On. One portrait, endless possibilities.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-stone-400 dark:text-stone-500">Product</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/features" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Features</Link></li>
                  <li><Link href="/styles" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Styles</Link></li>
                  <li><Link href="/blog" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-stone-400 dark:text-stone-500">Company</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/about" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">About</Link></li>
                  <li><Link href="/contact" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-stone-400 dark:text-stone-500">Legal</h4>
                <ul className="space-y-2.5 text-sm">
                  <li><Link href="/privacy" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-300">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/6 pt-8 text-xs text-stone-400 dark:border-white/8 dark:text-stone-500 sm:flex-row">
              <span>&copy; {new Date().getFullYear()} Fitmixai. All rights reserved.</span>
              <span>Built with AI, for fashion.</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
