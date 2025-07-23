import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <Image
          src="/images/logo-main.png"
          alt="Ethereal Spaces Logo"
          width={260}
          height={90}
          className="mx-auto z-10 relative"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-neutral-900 mb-4 text-center">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-2xl text-center">
            Elegance Redefined, Spaces Reimagined
          </p>
        </div>
      </section>

      {/* Story / Vision Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif mb-8 text-center">Our Story</h2>
        <p className="text-base sm:text-lg md:text-xl text-neutral-700 leading-relaxed text-center max-w-3xl mx-auto">
          Founded on a passion for timeless design and modern luxury, Ethereal Spaces is dedicated to transforming interiors into works of art. Our philosophy is rooted in simplicity, attention to detail, and a deep appreciation for spatial harmony. We believe that every space should evoke a sense of calm, beauty, and inspiration.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-serif mb-12 text-center">Meet the Team</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-start">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/team-1.jpg"
              alt="Alexandra Grey, Founder & Creative Director"
              width={160}
              height={160}
              className="rounded-full grayscale shadow-lg mb-4 object-cover"
              sizes="(max-width: 768px) 100vw, 160px"
            />
            <h3 className="font-serif text-xl mb-1">Alexandra Grey</h3>
            <p className="text-neutral-500 mb-2">Founder & Creative Director</p>
            <p className="text-neutral-600 text-sm max-w-xs">
              Alexandra brings over 15 years of experience in luxury interior design, blending classic elegance with modern minimalism.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/team-2.jpg"
              alt="Michael Stone, Co-Founder & Lead Architect"
              width={160}
              height={160}
              className="rounded-full grayscale shadow-lg mb-4 object-cover"
              sizes="(max-width: 768px) 100vw, 160px"
            />
            <h3 className="font-serif text-xl mb-1">Michael Stone</h3>
            <p className="text-neutral-500 mb-2">Co-Founder & Lead Architect</p>
            <p className="text-neutral-600 text-sm max-w-xs">
              Michael’s vision and expertise in spatial planning ensure every project is both functional and breathtaking.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/team-3.jpg"
              alt="Sophie Lin, Senior Designer"
              width={160}
              height={160}
              className="rounded-full grayscale shadow-lg mb-4 object-cover"
              sizes="(max-width: 768px) 100vw, 160px"
            />
            <h3 className="font-serif text-xl mb-1">Sophie Lin</h3>
            <p className="text-neutral-500 mb-2">Senior Designer</p>
            <p className="text-neutral-600 text-sm max-w-xs">
              Sophie’s refined taste and attention to detail bring a unique touch to every Ethereal Spaces project.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
