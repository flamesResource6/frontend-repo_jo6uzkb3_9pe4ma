import { useState } from 'react'
import { Menu, X, Cloud, Server } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 shadow-lg">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 blur-lg bg-blue-500/30 rounded-full" />
                <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white shadow-lg">
                  <Cloud className="h-5 w-5" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">NebulaHost</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                <Server className="h-4 w-4" />
                <span>Launch Console</span>
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                  <Server className="h-4 w-4" />
                  <span>Launch Console</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
