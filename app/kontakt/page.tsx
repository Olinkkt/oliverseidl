import { Mail, Phone, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-[#5E548E] mb-6">Kontakt</h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <Instagram className="text-[#5E548E] mr-2" size={24} />
            <a href="https://www.instagram.com/olinkkt" target="_blank" rel="noopener noreferrer" className="text-[#5E548E] hover:underline">
              @olinkkt
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="text-[#5E548E] mr-2" size={24} />
            <a href="mailto:oliver@seidltech.eu" className="text-[#5E548E] hover:underline">
              oliver@seidltech.cz
            </a>
          </div>
          <div className="flex items-center">
            <Phone className="text-[#5E548E] mr-2" size={24} />
            <a href="tel:+420734648919" className="text-[#5E548E] hover:underline">+420 734 648 919</a>
          </div>
        </div>
      </div>
    </div>
  )
}

