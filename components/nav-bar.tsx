"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from "react"

export function NavBar({
  links = [
    { href: "/#home", label: "Home" },
    { href: "/about", label: "Who Am I" },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/connect", label: "Connect" },
  ],
}: {
  links?: { href: string; label: string }[]
}) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-zinc-800/60 bg-zinc-950/60 px-4 py-3 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/40"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              className="h-3 w-3 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 shadow-[0_0_20px_-2px_rgba(59,130,246,0.6)]"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
            <span className="text-lg font-semibold text-zinc-200 group-hover:text-white transition-colors">
              {siteConfig.name}
            </span>
            <Sparkles className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative rounded-xl px-4 py-2 text-sm text-zinc-300 hover:text-zinc-50 transition-all duration-300 group",
                  pathname === l.href ? "text-zinc-50" : ""
                )}
              >
                {l.label}
                {/* Hover underline effect */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Active indicator */}
                {pathname === l.href && (
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button 
              asChild 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              <Link href="/connect">Let&apos;s Talk</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-700/60 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-zinc-300" />
            ) : (
              <Menu className="h-5 w-5 text-zinc-300" />
            )}
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mt-2 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 backdrop-blur-xl p-4">
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800/40 transition-all duration-200",
                    pathname === l.href ? "text-zinc-50 bg-zinc-800/40" : ""
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-zinc-700/60">
                <Button 
                  asChild 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                >
                  <Link href="/connect" onClick={() => setIsMobileMenuOpen(false)}>
                    Let&apos;s Talk
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
