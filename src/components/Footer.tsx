'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Twitter } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:info@9architects.net",
      label: "Email"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/919447718390",
      label: "WhatsApp"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter"
    }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="relative bg-foreground/90 backdrop-blur-md">
        {/* Architectural Texture Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              {/* CTA Section */}
              <div className="text-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-background mb-6 tracking-[0.05em]">
                  Schedule a Free Consultation
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(214, 167, 77, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-accent text-foreground font-semibold text-sm uppercase tracking-[0.15em] hover:bg-accent/90 transition-all duration-300 shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-8 py-8">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      color: "#D6A74D",
                      transition: { duration: 0.2 }
                    }}
                    className="text-background/80 hover:text-accent transition-colors duration-300"
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              {/* Logo Scroll Animation */}
              <div className="relative py-12 overflow-hidden">
                <motion.div
                  className="flex space-x-12 whitespace-nowrap"
                  animate={{
                    x: [0, -1920] // Move left by the total width of one repetition
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 20,
                      ease: "linear",
                    },
                  }}
                >
                  {/* First set */}
                  {['9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • '].map((text, index) => (
                    <span
                      key={`first-${index}`}
                      className="text-2xl md:text-3xl font-heading font-bold text-background/30 uppercase tracking-[0.1em]"
                    >
                      {text}
                    </span>
                  ))}
                  {/* Second set for seamless loop */}
                  {['9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • ', '9ARCHITECTS • '].map((text, index) => (
                    <span
                      key={`second-${index}`}
                      className="text-2xl md:text-3xl font-heading font-bold text-background/30 uppercase tracking-[0.1em]"
                    >
                      {text}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Divider */}
              <div className="border-t border-background/20" />

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center py-8"
              >
                <p className="text-background/60 text-xs md:text-sm font-sans uppercase tracking-[0.2em]">
                  9ARCHITECTS © 2025 — ALL RIGHTS RESERVED
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional Background Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
    </footer>
  )
}