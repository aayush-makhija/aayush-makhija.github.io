const experiences = [
  {
    company: 'Invimatic Technologies',
    role: 'Context Engineering Intern',
    dates: 'Feb 2026 - Present',
    description: 'Currently specializing in context engineering and optimizing LLM interactions for robust backend systems.',
  },
  {
    company: 'Celebal Technologies',
    role: 'Node.js Intern',
    dates: 'May 2025 - Jul 2025',
    description: 'Built a flight booking chatbot using Node.js and Microsoft Bot Framework, reducing manual search time by 60%. Integrated Amadeus API for real-time flight data and completed 10+ backend assignments with Express.js.',
  },
  {
    company: 'Invimatic Technologies',
    role: 'Software Intern',
    dates: 'May 2024 - Jul 2024',
    description: 'Developed Golang/Caddy plugins automating 500+ SSL certifications. Created Kong plugins for streamlined API management and gained expertise in DNS servers and Postman.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex flex-col gap-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional Experience</h2>
        <div className="h-1 w-20 bg-accent-vibrant rounded-full" />
      </div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-secondary/50 group">
            <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-xs font-mono font-medium text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {exp.dates}
              </span>
            </div>
            <p className="text-lg font-medium text-slate-300 mt-1">{exp.company}</p>
            <p className="mt-4 text-slate-400 leading-7 max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
