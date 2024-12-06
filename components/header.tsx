import { Briefcase } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-purple-700 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Briefcase className="mr-2" />
        <h1 className="text-2xl font-bold">Moje Portfolio</h1>
      </div>
    </header>
  )
}

