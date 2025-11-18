const faqs = [
  {
    q: 'Can I scale my VPS up and down?',
    a: 'Yes. You can resize CPU/RAM and storage at any time from the dashboard or API.'
  },
  {
    q: 'Do you offer backups and snapshots?',
    a: 'All plans include automated daily backups and manual snapshots with one-click restore.'
  },
  {
    q: 'What about support SLAs?',
    a: 'We offer 24/7 support with a 30-minute first response time on all paid plans.'
  },
  {
    q: 'Is there a free trial?',
    a: 'You can start with $100 in credits for the first 30 days to try any product.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
          <p className="mt-3 text-slate-300">Quick answers to common questions about NebulaHost.</p>
        </div>

        <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((item) => (
            <div key={item.q} className="p-6">
              <h3 className="text-white font-semibold">{item.q}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
