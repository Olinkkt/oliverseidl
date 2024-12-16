'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, ChevronDown, ChevronUp, Globe, ExternalLink, Code, Sparkles } from 'lucide-react'
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { AboutMePopup } from './components/about-me-popup'
import { ContactPopup } from './components/contact-popup'
import Image from 'next/image'

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

const frontendTechnologies = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Bootstrap 5', icon: '🅱️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '💨' },
]

const backendTechnologies = [
  { name: 'Node.js', icon: '🟢' },
  { name: 'Git', icon: '📂' },
  { name: 'PostgreSQL', icon: '🍃' },
  { name: 'Python', icon: '🐍' },
]

const courses = [
  { 
    name: 'Techdays',
    issuer: 'SSPŠ',
    date: '2024',
    description: 'Jednodenní technologický workshop kombinující programování mikrokontrolérů Raspberry Pi s tvorbou interaktivních projektů a základy vývoje webových aplikací s využitím moderních technologií.'
  },
  { 
    name: 'AI Mastery',
    issuer: 'SSPŠ',
    date: '2024',
    description: '4 týdenní kurz zaměřený na efektivní využití umělé inteligence v programování. Zahrnoval práci s různými AI nástroji jako V0.dev, Perplexity.ai, Cursor Composer a dalšími a jejich praktické využití při vývoji aplikací. Součástí byla i výuka prompt engineeringu a best practices pro práci s AI.'
  },
  { 
    name: 'Výjezd do Anglie',
    issuer: 'ZŠVV',
    date: '2023',
    description: 'Týdenní jazykový pobyt v Anglii zahrnující ubytování u místních rodin, intenzivní konverzaci v angličtině a poznávání britské kultury. Program obsahoval návštěvy významných míst a praktické využití angličtiny v každodenních situacích.'
  },
  { 
    name: 'English camp',
    issuer: 'ZŠVV',
    date: '2021 - 2024',
    description: '4 denní intenzivní jazykový program v malebném prostředí Malé Skály, kombinující aktivní výuku angličtiny s interaktivními workshopy a outdoorovými aktivitami vedenými v anglickém jazyce. Absolvováno celkem 6× (2021, 2×2022, 2×2023, 2024), což významně přispělo k rozvoji mých jazykových dovedností.'
  }
]

// Upravit jazykové dovednosti s SVG vlajkami
const languageSkills = [
  { 
    name: 'Angličtina', 
    icon: <svg className="w-5 h-5" viewBox="0 0 640 480">
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
    </svg>, 
    level: 'C1 (SCIO)' 
  },
  { 
    name: 'Čeština', 
    icon: <svg className="w-5 h-5" viewBox="0 0 640 480">
      <path fill="#fff" d="M0 0h640v240H0z"/>
      <path fill="#d7141a" d="M0 240h640v240H0z"/>
      <path fill="#11457e" d="M360 240 0 0v480z"/>
    </svg>, 
    level: 'Rodilý mluvčí' 
  },
  { 
    name: 'Němčina', 
    icon: <svg className="w-5 h-5" viewBox="0 0 640 480">
      <path fill="#ffce00" d="M0 320h640v160H0z"/>
      <path d="M0 0h640v160H0z"/>
      <path fill="#d00" d="M0 160h640v160H0z"/>
    </svg>, 
    level: 'A1' 
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
      <header className="sticky top-0 bg-gray-900/90 shadow-lg text-white py-3 sm:py-4 border-b border-gray-800/50 z-50">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Vítejte v mém portfoliu
        </motion.h1>

        {/* Project Section */}
        <div className="mb-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={project.id} 
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative h-full bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
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
                        opacity: expandedProjects[project.id] ? 1 : 0
                      }}
                      transition={{ 
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-4 mb-6">
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-50 z-10" />
                          <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                          
                          <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            className="object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                            priority={project.id === 1}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent z-20">
                            <p className="text-sm text-gray-300">
                              Náhled projektu
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Tlačítko - přidat padding nahoře */}
                    <div className="mt-auto pt-4">
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
              </motion.div>
            ))}
          </section>
        </div>

        {/* Skills & Technologies Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="my-8 sm:my-16 group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors p-4 sm:p-8">
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
                  {frontendTechnologies.map((tech, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      key={tech.name}
                      className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 hover:translate-y-[-2px] transition-all"
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backend & Tools */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-400">Backend & Nástroje</h3>
                <div className="grid grid-cols-2 gap-3">
                  {backendTechnologies.map((tech, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      key={tech.name}
                      className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 hover:translate-y-[-2px] transition-all"
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Přidat jazykové dovednosti */}
              <div className="space-y-4 md:col-span-2">
                <h3 className="text-lg font-semibold text-purple-400">Jazykové Dovednosti</h3>
                <div className="grid grid-cols-2 gap-3">
                  {languageSkills.map((lang, index) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      key={lang.name}
                      className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 hover:translate-y-[-2px] transition-all"
                    >
                      <div className="flex items-center gap-2">
                        {typeof lang.icon === 'string' ? (
                          <span className="text-xs px-1.5 py-0.5 bg-gray-700 rounded text-gray-300">{lang.icon}</span>
                        ) : (
                          lang.icon
                        )}
                        <span className="text-gray-300 text-sm">{lang.name}</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {lang.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifikáty & Kurzy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="my-8 sm:my-16 group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="relative bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors p-4 sm:p-8">
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
                Kurzy & Výjezdy
              </h2>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
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
                </motion.div>
              ))}
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