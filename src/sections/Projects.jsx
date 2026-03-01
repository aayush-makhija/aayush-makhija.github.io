import ProjectCard from '../components/ProjectCard'
import chatbotPreview from '../assets/images/chatbot-preview.jpg'

const projects = [
  {
    title: 'Flight Booking Chatbot',
    description: 'An intelligent assistant using Node.js, Express.js, and Microsoft Bot Framework. Integrated Azure CLU for intent recognition and Amadeus API for real-time flight search across 30+ airlines. Features multilingual support and MySQL-backed booking management.',
    githubUrl: 'https://github.com/aayush-makhija',
    image: chatbotPreview,
  },
  {
    title: 'Interactive Journal',
    description: 'A sentiment-aware journaling tool using NLP techniques (TF-IDF, tokenization) and machine learning models (Logistic Regression, Naive Bayes). Achieved 77.8% accuracy in identifying emotional patterns in daily writing.',
    githubUrl: 'https://github.com/aayush-makhija',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'AI-Powered Slack Bot',
    description: 'A Go-based bot integrating Wolfram Alpha and Wit.ai for intelligent, data-driven responses. Processes natural language commands to extract entities and provides precise answers directly in Slack channels.',
    githubUrl: 'https://github.com/aayush-makhija',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex flex-col gap-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <div className="h-1 w-20 bg-accent rounded-full" />
        <p className="text-lg leading-8 text-slate-400 max-w-2xl">
          A selection of my recent work in full-stack development, AI integration, and natural language processing.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
