"use client"

import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative mt-20 border-t border-zinc-800/60 bg-gradient-to-b from-zinc-900/40 to-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-[0_0_20px_-2px_rgba(59,130,246,0.6)]" />
              <span className="text-lg font-semibold text-zinc-200">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-xs">
              AI/ML enthusiast building intelligent systems and innovative solutions through cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/projects" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                Projects
              </Link>
              <Link href="/gallery" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                Gallery
              </Link>
              <Link href="/connect" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                Connect
              </Link>
              <Link href="/about" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                About
              </Link>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-3">
              <Link 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </Link>
              <Link 
                href={siteConfig.socials.linkedin}
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link 
                href={siteConfig.socials.github}
                target="_blank"
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-zinc-800/60"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
