'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop s blur efektem */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl border border-gray-800/50 shadow-xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Content */}
              <div>
                {children}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  )
} 