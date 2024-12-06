import { User } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <User className="text-[#5E548E] mr-2" size={24} />
          <h1 className="text-3xl font-bold text-[#5E548E]">O mně</h1>
        </div>
        <p className="text-gray-700 mb-4">
          Vítejte na mé stránce! Jsem nadšený programátor a tvůrce webových aplikací. Moje cesta v IT
          začala již na střední škole a od té doby neustále rozvíjím své dovednosti v různých
          programovacích jazycích a technologiích.
        </p>
        <p className="text-gray-700 mb-4">
          Mám zkušenosti s vývojem webových aplikací pomocí moderních frameworků jako je React a Next.js.
          Také se zajímám o umělou inteligenci a její využití v programování.
        </p>
        <p className="text-gray-700">
          Ve volném čase rád experimentuji s novými technologiemi, čtu odborné články a přispívám do
          open-source projektů. Věřím, že neustálé učení je klíčem k úspěchu v rychle se vyvíjejícím
          světě technologií.
        </p>
      </div>
    </div>
  )
}

