"use client"

import Image from "next/image"
import { MetallicBackground } from "@/components/metallic-background"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Cursor } from "@/components/cursor"
import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import {
  Trophy,
  Code2,
  Rocket,
  Brain,
  Award,
  Sparkles,
  Target,
  Heart,
} from "lucide-react"

/* ── colour map for hobby cards ──────────────────── */
const colorMap: Record<string, {
  bg: string; border: string; text: string; overlay: string; glow: string
}> = {
  emerald: {
    bg: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-300",
    overlay: "from-emerald-900/80 via-emerald-900/40 to-transparent",
    glow: "shadow-emerald-500/20",
  },
  orange: {
    bg: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
    text: "text-orange-300",
    overlay: "from-orange-900/80 via-orange-900/40 to-transparent",
    glow: "shadow-orange-500/20",
  },
  blue: {
    bg: "from-blue-500/20 to-sky-500/20",
    border: "border-blue-500/30",
    text: "text-blue-300",
    overlay: "from-blue-900/80 via-blue-900/40 to-transparent",
    glow: "shadow-blue-500/20",
  },
  purple: {
    bg: "from-purple-500/20 to-violet-500/20",
    border: "border-purple-500/30",
    text: "text-purple-300",
    overlay: "from-purple-900/80 via-purple-900/40 to-transparent",
    glow: "shadow-purple-500/20",
  },
  cyan: {
    bg: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-300",
    overlay: "from-cyan-900/80 via-cyan-900/40 to-transparent",
    glow: "shadow-cyan-500/20",
  },
  pink: {
    bg: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
    text: "text-pink-300",
    overlay: "from-pink-900/80 via-pink-900/40 to-transparent",
    glow: "shadow-pink-500/20",
  },
}

/* ── quick stats ─────────────────────────────────── */
const stats = [
  { label: "Hackathons", value: "10+", icon: Trophy },
  { label: "Years Coding", value: "4+", icon: Code2 },
  { label: "Awards Won", value: "5+", icon: Award },
  { label: "Projects Built", value: "15+", icon: Rocket },
]

