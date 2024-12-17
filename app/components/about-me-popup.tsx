'use client'

import { useState } from 'react'
import { Modal } from './ui/modal'
import { User, Code, Coffee, Heart } from 'lucide-react'

export function AboutMePopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <a 
        onClick={() => setIsOpen(true)}
        className="flex items-center whitespace-nowrap px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 cursor-pointer"
      >
        <User className="mr-2" size={18} />
        O mně
      </a>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="O mně">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-800/50 rounded-lg">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Vývojář</h3>
              <p className="text-sm text-gray-300">Specializuji se na vývoj moderních webových aplikací s využitím nejnovějších technologií.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-800/50 rounded-lg">
              <Coffee className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Nadšenec</h3>
              <p className="text-sm text-gray-300">Neustále se učím nové technologie a sleduji nejnovější trendy v oblasti vývoje.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-800/50 rounded-lg">
              <Heart className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Vášeň pro kvalitu</h3>
              <p className="text-sm text-gray-300">Kladu důraz na čistý kód, uživatelskou přívětivost a moderní design.</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

