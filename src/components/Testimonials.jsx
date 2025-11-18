const testimonials = [
  {
    quote: 'We migrated our microservices to NebulaHost and saw a 35% latency drop instantly. The dashboard is a joy to use.',
    name: 'Aisha Khan',
    role: 'CTO, TaskFlow',
  },
  {
    quote: 'The best developer experience in hosting. APIs are clean, docs are clear, and support is lightning fast.',
    name: 'Marco Rossi',
    role: 'Founder, PicoApps',
  },
  {
    quote: 'Finally a provider that balances price and performance. Our workloads are rock solid with zero babysitting.',
    name: 'Sofia Nguyen',
    role: 'Head of Platform, Stratify',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by fast‑moving teams</h2>
          <p className="mt-3 text-slate-300">Real results from builders shipping real products.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
