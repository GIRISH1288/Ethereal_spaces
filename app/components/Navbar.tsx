'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}
      aria-label="Main navigation"
    >
      {/* Decorative blurred blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-24 bg-neutral-200/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          scrolled
            ? 'rounded-xl shadow-lg mt-4 mb-4 md:my-4 md:rounded-xl md:w-[95%] md:px-8'
            : ''
        }`}
        style={{ background: 'transparent' }}
      >
        {/* Left nav links */}
        <div className="hidden md:flex gap-8 flex-1 justify-end">
          {navLinks.slice(0, 2).map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative transition font-medium px-2 py-1
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                hover:text-neutral-600
                ${pathname === path ? 'text-neutral-600 after:scale-x-100 after:bg-neutral-400' : 'text-neutral-800'}
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
              width={160}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Right nav links */}
        <div className="hidden md:flex gap-8 flex-1 justify-start">
          {navLinks.slice(2).map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative transition font-medium px-2 py-1
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                hover:text-neutral-600
                ${pathname === path ? 'text-neutral-600 after:scale-x-100 after:bg-neutral-400' : 'text-neutral-800'}
              `}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="block h-0.5 bg-neutral-800 rounded"></span>
            <span className="block h-0.5 bg-neutral-800 rounded"></span>
            <span className="block h-0.5 bg-neutral-800 rounded"></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 bg-white/80 backdrop-blur-md shadow-md rounded-b-xl animate-fadeIn"
        >
          <div className="flex flex-col gap-4 pt-2 text-center">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMenuOpen(false)}
                className={`relative block py-2 transition font-medium
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:w-2/3 after:h-[2px] after:bg-neutral-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100
                  hover:text-neutral-600
                  ${pathname === path ? 'text-neutral-600 after:scale-x-100 after:bg-neutral-400' : 'text-neutral-800'}
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
