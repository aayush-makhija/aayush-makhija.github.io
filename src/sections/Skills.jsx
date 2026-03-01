const skillGroups = [
  {
    title: 'Programming',
    skills: ['C', 'Python', 'Golang', 'JavaScript', 'HTML/CSS', 'SQL', 'Java'],
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Node.js', 'Express.js', 'npm', 'Git', 'Docker', 'Bootstrap', 'Postman'],
  },
  {
    title: 'Databases',
    skills: ['Postgres', 'MySQL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex flex-col gap-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="p-6 rounded-2xl bg-secondary border border-white/5 hover:border-accent/30 transition-colors group">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-mono text-slate-300 bg-primary/50 rounded-md border border-white/5 group-hover:border-accent/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
