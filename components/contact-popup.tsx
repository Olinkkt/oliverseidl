import { Mail, Phone, Instagram, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full relative overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold text-[#5E548E] mb-6">Kontakt</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mr-4">
              <Instagram className="text-white" size={24} />
            </div>
            <a href="https://www.instagram.com/olinkkt" target="_blank" rel="noopener noreferrer" className="text-[#5E548E] hover:text-[#BE95C4] transition-colors duration-200">
              @olinkkt
            </a>
          </div>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full mr-4">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <a href="mailto:seidl.oliver@icloud.com" className="text-[#5E548E] hover:text-[#BE95C4] transition-colors duration-200">seidl.oliver@icloud.com</a>
              <br />
              <a href="mailto:oliver.seidl@zs-zbraslav.cz" className="text-[#5E548E] hover:text-[#BE95C4] transition-colors duration-200">oliver.seidl@zs-zbraslav.cz</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-full mr-4">
              <Phone className="text-white" size={24} />
            </div>
            <a href="tel:+420734648919" className="text-[#5E548E] hover:text-[#BE95C4] transition-colors duration-200">+420 734 648 919</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

