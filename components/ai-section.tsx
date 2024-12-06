import { Brain } from 'lucide-react'

export default function AISection() {
  return (
    <section className="my-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Brain className="text-purple-600 mr-2" />
        <h2 className="text-2xl font-bold text-purple-800">Programování s AI</h2>
      </div>
      <p className="text-gray-700">
        Umělá inteligence revolucionizuje způsob, jakým programujeme. S pomocí AI můžeme rychleji
        vyvíjet kód, automatizovat rutinní úkoly a objevovat nová, inovativní řešení. AI asistenti
        mohou pomoci s generováním kódu, debugováním a dokonce i s návrhem architektury. Tato
        synergie mezi lidskou kreativitou a strojovou efektivitou otevírá nové horizonty v oblasti
        softwarového vývoje.
      </p>
    </section>
  )
}

