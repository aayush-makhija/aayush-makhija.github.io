import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-secondary border border-white/5 transition-all duration-500 hover:border-accent/50 hover:shadow-[0_0_30px_-10px_rgba(56,189,248,0.3)] hover:-translate-y-2">
      <div className="aspect-video overflow-hidden bg-slate-800">
        <img
          src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
      </div>
      <div className="flex flex-1 flex-col p-6 relative">
        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <div className="mt-6 flex items-center gap-x-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-wider"
          >
            <Github className="h-4 w-4" />
            Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-wider"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
