import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectGallery from './components/ProjectGallery'
import ServicesSection from './components/ServicesSection'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'
import type { Project } from './components/ProjectCard'

// Placeholder project data (replace with API fetch later)
const projects: Project[] = [
  {
    _id: '1',
    title: 'Modern Living Room',
    images: ['/images/project-1.jpg'],
    location: 'New York',
    year: 2023,
  },
  {
    _id: '2',
    title: 'Luxury Office',
    images: ['/images/project-2.jpg'],
    location: 'London',
    year: 2022,
  },
  {
    _id: '3',
    title: 'Minimalist Apartment',
    images: ['/images/project-3.jpg'],
    location: 'Paris',
    year: 2024,
  },
]

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-0">
        <HeroSection />
        <section className="bg-white">
          <AboutSection />
        </section>
        <section className="bg-neutral-50">
          <ProjectGallery projects={projects} />
        </section>
        <section className="bg-white">
          <ServicesSection />
        </section>
        <section className="bg-neutral-50 pb-20">
          <InquiryForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
