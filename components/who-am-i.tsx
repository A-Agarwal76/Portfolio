"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles, Target, Rocket } from 'lucide-react'

export function WhoAmI({
  title = "Who Am I",
  content = "I'm an AI/ML Developer and IoT Engineer — I build intelligent systems that solve real-world problems through innovative technology. I specialize in computer vision, natural language processing, and IoT automation. From smart robots to AI-powered applications, I aim to create solutions that are intelligent, reliable, and impactful.",
}: {
  title?: string
  content?: string
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 flex items-center justify-center gap-3"
        >
          <Sparkles className="h-8 w-8 text-blue-400" />
          {title}
          <Sparkles className="h-8 w-8 text-purple-400" />
        </motion.h2>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="border border-zinc-800/60 bg-gradient-to-br from-zinc-950/60 to-zinc-900/60 backdrop-blur hover:border-zinc-700/60 hover:shadow-xl hover:shadow-zinc-900/20 transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">{content}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zinc-400">
                  <Target className="h-5 w-5 text-blue-400" />
                  <span className="text-sm">Building intelligent systems and AI solutions</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Rocket className="h-5 w-5 text-purple-400" />
                  <span className="text-sm">Innovating with IoT and mobile technologies</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-zinc-800/60">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors group"
                >
                  <span className="text-sm font-medium">Explore more about me, my hobbies, and my journey</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Visual elements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-4 backdrop-blur"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🤖</div>
                <div className="text-sm text-blue-300 font-medium">AI/ML</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-4 backdrop-blur"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="text-sm text-purple-300 font-medium">Mobile Dev</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-4 backdrop-blur"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🔌</div>
                <div className="text-sm text-emerald-300 font-medium">IoT</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-4 backdrop-blur"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm text-orange-300 font-medium">Hackathons</div>
              </div>
            </motion.div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl" />
        </motion.div>
      </div>
    </div>
  )
}
