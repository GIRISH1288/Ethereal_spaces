"use client";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
// Remove the import and use a placeholder or make it optional
// import heroImage from "@/assets/hero-image.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      {/* Animated Background Gradient Overlay - moved after image */}
      {/* This overlay is now integrated with the image for better contrast */}
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-[1] top-24 sm:top-28 lg:top-32">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: (i * 0.3) % 2,
            }}
          />
        ))}
      </div>
      
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0 top-24 sm:top-28 lg:top-32"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Your hero image */}
        <Image
          src="/hero-image.jpg"
          alt="Luxury Interior Design"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-light tracking-wider">LUXURY DESIGN</span>
            </div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block"
              >
                Timeless
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="block font-light bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
              >
                Elegance
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-10 sm:mb-12 lg:mb-16"
          >
            <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
              We create sophisticated spaces that transcend trends, crafting environments of enduring beauty and refined luxury that reflect your unique vision.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto bg-white text-black px-8 py-4 font-semibold tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto border-2 border-white/60 text-white px-8 py-4 font-semibold tracking-wide rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
              >
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-light tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-28 sm:top-32 lg:top-36 left-4 sm:left-8 z-[1]">
        <motion.div
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-16 h-[1px] bg-white/40"
        />
      </div>
      
      <div className="absolute top-28 sm:top-32 lg:top-36 right-4 sm:right-8 z-[1]">
        <motion.div
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-16 h-[1px] bg-white/40"
        />
      </div>

      {/* Mobile-Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] sm:bg-[length:100px_100px]" />
      </div>
    </section>
  );
};

export default HeroSection;