import Link from 'next/link'
import Image from 'next/image'

export type Project = {
  _id: string;
  title: string;
  images?: string[];
  location?: string;
  year?: number;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project._id}`}>
      <div className="group rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Image
          src={project.images?.[0] || '/images/project-placeholder.jpg'}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-56"
        />
        <div className="p-4">
          <h3 className="font-serif text-xl mb-2">{project.title}</h3>
          <p className="text-neutral-600 text-sm">{project.location} &middot; {project.year}</p>
        </div>
      </div>
    </Link>
  )
} 