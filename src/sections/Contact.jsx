import { FileText, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/aayush-makhija', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aayush-makhija-80a641253/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/aayush_makhija/',
    icon: Instagram,
  },
];

export default function Contact() {
  return (
    <div id='contact' className='py-24 sm:py-32 scroll-mt-24'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Get in Touch
        </h2>
        <div className='h-1 w-20 bg-accent mx-auto mt-4 rounded-full' />
        <p className='mt-6 text-lg leading-8 text-slate-400'>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='flex flex-col items-center gap-y-16'>
          {/* Social Icons */}
          <div className='flex gap-x-10'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-400 hover:text-accent transition-all hover:scale-110'
                aria-label={link.name}
              >
                <link.icon className='h-10 w-10' />
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <div className='relative group'>
            <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-accent-vibrant opacity-25 blur transition duration-500 group-hover:opacity-75' />
            <a
              href='/resume.pdf'
              download
              className='relative flex items-center gap-3 rounded-full bg-secondary px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all border border-white/5 hover:bg-slate-800'
            >
              <FileText className='h-6 w-6 text-accent' />
              Download My Resume
            </a>
          </div>

          {/* Direct Email */}
          <div className='text-center'>
            <p className='text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-500 mb-4'>
              Or reach me directly at
            </p>
            <a
              href='mailto:aayush.makhija@gmail.com'
              className='text-2xl sm:text-3xl font-bold text-white hover:text-accent transition-colors break-all'
            >
              aayush.makhija@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
