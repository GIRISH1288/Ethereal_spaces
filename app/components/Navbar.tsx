"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
        scrolled ? 'bg-white/70 shadow-lg backdrop-blur-md' : 'bg-white/40 shadow-sm backdrop-blur-md'
      } rounded-2xl px-4 py-2`}
      aria-label="Main navigation"
    >
      {/* Decorative background element */}
      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-20 bg-neutral-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between relative">
        {/* Left links */}
        <div className="hidden md:flex gap-8 flex-1 justify-end">
          {navLinks.slice(0, 2).map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative transition font-medium px-2 py-1
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                hover:text-accent
                ${pathname === path ? 'text-accent after:scale-x-100 after:bg-accent' : 'text-neutral-800'}
              `}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo-main.png"
              alt="Ethereal Spaces Logo"
              width={140}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Right links */}
        <div className="hidden md:flex gap-8 flex-1 justify-start">
          {navLinks.slice(2).map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative transition font-medium px-2 py-1
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                hover:text-accent
                ${pathname === path ? 'text-accent after:scale-x-100 after:bg-accent' : 'text-neutral-800'}
              `}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block h-0.5 bg-neutral-800"></span>
            <span className="block h-0.5 bg-neutral-800"></span>
            <span className="block h-0.5 bg-neutral-800"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden pt-4 text-center">
          <div className="flex flex-col gap-3">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`relative block py-2 transition font-medium
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-2/3 after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                  hover:text-accent
                  ${pathname === path ? 'text-accent after:scale-x-100 after:bg-accent' : 'text-neutral-800'}
                `}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
