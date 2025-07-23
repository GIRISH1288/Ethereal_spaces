'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] sm:h-[80vh] flex items-center justify-center bg-neutral-100 overflow-hidden px-4">
      {/* Background Image */}
      <Image
        src="/images/hero-1.jpg"
        alt="Cinematic Interior"
        fill
        className="object-cover object-center opacity-80"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-0" />

      {/* Decorative Elements */}
      {/* Hide decorative corners on small screens */}
      <div className="hidden sm:block absolute top-10 left-10 w-24 h-24 border-t-4 border-l-4 border-neutral-800 opacity-30 z-10" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-24 h-24 border-b-4 border-r-4 border-neutral-800 opacity-30 z-10" />

      {/* Text Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide text-neutral-900 drop-shadow-xl leading-tight sm:leading-snug"
        >
          ETHEREAL SPACES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-3 sm:mt-6 text-xs sm:text-base md:text-xl font-light text-neutral-700 tracking-[0.15em] sm:tracking-[0.2em] uppercase"
        >
          Designing Modern & Elegant Interiors
        </motion.p>
      </div>
    </section>
  )
}
