import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-700/30 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <footer className="mt-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} NebulaHost, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
