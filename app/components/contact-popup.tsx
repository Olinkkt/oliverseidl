'use client'

import { useState } from 'react'
import { Modal } from './ui/modal'
import { Mail, Send } from 'lucide-react'

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)

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
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Vaše jméno
            </label>
            <input
              type="text"
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm"
              placeholder="Jan Novák"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm"
              placeholder="jan@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Zpráva
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm resize-none"
              placeholder="Vaše zpráva..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm
              hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25
              active:scale-95 transform flex items-center justify-center gap-2"
          >
            <Send size={16} />
            Odeslat zprávu
          </button>
        </form>
      </Modal>
    </>
  )
}

