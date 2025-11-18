import { ShieldCheck, Globe, Network, Gauge, HardDrive, Lock, Cable, Boxes } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'DDoS protection', desc: 'Always-on network-level mitigation to keep your apps online.' },
  { icon: Gauge, title: 'NVMe performance', desc: 'Next-gen NVMe SSDs and DDR5 RAM for blazing IO.' },
  { icon: Network, title: '1+ Gbps networking', desc: 'High-throughput links with generous bandwidth across regions.' },
  { icon: Globe, title: 'Global regions', desc: 'Deploy close to your users with 12+ data centers worldwide.' },
  { icon: HardDrive, title: 'Daily backups', desc: 'Point‑in‑time snapshots and one‑click restore.' },
  { icon: Lock, title: 'Private networking', desc: 'Isolated VPCs, security groups, and firewall rules.' },
  { icon: Cable, title: '1‑click apps', desc: 'Deploy stacks like LAMP, Docker, or Kubernetes in minutes.' },
  { icon: Boxes, title: 'API & CLI', desc: 'Automate with a modern REST API and open‑source CLI.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to ship fast</h2>
          <p className="mt-3 text-slate-300">Simple management, powerful infrastructure, and world‑class reliability.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 text-blue-300 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
