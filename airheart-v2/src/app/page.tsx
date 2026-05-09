"use client"

import { motion } from "framer-motion"
import { Code2, Bot, Cpu, Zap, TerminalSquare, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-[#f0edf6] overflow-hidden selection:bg-purple-500/30">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-purple-600/20 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[100px] mix-blend-screen" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#252540] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-bold tracking-widest text-lg">AIRHEART <span className="text-gray-500 font-normal">SYSTEMS</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">Tech</span>
            <span className="hover:text-white cursor-pointer transition-colors">Architecture</span>
            <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
          </div>
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity">
            Initialize
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-8">
            <TerminalSquare className="w-4 h-4" />
            <span>mac_v3 running. All systems hot.</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            We Build <span className="gradient-text">Dynamic</span>
            <br />AI Systems.
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Stop talking about AI. Start deploying it. We engineer bespoke LLM pipelines, autonomous agents, and lightning-fast web infrastructure for operators who demand results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="h-14 px-8 bg-white text-black font-bold rounded-full hover:bg-gray-100 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95">
              Deploy Protocol <ArrowRight className="w-5 h-5" />
            </button>
            <button className="h-14 px-8 bg-transparent border border-[#252540] font-bold rounded-full hover:bg-white/5 flex items-center justify-center gap-2 transition-colors">
              View Architecture
            </button>
          </div>
        </motion.div>
      </section>

      {/* Interactive Tech Stack Grid */}
      <section className="relative z-10 py-32 px-6 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-purple-500 mb-2">The Stack</h2>
            <h3 className="text-4xl font-bold">Proof of Concept</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-[#1a1a2e] border border-[#252540]"
            >
              <Bot className="w-10 h-10 text-pink-500 mb-6" />
              <h4 className="text-xl font-bold mb-3">ClawBrain Vector Engines</h4>
              <p className="text-gray-400 leading-relaxed">
                Native SQLite-backed memory systems with temporal graph indexing. The AI doesn't just respond; it learns, sleeps, and dreams.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-[#1a1a2e] border border-[#252540]"
            >
              <Code2 className="w-10 h-10 text-orange-500 mb-6" />
              <h4 className="text-xl font-bold mb-3">React / Next.js Frontends</h4>
              <p className="text-gray-400 leading-relaxed">
                We don't do templates. Everything is raw, compiled React via Next.js on Vercel's edge network with Framer Motion physics.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-[#1a1a2e] border border-[#252540]"
            >
              <Cpu className="w-10 h-10 text-purple-500 mb-6" />
              <h4 className="text-xl font-bold mb-3">Hardware Inference</h4>
              <p className="text-gray-400 leading-relaxed">
                We physically build the Linux/Windows rigs required to run 31B+ parameter models locally. Total data sovereignty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal View */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-[#252540] bg-[#1a1a2e] shadow-2xl">
            <div className="h-12 bg-[#0a0a0f] border-b border-[#252540] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-gray-500">mac@airheart-sys: ~/core</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-gray-400 mb-2">$ system_check --status</div>
              <div className="text-green-400 mb-4">[OK] Vector memory online. 623 nodes loaded.</div>
              <div className="text-gray-400 mb-2">$ deploy_agent "ClawBuddy" --mode=autonomous</div>
              <div className="text-purple-400 mb-1">&gt; Compiling cognitive architecture...</div>
              <div className="text-purple-400 mb-1">&gt; Connecting Twilio Voice Streams...</div>
              <div className="text-purple-400 mb-4">&gt; Pushing UI to Edge Network...</div>
              <div className="text-pink-500 font-bold">SUCCESS: Agent deployed in 4.2s 🚀</div>
              <div className="mt-4 flex items-center gap-2 text-gray-400">
                <span className="text-orange-500">❯</span> <div className="w-2 h-4 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}