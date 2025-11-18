import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Nano',
    price: 5,
    period: 'mo',
    specs: ['1 vCPU', '1 GB RAM', '25 GB NVMe', '1 TB Bandwidth'],
    popular: false,
  },
  {
    name: 'Micro',
    price: 10,
    period: 'mo',
    specs: ['2 vCPU', '2 GB RAM', '50 GB NVMe', '3 TB Bandwidth'],
    popular: true,
  },
  {
    name: 'Standard',
    price: 20,
    period: 'mo',
    specs: ['2 vCPU', '4 GB RAM', '80 GB NVMe', '5 TB Bandwidth'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 40,
    period: 'mo',
    specs: ['4 vCPU', '8 GB RAM', '160 GB NVMe', '8 TB Bandwidth'],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Scale up or down any time. No hidden fees.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border ${plan.popular ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10 bg-white/5'} p-6`}>
              {plan.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-blue-600 text-white text-xs font-semibold px-3 py-1 shadow">Most popular</div>
              )}
              <h3 className="text-white font-semibold">{plan.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-extrabold text-white">${plan.price}</span>
                <span className="text-slate-400">/{plan.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {plan.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {s}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2 font-semibold transition-colors ${plan.popular ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-white/10 text-white hover:bg-white/20'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
