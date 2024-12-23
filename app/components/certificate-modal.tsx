'use client'

import { Modal } from './ui/modal'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: {
    url?: string;
    thumbnail: string;
  }[];
  courseName: string;
}

export function CertificateModal({ isOpen, onClose, certificates, courseName }: CertificateModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCertificate = certificates[currentIndex];
  const isEnglishCamp = courseName === 'English camp';
  const hasMultipleCertificates = isEnglishCamp ? true : certificates.length > 1;
  const totalCertificates = isEnglishCamp ? 6 : certificates.length;
  
  const next = () => setCurrentIndex((prev) => 
    prev === certificates.length - 1 ? prev : prev + 1
  );
  
  const prev = () => setCurrentIndex((prev) => 
    prev === 0 ? prev : prev - 1
  );

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={`${courseName}${hasMultipleCertificates ? ` (${currentIndex + 1}/${totalCertificates})` : ''}`}
    >
      <div className="relative aspect-[0.707/1] w-full rounded-lg overflow-hidden bg-gray-800/50">
        {currentCertificate.thumbnail === 'missing' ? (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
            Certifikát ztracen!
          </div>
        ) : (
          <Image
            src={currentCertificate.thumbnail}
            alt={`Certifikát ${courseName}`}
            fill
            className="object-contain"
          />
        )}

        {/* Navigační tlačítka */}
        {hasMultipleCertificates && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-[60]">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-gray-900/80 text-purple-400 hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Předchozí certifikát"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === certificates.length - 1}
              className="p-2 rounded-full bg-gray-900/80 text-purple-400 hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Další certifikát"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        {currentCertificate.url && (
          <a 
            href={currentCertificate.url}
            target="_blank"
            rel="noopener noreferrer" 
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-purple-500/90 rounded-lg hover:bg-purple-600/90 transition-colors z-[70]"
            aria-label="Stáhnout certifikát"
          >
            <Download size={18} />
            Stáhnout PDF
          </a>
        )}
      </div>
    </Modal>
  )
} 