import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          &copy; {new Date().getFullYear()} Moje Portfolio. Vytvořeno s 
          <Heart className="mx-1 text-red-500" size={16} /> 
          pro přihlášku na střední školu
        </p>
      </div>
    </footer>
  )
}

