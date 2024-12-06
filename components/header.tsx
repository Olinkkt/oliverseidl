'use client'

import { useState } from 'react'
import { Briefcase, User, Mail, Github, Twitter, MessageSquare } from 'lucide-react'
import AboutMePopup from './about-me-popup'
import ContactPopup from './contact-popup'

export default function Header() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <header className="bg-gray-900/50 backdrop-blur-md shadow-lg text-white py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Briefcase className="mr-2 text-primary-light" />
          <h1 className="text-2xl font-bold">Moje Portfolio</h1>
        </div>
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button 
                  onClick={() => setIsAboutMeOpen(true)} 
                  className="flex items-center hover:text-primary-light transition-colors duration-200"
                >
                  <User className="mr-1" size={18} />
                  O mně
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsContactOpen(true)} 
                  className="flex items-center hover:text-primary-light transition-colors duration-200"
                >
                  <Mail className="mr-1" size={18} />
                  Kontakt
                </button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/olinkkt"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/olinkkt"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://discord.com/users/omegha_yt"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
      <AboutMePopup isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  )
}

