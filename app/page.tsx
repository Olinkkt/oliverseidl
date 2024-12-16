'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp, Globe, ExternalLink, Brain, Sparkles, Code, Mail } from 'lucide-react'
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { AboutMePopup } from './components/about-me-popup'
import { ContactPopup } from './components/contact-popup'
import { fadeInUp } from './animations'
import Image from 'next/image'

const containerVariants = {
  initial: "initial",
  animate: "animate",
  transition: { duration: 0.5, ease: "easeOut" }
}

const projects = [
  {
    id: 1,
    name: 'TDEE Kalkulačka',
    description: 'Responzivní webová aplikace pro výpočet celkového denního energetického výdeje (TDEE). Pomáhá uživatelům lépe porozumět jejich energetickým potřebám pro efektivní řízení váhy.',
    url: 'https://tdee-calculator-ruddy.vercel.app/',
    image: '/images/tdee.png',
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
    name: 'To-Do List',
    description: 'Responzivní aplikace pro správu úkolů s možností nastavení priority. Umožňuje uživatelům efektivně organizovat a sledovat své denní úkoly.',
    url: 'https://to-do-list-beta-lyart-38.vercel.app/',
    image: '/images/to-do.png',
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
  const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({})

  const toggleProject = (id: number) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-xl shadow-lg text-white py-3 sm:py-4 border-b border-gray-800/50 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between">
            {/* Logo a název */}
            <div className="flex items-center gap-3 group">
              <div className="w-10 sm:w-12 h-10 sm:h-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative h-full w-full p-2 sm:p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                  <div className="w-6 sm:w-8 h-6 sm:h-8">
                    <Briefcase className="w-full h-full text-purple-400" />
                  </div>
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-0">
              Portfolio | Oliver Seidl
              </h1>
            </div>

            {/* Navigace */}
            <nav className="w-full sm:w-auto">
              <ul className="flex justify-center sm:justify-end space-x-4 sm:space-x-6">
                <li>
                  <AboutMePopup />
                </li>
                <li>
                  <ContactPopup />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-16 pb-24">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
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
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                  
                  <div className="relative h-full bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="p-4 sm:p-6 h-full flex flex-col">
                      {/* Hlavička karty */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {project.icon}
                          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {project.name}
                          </h3>
                        </div>
                        <button
                          onClick={() => toggleProject(project.id)}
                          className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                        >
                          {expandedProjects[project.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>

                      {/* Popis projektu - fixní výška */}
                      <div className="h-[100px] overflow-auto mb-4 project-description">
                        <p className="text-gray-300 text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Rozbalitelný obsah */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedProjects[project.id] ? 'auto' : 0,
                          opacity: expandedProjects[project.id] ? 1 : 0,
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={false}
                          animate={{ 
                            y: expandedProjects[project.id] ? 0 : -20,
                            opacity: expandedProjects[project.id] ? 1 : 0
                          }}
                          transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                          }}
                          className="mb-6"
                        >
                          <div className="space-y-4">
                            {/* Obrázek projektu */}
                            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover rounded-lg"
                                priority={project.id === 1}
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Tlačítko - vždy na spodku karty */}
                      <div className="mt-auto">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium 
                            hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25
                            active:scale-95 transform"
                        >
                          Přejít do Projektu
                          <ExternalLink className="ml-2" size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Skills & Technologies Section */}
        <motion.div 
          variants={fadeInUp}
          {...containerVariants}
        >
          <div className="my-8 sm:my-16 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="p-4 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8">
                        <Code className="w-full h-full text-purple-400" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Technologie & Dovednosti
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Frontend Technologie</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'HTML', icon: '🌐' },
                        { name: 'CSS', icon: '🎨' },
                        { name: 'JavaScript', icon: '💛' },
                        { name: 'React', icon: '⚛️' },
                        { name: 'Next.js', icon: '▲' },
                        { name: 'Bootstrap 5', icon: '🅱️' },
                        { name: 'TypeScript', icon: '📘' },
                        { name: 'Tailwind CSS', icon: '💨' },
                      ].map((tech) => (
                        <div 
                          key={tech.name}
                          className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend & Tools */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">Backend & Nástroje</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'Node.js', icon: '🟢' },
                        { name: 'Git', icon: '📂' },
                        { name: 'MongoDB', icon: '🍃' },
                        { name: 'Python', icon: '🐍' },
                      ].map((tech) => (
                        <div 
                          key={tech.name}
                          className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifikáty & Kurzy Section */}
        <motion.div 
          variants={fadeInUp}
          {...containerVariants}
        >
          <div className="my-8 sm:my-16 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="p-4 sm:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative h-full w-full p-2.5 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                      <div className="w-8 h-8">
                        <Sparkles className="w-full h-full text-purple-400" />
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Kurzy
                  </h2>
                </div>

                <div className="space-y-3">
                  {[
                    { 
                      name: 'AI Mastery',
                      issuer: 'SSPŠ',
                      date: '2024',
                      description: 'Kurz zaměřený na nauku efektivního programování s AI nástroji při programování a vývoji'
                    },
                    { 
                      name: 'TechDays',
                      issuer: 'SSPŠ',
                      date: '2024',
                      description: 'Kurz zaměřený na seznámení se světem IT: Programování mikrokontrolérů a úvod do vývoje webových stránek'
                    },
                  ].map((course) => (
                    <div 
                      key={course.name}
                      className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          {course.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-sm">{course.issuer}</span>
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            {course.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 bg-gray-900/60 backdrop-blur-xl py-3 sm:py-4 border-t border-gray-800/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-400">© 2024</span>
              <span className="mx-2 text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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