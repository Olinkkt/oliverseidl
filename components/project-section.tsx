'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Code, Globe } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Webová aplikace',
    description: 'Responzivní webová aplikace vytvořená pomocí React a Next.js',
    url: 'https://example.com/project1',
    icon: <Globe className="w-6 h-6 text-primary-light" />
  },
  {
    id: 2,
    name: 'Mobilní aplikace',
    description: 'Mobilní aplikace pro Android a iOS vyvinutá v React Native',
    url: 'https://example.com/project2',
    icon: <Code className="w-6 h-6 text-primary-light" />
  }
]

export default function ProjectSection() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({})

  const toggleOpen = (id: number) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="my-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Moje Projekty
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-hover bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {project.icon}
                  <h3 className="text-xl font-semibold text-white ml-2">{project.name}</h3>
                </div>
                <button
                  onClick={() => toggleOpen(project.id)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {openStates[project.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <AnimatePresence>
                {openStates[project.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe 
                      src={project.url} 
                      className="w-full h-96 rounded-lg border border-gray-700"
                      title={project.name}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

