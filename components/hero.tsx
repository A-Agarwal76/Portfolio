"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"
import { Badge } from "@/components/ui/badge"
import { Bodoni_Moda, Playfair_Display } from 'next/font/google'
import { ArrowDown, Sparkles, Star, Zap, Target, Rocket } from 'lucide-react'

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export function Hero() {
  const { name, tagline, role, education } = siteConfig

  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      {/* Enhanced ambient beams with multiple layers */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 left-1/2 h-[800px] w-[1400px] -translate-x-1/2">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-[conic-gradient(from_120deg,rgba(59,130,246,0.3),rgba(147,51,234,0.2),rgba(236,72,153,0.3),rgba(59,130,246,0.3))]" />
        <div className="absolute inset-0 blur-3xl opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.4),transparent_50%)]" />
        <div className="absolute inset-0 blur-3xl opacity-15 bg-[conic-gradient(from_240deg,rgba(236,72,153,0.2),rgba(59,130,246,0.2),rgba(147,51,234,0.2),rgba(236,72,153,0.2))]" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 text-blue-400/30"
      >
        <Star className="h-8 w-8" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 left-8 text-purple-400/30"
      >
        <Zap className="h-6 w-6" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-60 right-20 text-cyan-400/30"
      >
        <Target className="h-5 w-5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center"
      >
        {/* Education badges with enhanced styling and staggered animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex flex-wrap items-center gap-3 mb-12"
        >
          {[
            { text: education.institute, color: "from-blue-600/20 to-purple-600/20", border: "border-blue-500/30", textColor: "text-blue-300", icon: Sparkles },
            { text: education.degree, color: "from-emerald-600/20 to-teal-600/20", border: "border-emerald-500/30", textColor: "text-emerald-300", icon: Star },
            { text: `Graduating ${education.graduation}`, color: "from-orange-600/20 to-red-600/20", border: "border-orange-500/30", textColor: "text-orange-300", icon: Rocket }
          ].map((badge, index) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge className={`bg-gradient-to-r ${badge.color} ${badge.border} ${badge.textColor} backdrop-blur-sm px-4 py-2 text-sm font-medium`}>
                  <Icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main name with enhanced gradient and floating effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`text-6xl sm:text-7xl md:text-8xl leading-[0.9] font-bold tracking-tight ${bodoni.className} mb-8 relative`}
        >
          <motion.span 
            className="bg-[linear-gradient(110deg,#f8fafc,#e2e8f0_20%,#94a3b8_40%,#64748b_60%,#334155_80%,#1e293b_95%)] bg-clip-text text-transparent [background-size:200%] animate-[shine_6s_linear_infinite] block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.span>
          
          {/* Name glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.h1>

        {/* Role with enhanced typography and floating animation */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-2xl sm:text-3xl text-zinc-200 font-medium mb-6 ${playfair.className} relative`}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {role}
          </motion.span>
        </motion.p>

        {/* Tagline with better contrast and enhanced styling */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-10 relative"
        >
          <span className="relative z-10">{tagline}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent blur-xl -z-10" />
        </motion.div>

        {/* Location info with enhanced styling and floating effect */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm text-zinc-500 bg-gradient-to-r from-zinc-900/40 to-zinc-800/40 border border-zinc-700/60 rounded-full px-8 py-4 inline-block backdrop-blur-sm shadow-lg"
        >
          <motion.span 
            className="font-medium text-zinc-300"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {education.institute}
          </motion.span>
          <span className="mx-3 text-zinc-500">•</span>
          <span>{education.location}</span>
        </motion.div>

        {/* Enhanced scroll indicator with particle effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center text-zinc-500 group cursor-pointer"
          >
            <span className="text-sm mb-3 font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Scroll to explore
            </span>
            <div className="relative">
              <ArrowDown className="w-6 h-6 group-hover:text-zinc-300 transition-colors" />
              {/* Particle trail effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  animate={{ y: [0, 20], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  className="w-1 h-4 bg-gradient-to-b from-blue-400 to-transparent rounded-full mx-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: 0% 0; }
        }
      `}</style>
    </div>
  )
}
