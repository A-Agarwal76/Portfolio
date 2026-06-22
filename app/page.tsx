"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, MessageCircle, Star, Sparkles, Target, Rocket } from 'lucide-react'
import { NavBar } from "@/components/nav-bar"
import { MetallicBackground } from "@/components/metallic-background"
import { Hero } from "@/components/hero"
import { WhoAmI } from "@/components/who-am-i"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"
import { Cursor } from "@/components/cursor"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <>
      <Cursor />
      <NavBar />
      <main className="relative min-h-screen bg-black text-zinc-50">
        <MetallicBackground />
        
        <div className="relative">
          {/* Hero section */}
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>

          {/* Quick actions under hero with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 mb-24"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="default"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all duration-300 group"
                >
                  <Link href="/connect">
                    <MessageCircle className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    Let&apos;s Connect
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:scale-105 transition-all duration-300 backdrop-blur group"
                >
                  <a href="/images/Aditya Agarwal.pdf" download="Aditya_Agarwal_Resume.pdf" aria-label="Download resume as PDF">
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:scale-105 transition-all duration-300 backdrop-blur group"
                >
                  <Link href="/projects">
                    <Star className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Short Who Am I on home (full page at /about) */}
          <section id="about" className="scroll-mt-24">
            <WhoAmI />
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          {/* Achievements */}
          <section id="achievements" className="scroll-mt-24">
            <Achievements />
          </section>

          {/* Final CTA with enhanced styling */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-24 relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            
            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 text-blue-400/20"
            >
              <Sparkles className="h-12 w-12" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-20 right-20 text-purple-400/20"
            >
              <Target className="h-10 w-10" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 6 }}
              className="absolute top-1/2 right-1/4 text-cyan-400/20"
            >
              <Rocket className="h-8 w-8" />
            </motion.div>

            <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6"
              >
                Ready to Build Something Amazing?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Let&apos;s collaborate on innovative projects that push the boundaries of technology
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all duration-300 group text-lg px-8 py-6"
                >
                  <Link href="/connect">
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Get In Touch
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  )
}
