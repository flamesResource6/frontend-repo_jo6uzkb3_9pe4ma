import { motion } from 'framer-motion'
import { CheckCircle2, Shield, Zap, Cpu } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[500px] w-[800px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              High‑Performance Cloud VPS for builders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              Spin up blazing fast compute in seconds. SSD‑powered, DDoS protected, and fully managed networking so you can ship without friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition-colors">
                View Pricing
              </a>
              <a href="#features" className="rounded-xl bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors">
                Explore Features
              </a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 99.99% uptime SLA</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-400" /> Free DDoS protection</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-yellow-400" /> 30s provision time</div>
              <div className="flex items-center gap-2"><Cpu className="h-4 w-4 text-purple-400" /> Latest-gen CPUs</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { t: '1 vCPU', s: '1 GB RAM', p: '$5/mo' },
                  { t: '2 vCPU', s: '4 GB RAM', p: '$15/mo' },
                  { t: '4 vCPU', s: '8 GB RAM', p: '$30/mo' },
                  { t: '8 vCPU', s: '16 GB RAM', p: '$60/mo' },
                ].map((plan) => (
                  <div key={plan.t} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-white font-semibold">{plan.t}</div>
                    <div className="text-slate-300 text-sm">{plan.s}</div>
                    <div className="mt-3 text-lg font-bold text-white">{plan.p}</div>
                    <a href="#pricing" className="mt-3 inline-block text-sm text-blue-300 hover:text-white">Choose plan →</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
