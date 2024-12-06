'use client'

import { useState, useEffect } from 'react'
import { User, X, Code, Book, Lightbulb } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AboutMePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutMePopup({ isOpen, onClose }: AboutMePopupProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 popup-overlay flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20 }}
            className="popup-content rounded-xl shadow-2xl p-8 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center mb-6"
            >
              <User className="text-primary-light mr-3" size={32} />
              <h2 className="text-3xl font-bold">O mně</h2>
            </motion.div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start bg-gray-800/50 rounded-lg p-4"
              >
                <Code className="text-primary-light mr-3 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">
                  Jsem nadšený programátor a tvůrce webových aplikací. Moje cesta v IT
                  začala již na základní škole a od té doby neustále rozvíjím své dovednosti v různých
                  programovacích jazycích a technologiích.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start bg-gray-800/50 rounded-lg p-4"
              >
                <Book className="text-primary-light mr-3 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">
                  Mám zkušenosti s vývojem webových aplikací pomocí moderních frameworků jako je React a Next.js.
                  Také se zajímám o umělou inteligenci a její využití v programování.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start bg-gray-800/50 rounded-lg p-4"
              >
                <Lightbulb className="text-primary-light mr-3 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">
                  Ve volném čase rád experimentuji s novými technologiemi, čtu odborné články a přispívám do
                  open-source projektů. Věřím, že neustálé učení je klíčem k úspěchu v rychle se vyvíjejícím
                  světě technologií.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

