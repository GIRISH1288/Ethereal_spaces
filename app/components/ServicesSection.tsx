export default function ServicesSection() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-serif mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition">
          <h3 className="font-serif text-lg mb-2">Residential Design</h3>
          <p className="text-neutral-600">Bespoke interiors for homes, apartments, and villas.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition">
          <h3 className="font-serif text-lg mb-2">Commercial Spaces</h3>
          <p className="text-neutral-600">Elegant solutions for offices, retail, and hospitality.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition">
          <h3 className="font-serif text-lg mb-2">Consultation</h3>
          <p className="text-neutral-600">Expert advice on spatial planning and aesthetics.</p>
        </div>
      </div>
    </section>
  )
} 