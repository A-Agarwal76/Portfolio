"use client"

import { siteConfig } from "@/lib/site-config"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlowCard } from "./glow-card"
import { Users, Building2, Calendar, MapPin, Award, Target } from 'lucide-react'

export function Clubs() {
  const clubs = siteConfig.clubs

  const getClubIcon = (name: string) => {
    if (name.includes("TEDx")) return Users
    if (name.includes("Robotics")) return Building2
    if (name.includes("AI")) return Award
    return Target
  }

  const getClubColor = (name: string) => {
    if (name.includes("TEDx")) return "from-red-500/20 to-pink-500/20 border-red-500/30 text-red-300"
    if (name.includes("Robotics")) return "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300"
    if (name.includes("AI")) return "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300"
    return "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300"
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4"
        >
          Leadership & Organizations
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto"
        >
          Leading teams and contributing to academic and technical communities
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {clubs.map((c, index) => {
          const Icon = getClubIcon(c.name)
          const colorClasses = getClubColor(c.name)
          
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <GlowCard>
                <Card className="h-full border border-zinc-800/60 bg-gradient-to-br from-zinc-950/60 to-zinc-900/60 backdrop-blur hover:border-zinc-700/60 hover:shadow-xl hover:shadow-zinc-900/20 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Club icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses} border`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      
                      {/* Role badge */}
                      <Badge className={`bg-gradient-to-r ${colorClasses} border text-xs font-medium px-3 py-1`}>
                        {c.role}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl text-zinc-100 mb-2 group-hover:text-white transition-colors">
                      {c.name}
                    </CardTitle>
                    
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{c.since}</span>
                      </div>
                      {c.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{c.location}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      {c.posts?.map((p, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                          className="flex items-start gap-3 text-sm text-zinc-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 flex-shrink-0" />
                          <span>{p}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </GlowCard>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
