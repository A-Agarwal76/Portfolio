"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Code2, Smartphone, Brain, Database, Cloud, Cpu, Shield, Rocket, Eye, Terminal } from 'lucide-react'

const categories = [
  { id: "Languages", icon: Code2, color: "from-blue-500 to-cyan-500", bgColor: "from-blue-500/10 to-cyan-500/10" },
  { id: "Frameworks & Tools", icon: Smartphone, color: "from-purple-500 to-pink-500", bgColor: "from-purple-500/10 to-pink-500/10" },
  { id: "Computer Fundamentals", icon: Brain, color: "from-emerald-500 to-teal-500", bgColor: "from-emerald-500/10 to-teal-500/10" }
] as const

const getSkillIcon = (skill: string) => {
  if (skill.includes("Python")) return Terminal
  if (skill.includes("Flutter")) return Smartphone
  if (skill.includes("Database")) return Database
  if (skill.includes("Cloud") || skill.includes("Firebase")) return Cloud
  if (skill.includes("IoT") || skill.includes("Raspberry") || skill.includes("ESP32")) return Cpu
  if (skill.includes("AI/ML") || skill.includes("Deep Learning")) return Brain
  if (skill.includes("Computer Vision") || skill.includes("OpenCV")) return Eye
  if (skill.includes("Cyber Security")) return Shield
  if (skill.includes("Hackathon")) return Rocket
  return Code2
}

export function Skills() {
  const skills = siteConfig.skills
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("Languages")

  const activeList = useMemo(() => {
    if (active === "Languages") return skills.languages
    if (active === "Frameworks & Tools") return skills.frameworks
    return skills.fundamentals
  }, [active, skills])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Technical Expertise
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          A comprehensive toolkit for building intelligent systems and innovative solutions
        </motion.p>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
        {categories.map((cat, index) => {
          const Icon = cat.icon
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-8 py-4 text-sm font-medium transition-all duration-300 border-2 relative overflow-hidden",
                active === cat.id 
                  ? `bg-gradient-to-r ${cat.color} border-transparent text-white shadow-lg shadow-${cat.color.split('-')[1]}-500/25` 
                  : "border-zinc-700/50 bg-zinc-900/40 text-zinc-300 hover:border-zinc-600/70 hover:bg-zinc-800/40"
              )}
              aria-pressed={active === cat.id}
            >
              {/* Background glow effect */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
                active === cat.id ? "opacity-100" : "group-hover:opacity-50",
                `bg-gradient-to-r ${cat.bgColor}`
              )} />
              
              <Icon className="h-5 w-5 relative z-10" />
              <span className="relative z-10">{cat.id}</span>
            </motion.button>
          )
        })}
      </div>

      <motion.div 
        layout
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {activeList.map((skill, index) => {
            const Icon = getSkillIcon(skill)
            return (
              <motion.div
                key={skill}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                exit={{ opacity: 0, y: -30, scale: 0.9, rotateX: 15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
                className="group relative rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/60 to-zinc-900/60 p-8 backdrop-blur hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-zinc-900/30 transition-all duration-500"
              >
                {/* Skill icon with glow */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative bg-gradient-to-br from-zinc-800/60 to-zinc-700/60 p-4 rounded-2xl border border-zinc-600/40">
                      <Icon className="h-8 w-8 text-zinc-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Skill name */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-white transition-colors duration-300 mb-2">
                    {skill}
                  </h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-200" />
                  <div className="absolute bottom-8 right-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300" />
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
