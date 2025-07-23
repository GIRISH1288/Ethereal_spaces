import InquiryForm from '../components/InquiryForm'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-neutral-50 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wide text-neutral-900 z-10 text-center">
          Contact Us
        </h1>
      </section>

      {/* Contact Info & Form */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 md:py-20 md:px-6 flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-accent text-2xl" />
            <span className="text-neutral-700 text-base sm:text-lg">123 Luxury Ave, New York, NY</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-accent text-2xl" />
            <span className="text-neutral-700 text-base sm:text-lg">(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-2xl" />
            <span className="text-neutral-700 text-base sm:text-lg">info@etherealspaces.com</span>
          </div>

          {/* Responsive map container */}
          <div className="mt-8 rounded-lg overflow-hidden shadow relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
