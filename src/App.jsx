import Header from './components/Header'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import CurrentCommit from './components/CurrentCommit'
import BackgroundBlobs from './components/BackgroundBlobs'
import useSectionAnimation from './hooks/useSectionAnimation'

function App() {
  useSectionAnimation()

  return (
    <div className="min-h-screen bg-primary">
      <BackgroundBlobs />
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="space-y-24 sm:space-y-32">
          <section className="reveal">
            <Hero />
          </section>
          <section className="reveal">
            <Experience />
          </section>
          <section className="reveal">
            <Projects />
          </section>
          <section className="reveal">
            <CurrentCommit />
          </section>
          <section className="reveal">
            <Skills />
          </section>
          <section className="reveal">
            <Contact />
          </section>
        </div>
      </main>
      <footer className="py-12 border-t border-secondary/50 text-center text-slate-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS v4.
      </footer>
    </div>
  )
}

export default App
