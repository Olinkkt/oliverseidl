'use client'

import { useState } from 'react'
import { Modal } from './ui/modal'
import { Mail } from 'lucide-react'
import { FaInstagram, FaGithub, FaXTwitter, FaFacebook } from 'react-icons/fa6'

interface ContactPopupProps {
  isMobile?: boolean
}

export function ContactPopup({ isMobile = false }: ContactPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    { 
      type: 'Email',
      value: 'seidl.oliver@icloud.com',
      icon: <Mail className="w-5 h-5" />,
      link: 'mailto:seidl.oliver@icloud.com'
    },
    { 
      type: 'Instagram',
      value: 'olinkkt',
      icon: <FaInstagram className="w-5 h-5" />,
      link: 'https://instagram.com/olinkkt'
    },
    { 
      type: 'GitHub',
      value: 'Olinkkt',
      icon: <FaGithub className="w-5 h-5" />,
      link: 'https://github.com/Olinkkt'
    },
    { 
      type: 'Twitter',
      value: 'olinkkt',
      icon: <FaXTwitter className="w-5 h-5" />,
      link: 'https://x.com/olinkkt'
    },
    { 
      type: 'Facebook',
      value: 'Oliver Seidl',
      icon: <FaFacebook className="w-5 h-5" />,
      link: 'https://facebook.com/profile.php?id=100074304675281'
    }
  ]

  return (
    <>
      <a 
        onClick={() => setIsOpen(true)}
        className={`flex items-center px-4 py-2 rounded-lg ${
          isMobile 
            ? "hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300" 
            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        } cursor-pointer`}
      >
        <Mail className="mr-2" size={18} />
        Kontakt
      </a>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Kontaktujte mě">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.type}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 group-hover:bg-purple-500/10 transition-colors mb-2">
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  {contact.icon}
                </div>
              </div>
              <h4 className="text-white text-sm font-medium mb-1">{contact.type}</h4>
              <p className="text-gray-400 text-xs">{contact.value}</p>
            </a>
          ))}
        </div>
      </Modal>
    </>
  )
}

