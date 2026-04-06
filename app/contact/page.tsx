export const metadata = {
  title: 'Contact Us - Fitmixai',
  description: 'Get in touch with the Fitmixai team for support, business inquiries, or general questions.',
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <section className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
          Let&apos;s talk.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-stone-600 dark:text-stone-400 md:text-lg">
          Questions about Fitmixai, partnership opportunities, or feedback — we read every message.
        </p>
      </section>

      <div className="mx-auto mt-14 max-w-2xl">
        <div className="editorial-card rounded-[2.5rem] p-9 md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em]">Email Us</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-400">
                We typically respond within 24 hours on business days.
              </p>
              <a
                href="mailto:wongchikit4867@gmail.com"
                className="mt-6 inline-block rounded-full bg-stone-950 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-stone-50 transition hover:bg-stone-800 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"
              >
                Send Email
              </a>
            </div>
            <div className="rounded-[1.6rem] border border-black/6 bg-white/60 p-6 dark:border-white/8 dark:bg-white/4">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400 dark:text-stone-500">
                Direct Address
              </p>
              <p className="mt-3 break-all text-base font-medium text-stone-800 dark:text-stone-200">
                wongchikit4867@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-black/6 pt-10 dark:border-white/8">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Support', desc: 'Help with the app, bugs, and account issues.' },
                { label: 'Partnerships', desc: 'Collaborations, integrations, and media.' },
                { label: 'Feedback', desc: 'Feature requests and product suggestions.' },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
