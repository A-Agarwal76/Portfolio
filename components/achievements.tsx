"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site-config"
import { GlowCard } from "./glow-card"
import { Trophy, Award, Star, Medal, Target, Zap, Sparkles, Rocket } from 'lucide-react'
import { Badge } from "./ui/badge"

export function Achievements() {
  const items = siteConfig.achievements

  const getAchievementIcon = (title: string) => {
    if (title.includes("Winner") || title.includes("1st")) return Trophy
    if (title.includes("2nd") || title.includes("3rd")) return Medal
    if (title.includes("Top")) return Star
    if (title.includes("Hackathon")) return Zap
    if (title.includes("Participant")) return Target
    if (title.includes("Events")) return Rocket
    return Award
  }

  const getAchievementColor = (title: string) => {
    if (title.includes("Winner") || title.includes("1st")) return "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300"
    if (title.includes("2nd") || title.includes("3rd")) return "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-300"
    if (title.includes("Top")) return "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300"
    if (title.includes("Hackathon")) return "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300"
    if (title.includes("Participant")) return "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300"
    return "from-zinc-500/20 to-gray-500/20 border-zinc-500/30 text-zinc-300"
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Achievements & Recognition
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          Celebrating milestones and accomplishments in technology and innovation
        </motion.p>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-1/4 text-yellow-400/20"
      >
        <Trophy className="h-8 w-8" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-20 top-1/3 text-orange-400/20"
      >
        <Star className="h-6 w-6" />
      </motion.div>

      <div className="relative">
        <div aria-hidden="true" className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:left-12" />
        
        <ul className="space-y-10">
          {items.map((a, idx) => {
            const Icon = getAchievementIcon(a.title)
            const colorClasses = getAchievementColor(a.title)
            
            return (
              <li key={a.title + idx} className="relative pl-20 sm:pl-24">
                {/* Enhanced timeline dot with glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="absolute left-8 sm:left-12 top-3 h-5 w-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_25px_-3px_rgba(251,191,36,0.7)]"
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-orange-400 blur-sm" />
                </motion.div>
                
                {/* Achievement card with enhanced effects */}
                <motion.div
                  initial={{ opacity: 0, x: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
                  whileHover={{ x: 8, scale: 1.02, rotateY: 2 }}
                  className="relative"
                >
                  <GlowCard>
                    <div className="rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/60 to-zinc-900/60 p-8 backdrop-blur hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-500">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="flex items-start gap-6">
                          {/* Achievement icon with enhanced styling */}
                          <div className="relative">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${colorClasses} border shadow-lg`}>
                              <Icon className="h-8 w-8" />
                            </div>
                            {/* Icon glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          
                          <div className="flex-1">
                            <motion.h3 
                              className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-white transition-colors duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              {a.title}
                            </motion.h3>
                            {a.subtitle && (
                              <p className="text-base text-zinc-400 mb-3 leading-relaxed">{a.subtitle}</p>
                            )}
                            <div className="flex items-center gap-3 text-sm text-zinc-500">
                              <Sparkles className="h-4 w-4 text-amber-400" />
                              <span>{a.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Achievement badge with enhanced styling */}
                        <div className="flex-shrink-0">
                          <Badge className={`bg-gradient-to-r ${colorClasses} border text-sm font-semibold px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-300`}>
                            {a.title.includes("Winner") ? "🏆 Winner" : 
                             a.title.includes("2nd") || a.title.includes("3rd") ? "🥈 Runner Up" :
                             a.title.includes("Top") ? "⭐ Top Performer" :
                             a.title.includes("Hackathon") ? "🚀 Hackathon" :
                             a.title.includes("Participant") ? "🎯 Participant" : "🏅 Achievement"}
                          </Badge>
                        </div>
                      </div>

                      {/* Floating particles effect */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-6 left-6 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                        <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-100" />
                        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-200" />
                        <div className="absolute bottom-8 right-6 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-300" />
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </GlowCard>
                </motion.div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
