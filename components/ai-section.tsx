import { Brain } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AISection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-12 card-hover bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-800 p-8"
    >
      <div className="flex items-center mb-6">
        <Brain className="text-primary-light mr-3" size={32} />
        <h2 className="text-3xl font-bold text-white">Programování s AI</h2>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">
        Umělá inteligence revolucionizuje způsob, jakým programujeme. S pomocí AI můžeme rychleji
        vyvíjet kód, automatizovat rutinní úkoly a objevovat nová, inovativní řešení. AI asistenti
        mohou pomoci s generováním kódu, debugováním a dokonce i s návrhem architektury. Tato
        synergie mezi lidskou kreativitou a strojovou efektivitou otevírá nové horizonty v oblasti
        softwarového vývoje.
      </p>
      <div className="mt-6 flex justify-end">
        <button className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-full transition-colors duration-200">
          Zjistit více
        </button>
      </div>
    </motion.section>
  )
}

