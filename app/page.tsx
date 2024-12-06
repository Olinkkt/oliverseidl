import Header from './components/header'
import ProjectSection from './components/project-section'
import AISection from './components/ai-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProjectSection />
        <AISection />
      </main>
    </div>
  )
}

