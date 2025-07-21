import ProjectGallery from '../components/ProjectGallery'
import type { Project } from '../components/ProjectCard'

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

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-neutral-50">
        <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide text-neutral-900 z-10">Our Projects</h1>
      </section>
      {/* Projects Gallery */}
      <section className="bg-white py-20 px-6 flex-1">
        <ProjectGallery projects={projects} />
      </section>
    </div>
  )
} 