/* ══════════════════════════════════════════════════ */
export default function AboutPage() {
  const { about } = siteConfig

  return (
    <main className="relative min-h-screen bg-black text-zinc-200 cursor-none overflow-x-hidden">
      <MetallicBackground />
      <Cursor />
      <NavBar />

      {/* ── HERO SECTION ───────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="inline-block h-1 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium">
                About Me
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Hi, I&apos;m{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Aditya
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              {about.intro}
            </motion.p>

            {/* highlight tenets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-6 space-y-3"
            >
              {[
                { icon: Brain, text: "Building cutting-edge AI agents & intelligent systems", color: "text-purple-400" },
                { icon: Rocket, text: "Innovating with IoT, robotics & mobile tech", color: "text-blue-400" },
                { icon: Heart, text: "Explorer, foodie & lifelong learner", color: "text-pink-400" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3 text-zinc-300">
                  <t.icon className={`h-5 w-5 ${t.color} flex-shrink-0`} />
                  <span className="text-sm">{t.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — profile image with animated glow ring */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

            {/* Animated border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-1 rounded-3xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #a855f7, #ec4899, #3b82f6)",
                opacity: 0.35,
              }}
            />

            <div className="relative w-full aspect-[4/5] max-w-md rounded-3xl overflow-hidden border border-zinc-800/60 shadow-2xl shadow-purple-500/10">
              <Image
                src={about.profileImage}
                alt="Aditya Agarwal"
                fill
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover"
                priority
              />
              {/* Gradient overlay at bottom for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK STATS RIBBON ─────────────────── */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/50 backdrop-blur p-6 text-center hover:border-zinc-700/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <s.icon className="h-6 w-6 mx-auto mb-3 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                <div className="text-3xl font-bold bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-sm text-zinc-400 mt-1">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PASSIONS & HOBBIES — BENTO GRID ───── */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium">
              Beyond the Code
            </span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            My Passions & Hobbies
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Life isn&apos;t all about code — here&apos;s what fuels my creativity and keeps me inspired.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {about.hobbies.map((hobby, index) => {
            const c = colorMap[hobby.color] || colorMap.blue
            const isTall = index === 0 || index === 3

            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-zinc-950/40 backdrop-blur cursor-pointer transition-all duration-500 hover:shadow-2xl ${c.glow} ${
                  isTall ? "sm:row-span-2" : ""
                }`}
                style={{ minHeight: isTall ? "380px" : "240px" }}
              >
                {/* Image */}
                <Image
                  src={hobby.image}
                  alt={hobby.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${c.overlay} opacity-70 group-hover:opacity-90 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <span className="text-3xl mb-2 block drop-shadow-lg">
                      {hobby.emoji}
                    </span>
                    <h3 className={`text-xl font-semibold ${c.text} mb-1`}>
                      {hobby.title}
                    </h3>
                    <p className="text-sm text-zinc-300/90 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {hobby.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── COMMUNITIES ────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium">
              Communities
            </span>
            <Sparkles className="h-5 w-5 text-purple-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Leadership & Organizations
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Building communities, organizing events, and mentoring the next generation of engineers.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {about.communities?.map((community, index) => {
            const isAI = community.name.includes("AI")
            const gradient = isAI
              ? "from-purple-500/15 to-indigo-500/15"
              : "from-blue-500/15 to-cyan-500/15"
            const borderColor = isAI
              ? "border-purple-500/30 hover:border-purple-400/50"
              : "border-blue-500/30 hover:border-blue-400/50"
            const badgeBg = isAI
              ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
              : "bg-blue-500/20 text-blue-300 border-blue-500/30"
            const iconEmoji = isAI ? "🧠" : "🤖"

            return (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className={`relative rounded-2xl border ${borderColor} bg-gradient-to-br ${gradient} backdrop-blur overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-zinc-900/30 h-full`}>
                  {/* Community image */}
                  {community.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={community.image}
                        alt={community.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                    </div>
                  )}

                  <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="text-4xl">{iconEmoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {community.name}
                      </h3>
                      <span className={`inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full border ${badgeBg}`}>
                        {community.role}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {community.highlights.map((highlight, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + hi * 0.1 }}
                        className="flex items-start gap-3 text-sm text-zinc-300"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${isAI ? "from-purple-400 to-indigo-400" : "from-blue-400 to-cyan-400"} mt-2 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── PHILOSOPHY / JOURNEY ───────────────── */}
      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-zinc-800/60 bg-zinc-950/50 backdrop-blur overflow-hidden"
        >
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

          {/* Floating decorations */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 text-blue-400/15"
          >
            <Sparkles className="h-16 w-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute bottom-10 left-10 text-purple-400/15"
          >
            <Target className="h-12 w-12" />
          </motion.div>

          <div className="relative p-8 sm:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block h-1 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium">
                The Journey
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent mb-6">
              My Philosophy
            </h2>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
              I believe technology should be a force for good. From building AI agents that automate
              tedious workflows to designing robotic systems that push physical boundaries, every project I take
              on starts with a simple question: <em className="text-zinc-100 font-medium">&ldquo;Can this make someone&apos;s life meaningfully better?&rdquo;</em>
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Think Deep",
                  desc: "Research-first approach — understanding problems before writing a single line of code.",
                  color: "text-purple-400",
                },
                {
                  icon: Code2,
                  title: "Build Fast",
                  desc: "Rapid prototyping with AI/ML, Flutter, and Python — from idea to demo in hours.",
                  color: "text-blue-400",
                },
                {
                  icon: Rocket,
                  title: "Ship Bold",
                  desc: "Taking projects from hackathons to production, always pushing what's possible.",
                  color: "text-pink-400",
                },
              ].map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="rounded-2xl border border-zinc-800/40 bg-zinc-900/30 p-5 backdrop-blur hover:border-zinc-700/60 transition-all duration-300 group"
                >
                  <p.icon className={`h-8 w-8 ${p.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-semibold text-zinc-100 mb-1">{p.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}