import { GitBranch, GraduationCap, MapPin } from 'lucide-react'

export default function CurrentCommit() {
  return (
    <section className="scroll-mt-24">
      <div className="rounded-3xl bg-secondary border border-white/5 p-8 sm:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <GitBranch size={120} />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-sm font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-[1px] bg-accent" />
                Education
              </h2>
              <div className="flex items-start gap-4 mt-2">
                <div className="mt-1 p-2 rounded-lg bg-primary/50 text-accent border border-accent/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Manipal University Jaipur</h3>
                  <p className="text-slate-400 mt-1">B.Tech in Computer and Communication Engineering</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                    <MapPin size={14} />
                    Jaipur, Rajasthan
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-sm font-mono font-bold text-accent-vibrant uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-[1px] bg-accent-vibrant" />
                Current Status
              </h2>
              <div className="flex items-start gap-4 mt-2">
                <div className="mt-1 p-2 rounded-lg bg-primary/50 text-accent-vibrant border border-accent-vibrant/20">
                  <GitBranch size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Context Engineering Intern</h3>
                  <p className="text-slate-400 mt-1">Invimatic Technologies</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-green-400 font-mono uppercase tracking-tighter">
                      Active Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
