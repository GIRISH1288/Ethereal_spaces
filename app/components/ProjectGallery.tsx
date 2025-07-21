import ProjectCard, { Project } from './ProjectCard'

export default function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-serif mb-8 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  )
} 