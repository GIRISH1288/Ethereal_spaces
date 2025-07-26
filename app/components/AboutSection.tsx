import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Image
          src="/images/3D image 01.jpg"
          alt="Our Studio"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-serif mb-4">About Us</h2>
        <p className="text-lg text-neutral-700">
          At Ethereal Spaces, we blend timeless elegance with modern minimalism to create interiors that inspire and endure. Our philosophy is rooted in redefining luxury through simplicity, attention to detail, and a passion for spatial harmony.
        </p>
      </div>
    </section>
  )
} 