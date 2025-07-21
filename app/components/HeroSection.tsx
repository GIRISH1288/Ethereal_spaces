import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-neutral-100 overflow-hidden">
      <Image
        src="/images/hero-1.jpg"
        alt="Cinematic Interior"
        fill
        className="object-cover object-center opacity-80"
        priority
      />
      <div className="relative z-10 text-center">
        <Image src="/images/logo-mark.png" alt="Logo Mark" width={120} height={120} className="mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wide text-neutral-900 drop-shadow-lg">
          ETHERIAL SPACES
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-sans text-neutral-700 tracking-widest uppercase">
          Designing Modern & Etherial Interiors.
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
    </section>
  )
} 