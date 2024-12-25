'use client'

import { motion } from 'framer-motion'
import { useState, Suspense } from 'react'
import { Briefcase, ChevronDown, ChevronUp, Globe, ExternalLink, Code, Sparkles, Award } from 'lucide-react'
import { AboutMePopup } from './components/about-me-popup'
import { ContactPopup } from './components/contact-popup'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { MobileNav } from './components/mobile-nav'
import { Tooltip } from './components/ui/tooltip'
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, 
  SiBootstrap, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiGit, SiGithub, SiPostgresql, SiPython
} from 'react-icons/si'

// Dynamicky importovat CertificateModal
const CertificateModal = dynamic(() => import('./components/certificate-modal').then(mod => mod.CertificateModal), {
  ssr: false,
  loading: () => null
})

// Přidáme interface pro certifikát
interface Certificate {
  thumbnail: string;
  url?: string;
}

interface Course {
  name: string;
  issuer: string;
  date: string;
  description: string;
  certificate?: Certificate | Certificate[];
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

const frontendTechnologies = [
  { name: 'HTML', icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
  { name: 'CSS', icon: <SiCss3 className="w-5 h-5 text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-[#F7DF1E]" /> },
  { name: 'React', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
  { name: 'Bootstrap 5', icon: <SiBootstrap className="w-5 h-5 text-[#7952B3]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> },
]

const backendTechnologies = [
  { name: 'Node.js', icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
  { name: 'Git', icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
  { name: 'GitHub', icon: <SiGithub className="w-5 h-5 text-white" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
  { name: 'Python', icon: <SiPython className="w-5 h-5 text-[#3776AB]" /> },
]

const courses: Course[] = [
  { 
    name: 'Techdays',
    issuer: 'SSPŠ',
    date: '2024',
    description: 'Jednodenní technologický workshop kombinující programování mikrokontrolérů Raspberry Pi s tvorbou interaktivních projektů a základy vývoje webových aplikací s využitím moderních technologií.',
  },
  { 
    name: 'AI Mastery',
    issuer: 'SSPŠ',
    date: '2024',
    description: '4 týdenní kurz zaměřený na efektivní využití umělé inteligence v programování. Zahrnoval práci s různými AI nástroji jako V0.dev, Perplexity.ai, Cursor Composer a dalšími a jejich praktické využití při vývoji aplikací. Součástí byla i výuka prompt engineeringu a best practices pro práci s AI.',
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
    description: '4 denní intenzivní jazykový program v malebném prostředí Malé Skály, kombinující aktivní výuku angličtiny s interaktivními workshopy a outdoorovými aktivitami vedenými v anglickém jazyce. Absolvováno celkem 6× (2021, 2×2022, 2×2023, 2024), což významně přispělo k rozvoji mých jazykových dovedností.',
    certificate: [
      {
        thumbnail: '/images/thumbnails/english_camp_certificate_01.png'
      },
      {
        thumbnail: '/images/thumbnails/english_camp_certificate_02.png'
      },
      {
        thumbnail: 'missing'
      },
      {
        thumbnail: '/images/thumbnails/english_camp_certificate_04.png'
      },
      {
        thumbnail: '/images/thumbnails/english_camp_certificate_05.png'
      },
      {
        thumbnail: '/images/thumbnails/english_camp_certificate_06.png'
      }
    ]
  }
]

// Upravit jazykové dovednosti s SVG vlajkami
interface LanguageSkill {
  name: string;
  icon: JSX.Element;
  level: string;
  certificate?: Certificate;
}

const languageSkills: LanguageSkill[] = [
  { 
    name: 'Angličtina', 
    icon: <svg className="w-5 h-5" viewBox="0 0 640 480">
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
    </svg>, 
    level: 'C1 (SCIO)',
    certificate: {
      url: '/certificates/scio_english_certificate_c1.pdf',
      thumbnail: '/images/thumbnails/scio_english_certificate_c1.png'
    }
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
  const [selectedCertificate, setSelectedCertificate] = useState<{
    courseName: string;
    certificates: Certificate[];
  } | null>(null);

  const toggleProject = (id: number) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      {/* Header - fixed s původním designem */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 shadow-lg text-white py-3 sm:py-4 border-b border-gray-800/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-12 sm:h-auto">
            {/* Logo a název */}
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative h-full w-full p-2 bg-gray-800/80 rounded-lg group-hover:bg-gray-800/90 transition-colors flex items-center justify-center">
                  <div className="w-6 h-6">
                    <Briefcase className="w-full h-full text-purple-400" />
                  </div>
                </div>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-0">
                Oliver Seidl
              </h1>
            </div>

            {/* Navigace */}
            <nav>
              <ul className="hidden sm:flex justify-end space-x-6">
                <li>
                  <AboutMePopup />
                </li>
                <li>
                  <ContactPopup />
                </li>
              </ul>
              <div className="flex sm:hidden items-center">
                <MobileNav />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow pt-24 pb-20 container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          {/* Hero sekce */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 py-[0.1em]">
              Vítejte v mém portfoliu
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              Nadšenec do programování a moderních technologií
            </p>
          </div>

          {/* Projekty */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full">
            {projects.map((project) => (
              <Suspense key={project.id} fallback={<div className="h-[300px] bg-gray-800/50 rounded-xl animate-pulse" />}>
                <motion.div
                  className="group relative h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
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
                        <Tooltip text={`${expandedProjects[project.id] ? 'Sbalit' : 'Rozbalit'} detail projektu`}>
                          <button
                            onClick={() => toggleProject(project.id)}
                            aria-label={`${expandedProjects[project.id] ? 'Sbalit' : 'Rozbalit'} detail projektu ${project.name}`}
                            className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                          >
                            {expandedProjects[project.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </Tooltip>
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
              </Suspense>
            ))}
          </section>

          {/* Skills sekce */}
          <Suspense fallback={<div className="h-[400px] bg-gray-800/50 rounded-xl animate-pulse" />}>
            <div className="my-8 sm:my-16 group relative">
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
                  <h2 id="tech_skills" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Technologie & Dovednosti
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-400">Frontend</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {frontendTechnologies.map((tech, index) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          key={tech.name}
                          className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 hover:translate-y-[-2px] transition-all"
                        >
                          <div className="flex-shrink-0">
                            {tech.icon}
                          </div>
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Backend & Tools */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-purple-400">Backend & Nástroje</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {backendTechnologies.map((tech, index) => (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          key={tech.name}
                          className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 hover:translate-y-[-2px] transition-all"
                        >
                          <div className="flex-shrink-0">
                            {tech.icon}
                          </div>
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Přidat jazykové dovednosti */}
                  <div className="space-y-4 md:col-span-2">
                    <h4 className="text-lg font-semibold text-purple-400">Jazykové Dovednosti</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                              {lang.level}
                            </span>
                            {lang.certificate && (
                              <Tooltip text="Zobrazit certifikát">
                                <button
                                  onClick={() => setSelectedCertificate({
                                    courseName: `${lang.name} - ${lang.level}`,
                                    certificates: [lang.certificate as Certificate]
                                  })}
                                  aria-label={`Zobrazit certifikát pro ${lang.name}`}
                                  className="p-1.5 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                                >
                                  <Award size={16} />
                                </button>
                              </Tooltip>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>

          {/* Certifikáty & Kurzy Section */}
          <Suspense fallback={<div className="h-[400px] bg-gray-800/50 rounded-xl animate-pulse" />}>
            <div className="my-8 sm:my-16 group relative">
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
                  <h2 id="courses_excursions" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
                          {course.certificate && (
                            <Tooltip text="Zobrazit certifikát">
                              <button
                                onClick={() => setSelectedCertificate({
                                  courseName: course.name,
                                  certificates: Array.isArray(course.certificate) 
                                    ? course.certificate 
                                    : course.certificate 
                                    ? [course.certificate]
                                    : []
                                })}
                                aria-label={`Zobrazit certifikát pro ${course.name}`}
                                className="p-1.5 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
                              >
                                <Award size={16} />
                              </button>
                            </Tooltip>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {course.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Suspense>

          {/* Modal pro certifikát */}
          {selectedCertificate && (
            <CertificateModal
              isOpen={!!selectedCertificate}
              onClose={() => setSelectedCertificate(null)}
              certificates={selectedCertificate.certificates}
              courseName={selectedCertificate.courseName}
            />
          )}
        </motion.div>
      </main>

      {/* Footer - fixed na spodku */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-xl py-3 sm:py-4 border-t border-gray-800/20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-center items-center">
            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-400">© 2024</span>
              <span className="mx-2 text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Oliver Seidl
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}