'use client'

import { useState, FormEvent } from 'react'
import { Modal } from './ui/modal'
import { Mail, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await emailjs.send(
        'service_q27irnx', // Nahraďte svým Service ID z EmailJS
        'template_gfhlvsd', // Nahraďte svým Template ID z EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Oliver Seidl', // Vaše jméno
          reply_to: formData.email,
        },
        'mYQ4hSwnYgReRF3IN' // Nahraďte svým Public Key z EmailJS
      )

      // Vyčistit formulář
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Zavřít modal
      setIsOpen(false)
      
      // Zobrazit úspěšnou zprávu
      toast.success('Zpráva byla úspěšně odeslána!')
      
    } catch (error) {
      console.error('Chyba při odesílání:', error)
      toast.error('Došlo k chybě při odesílání zprávy. Prosím zkuste to znovu.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <a 
        onClick={() => setIsOpen(true)}
        className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer"
      >
        <Mail className="mr-2" size={18} />
        Kontakt
      </a>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Kontaktujte mě">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Vaše jméno
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm"
              placeholder="Jan Novák"
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm"
              placeholder="jan@example.com"
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Zpráva
            </label>
            <textarea
              rows={3}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm resize-none"
              placeholder="Vaše zpráva..."
              disabled={isLoading}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm
              hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25
              active:scale-95 transform flex items-center justify-center gap-2
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} className={isLoading ? 'animate-spin' : ''} />
            {isLoading ? 'Odesílání...' : 'Odeslat zprávu'}
          </button>
        </form>
      </Modal>
    </>
  )
}
