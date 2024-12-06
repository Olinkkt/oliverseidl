'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp, Globe, ExternalLink, Brain, Sparkles, Code } from 'lucide-react'
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { AboutMePopup } from './components/about-me-popup'
import { ContactPopup } from './components/contact-popup'
import { fadeInUp } from './animations'

const containerVariants = {
  initial: "initial",
  animate: "animate",
  transition: { duration: 0.5, ease: "easeOut" }
}

const projects = [
  {
    id: 1,
    name: 'Webová aplikace',
    description: 'Responzivní webová aplikace vytvořená pomocí React a Next.js',
    url: 'https://example.com/project1',
    icon: <div className="w-12 h-12 relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
        <div className="w-8 h-8">
          <Globe className="w-full h-full text-purple-400" />
        </div>
      </div>
    </div>
  },
  {
    id: 2,
    name: 'Mobilní aplikace',
    description: 'Mobilní aplikace pro Android a iOS vyvinutá v React Native',
    url: 'https://example.com/project2',
    icon: <div className="w-12 h-12 relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
      <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
        <div className="w-8 h-8">
          <Code className="w-full h-full text-purple-400" />
        </div>
      </div>
    </div>
  }
]

export default function Home() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({})

  const toggleOpen = (id: number) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-xl shadow-lg text-white py-4 border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                <div className="w-8 h-8">
                  <Briefcase className="w-full h-full text-purple-400" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-0">
              Moje Portfolio
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <AboutMePopup />
              </li>
              <li>
                <ContactPopup />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-28 pb-24">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          variants={fadeInUp}
          {...containerVariants}
        >
          Vítejte v mém portfoliu
        </motion.h1>

        {/* Project Section */}
        <motion.div 
          variants={fadeInUp}
          {...containerVariants}
        >
          <section className="my-16">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  
                  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {project.icon}
                          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center h-12">
                            {project.name}
                          </h3>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <button
                            onClick={() => toggleOpen(project.id)}
                            className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                          >
                            {openStates[project.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                      {openStates[project.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-6 will-change-transform relative rounded-lg overflow-hidden"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>
                          <iframe 
                            src={project.url} 
                            className="relative w-full h-96 rounded-lg border border-purple-500/20"
                            title={project.name}
                            loading="lazy"
                          />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* AI Section */}
        <motion.div 
          variants={fadeInUp}
          {...containerVariants}
        >
          <div className="my-16 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8">
                        <Brain className="w-full h-full text-purple-400" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-0">
                    Programování s AI
                    <Sparkles className="inline-block w-5 h-5 ml-2 text-yellow-400 animate-pulse" />
                  </h2>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Umělá inteligence revolucionizuje způsob, jakým programujeme. S pomocí AI můžeme rychleji
                  vyvíjet kód, automatizovat rutinní úkoly a objevovat nová, inovativní řešení. AI asistenti
                  mohou pomoci s generováním kódu, debugováním a dokonce i s návrhem architektury.
                </p>
                
                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium 
                    hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25
                    active:scale-95 transform">
                    Zjistit více
                  </button>
                  <button className="px-6 py-2.5 border border-purple-500/30 text-purple-400 rounded-lg font-medium
                    hover:bg-purple-500/10 transition-all duration-300
                    active:scale-95 transform">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-gray-900/60 backdrop-blur-xl py-4 border-t border-gray-800/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-sm text-gray-400">© 2024</span>
              <span className="mx-2 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Oliver Seidl
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Olinkkt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <FaGithub size={18} className="relative text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/olinkkt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <FaXTwitter size={18} className="relative text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://discord.com/users/omegha_yt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <FaDiscord size={18} className="relative text-gray-400 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}