"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight, Github, Play, Star, Zap, Target } from 'lucide-react'
import { siteConfig } from "@/lib/site-config"
import { GlowCard } from "./glow-card"

export function Projects() {
  const projects = siteConfig.projects

  return (
    <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-20">
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
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8"
        >
          Showcasing innovative solutions in AI/ML, IoT, and mobile development
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button asChild variant="outline" className="border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:scale-105 transition-transform group">
            <Link href="/projects">
              <span className="mr-2">View all projects</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div className="relative">
        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-10 text-blue-400/20 z-10"
        >
          <Star className="h-6 w-6" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-5 right-20 text-purple-400/20 z-10"
        >
          <Zap className="h-5 w-5" />
        </motion.div>

        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 2 }}
              className="snap-start shrink-0 w-[90vw] sm:w-[600px]"
            >
              <GlowCard>
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/60 to-zinc-900/60 backdrop-blur hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-zinc-900/30 transition-all duration-500">
                  {/* Project Image with enhanced effects */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.title} cover image`}
                      fill
                      sizes="(max-width: 768px) 90vw, 600px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Project title overlay with enhanced styling */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.h3 
                        className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500"
                      >
                        {p.title}
                      </motion.h3>
                      <p className="text-zinc-200 text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                        {p.description}
                      </p>
                    </div>

                    {/* Enhanced hover overlay with interesting facts */}
                    <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="m-8 rounded-2xl border border-zinc-700/60 bg-black/90 p-8 backdrop-blur shadow-2xl">
                          <p className="text-base font-semibold text-zinc-200 mb-4 flex items-center gap-3">
                            <Target className="w-5 h-5 text-blue-400" />
                            Key Features
                          </p>
                          <ul className="space-y-3 text-base text-zinc-300">
                            {p.facts?.slice(0, 3).map((f: string, i: number) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                              >
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0" />
                                {f}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project details with enhanced styling */}
                  <div className="p-8">
                    {/* Technology stack with enhanced badges */}
                    <div className="mb-8">
                      <p className="text-sm text-zinc-400 mb-4 font-medium">Technologies used:</p>
                      <div className="flex flex-wrap gap-3">
                        {p.stack.map((tech: string) => (
                          <Badge 
                            key={tech} 
                            className="bg-gradient-to-r from-zinc-800/60 to-zinc-700/60 border border-zinc-600/40 text-zinc-300 hover:from-zinc-700/60 hover:to-zinc-600/60 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons with enhanced styling */}
                    <div className="flex gap-4">
                      {p.link && (
                        <Button asChild variant="outline" className="flex-1 border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:scale-105 transition-transform group">
                          <Link href={p.link} target="_blank" aria-label={`${p.title} repository link`}>
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            View Code
                          </Link>
                        </Button>
                      )}
                      {p.demo && (
                        <Button asChild variant="outline" className="flex-1 border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 hover:scale-105 transition-transform group">
                          <Link href={p.demo} target="_blank" aria-label={`${p.title} demo link`}>
                            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <div className="absolute top-12 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-100" />
                    <div className="absolute bottom-8 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-200" />
                    <div className="absolute bottom-12 right-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300" />
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Enhanced scroll indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .no-scrollbar {
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  )
}
