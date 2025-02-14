'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AboutMePopup } from './about-me-popup'
import { ContactPopup } from './contact-popup'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 min-h-screen w-64 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 p-6 z-50 overflow-y-auto"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col items-end space-y-4">
                <div className="mobile-nav-item w-full flex justify-end">
                  <AboutMePopup />
                </div>
                <div className="mobile-nav-item w-full flex justify-end">
                  <ContactPopup isMobile={true} />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 