'use client'

import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Inicializace EmailJS
  useEffect(() => {
    emailjs.init('mYQ4hSwnYgReRF3IN')
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_q27irnx',
        'template_gfhlvsd', // Opraveno - odstraněno "Y" z začátku
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Oliver Seidl',
        },
        'mYQ4hSwnYgReRF3IN'
      )

      toast.success('Zpráva byla úspěšně odeslána!')
      setFormData({ name: '', email: '', message: '' })
      setIsOpen(false)
    } catch (error) {
      console.error('Error:', error)
      toast.error('Nepodařilo se odeslat zprávu. Zkuste to prosím později.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="fixed bottom-[72px] right-6 z-50 flex items-end">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`mr-3 w-96 bg-gray-900 rounded-lg border border-gray-800 
          shadow-lg ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="p-6">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Napište mi
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5">Vaše jméno</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jan Novák"
                className="w-full px-4 py-2.5 bg-gray-800 rounded-lg border border-gray-700 
                  focus:border-purple-500/50 focus:outline-none text-gray-200 text-base"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">Váš email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jan@example.com"
                className="w-full px-4 py-2.5 bg-gray-800 rounded-lg border border-gray-700 
                  focus:border-purple-500/50 focus:outline-none text-gray-200 text-base"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1.5">Vaše zpráva</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Napište mi zprávu..."
                rows={5}
                className="w-full px-4 py-2.5 bg-gray-800 rounded-lg border border-gray-700 
                  focus:border-purple-500/50 focus:outline-none text-gray-200 text-base resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg 
                hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-base font-medium
                shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Odesílám...' : 'Odeslat zprávu'}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Tlačítko */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gray-900/90 text-gray-200 rounded-full 
          hover:bg-gray-800 border border-gray-800/50 hover:border-purple-500/30 
          transition-all duration-300 backdrop-blur-sm shadow-lg"
        aria-label={isOpen ? "Zavřít kontaktní formulář" : "Otevřít kontaktní formulář"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X size={24} className="text-purple-400" />
          ) : (
            <MessageCircle size={24} className="text-purple-400" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
} 