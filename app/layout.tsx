import type { Metadata } from 'next';
import { Manrope, Noto_Serif } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
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
      <head>
        {/* Material Symbols – loaded via <link> so Next.js PostCSS doesn't strip the ligature settings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={`${manrope.variable} ${notoSerif.variable}`}>
        {/* Top Nav */}
        <nav className="sticky top-0 w-full z-50 glass-nav shadow-[0_12px_40px_rgba(43,52,55,0.06)]">
          <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="text-2xl font-serif italic text-on-background transition-opacity hover:opacity-70">
              Fitmixai
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/features" className="site-link text-on-surface-variant font-semibold text-xs tracking-widest uppercase transition-colors">Features</Link>
              <Link href="/styles" className="site-link text-on-surface-variant font-semibold text-xs tracking-widest uppercase transition-colors">Styles</Link>
              <Link href="/blog" className="site-link text-on-surface-variant font-semibold text-xs tracking-widest uppercase transition-colors">Blog</Link>
              <Link href="/about" className="site-link hidden lg:block text-on-surface-variant font-semibold text-xs tracking-widest uppercase transition-colors">About</Link>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-br from-primary to-primary-dim text-on-primary px-7 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-80 transition-all duration-300 active:scale-95"
            >
              Contact
            </Link>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
          <div className="flex flex-col md:flex-row justify-between items-center px-8 py-14 gap-8 max-w-screen-2xl mx-auto">
            <Link href="/" className="text-xl font-serif italic text-on-background">Fitmixai</Link>
            <div className="flex flex-wrap justify-center gap-8">
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/features">Features</Link>
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/styles">Styles</Link>
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/blog">Blog</Link>
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/about">About</Link>
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/privacy">Privacy Policy</Link>
              <Link className="site-link text-on-surface-variant hover:text-primary transition-colors text-sm" href="/terms">Terms</Link>
            </div>
            <div className="text-on-surface-variant text-sm">
              © {new Date().getFullYear()} Fitmixai. Built with AI, for fashion.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
