import { ArrowRight } from 'lucide-react'
import photo from '../assets/images/photo.jpeg'

export default function Hero() {
  return (
    <div id="hero" className="relative isolate pt-14 lg:pt-0 scroll-mt-24">
      <div className="py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Building robust <span className="text-accent">full-stack</span> digital experiences.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Undergraduate Engineering Student at Manipal University Jaipur. 
              Full-stack developer proficient in front-end and back-end web application development, 
              with expertise in designing responsive user interfaces, creating seamless user experiences 
              and implementing robust server-side logic.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-accent-vibrant hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-accent transition-colors">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-2xl bg-secondary shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border border-white/10">
              <img
                src={photo}
                alt="Aayush Makhija"
                className="h-full w-full object-cover object-top transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-64 w-64 rounded-2xl bg-accent/20 blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
