import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react'

const navigation = [
  { name: 'About', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="font-bold text-2xl tracking-tighter text-white">
            AM<span className="text-accent">.</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium leading-6 text-slate-300 hover:text-accent transition-all hover:tracking-widest">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-5">
          <a href="https://github.com/aayush-makhija" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aayush-makhija-80a641253/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </nav>
      
      {/* Full-screen Mobile menu */}
      <div className={`fixed inset-0 z-[100] bg-primary transition-all duration-500 ease-in-out lg:hidden ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="font-bold text-2xl tracking-tighter text-white">
              AM<span className="text-accent">.</span>
            </a>
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-y-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-4xl font-bold text-white hover:text-accent transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex justify-center gap-x-8 py-10">
            <a href="https://github.com/aayush-makhija" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/aayush-makhija-80a641253/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/aayush_makhija/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
