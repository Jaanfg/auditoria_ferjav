import { Bot, Calculator, CheckCircle } from 'lucide-react'

function Prompts() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-purple-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Bot className="text-purple-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Bitácora de Uso de IA
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-4">
            <Calculator className="text-purple-500" size={20} />
            1. Uso de la Calculadora CVSS 3.1
          </h3>
          
          <div className="space-y-4">
            <div>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-semibold mb-3 border border-purple-200">
                Herramienta: Google Gemini
              </span>
              <p className="text-sm">
                <strong className="text-slate-800 block mb-1">Prompt utilizado:</strong> 
                "Actúa como auditor experto. Necesito evaluar el nivel de riesgo de Inyección SQL, XSS Reflejado e Inyección de Comandos usando la calculadora oficial: https://www.first.org/cvss/calculator/3.1. Indícame qué métricas debo seleccionar para cada ataque. Justifica cada elección considerando el contexto de FarmaSalud, una plataforma que almacena recetas médicas y datos de salud para determinar el impacto real en confidencialidad, integridad y disponibilidad."
              </p>
            </div>
            
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm">
                <strong className="text-slate-800 block mb-1">Qué se aceptó y qué se corrigió:</strong> 
                Se aceptaron las justificaciones teóricas sobre cómo Inyección de Comandos afecta totalmente la disponibilidad e integridad del servidor. Sin embargo, se debió corregir manualmente la métrica de "Privileges Required" en algunos ataques ya que la IA asumió por error un ataque autenticado. Al estar el entorno DVWA configurado en nivel Low, el ataque se realizó sin validaciones previas por lo que se ajustó a "None" en la calculadora real.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-purple-900 flex items-center gap-2 mb-2">
            <CheckCircle className="text-purple-600" size={20} />
            Reflexión Final
          </h3>
          <p className="text-sm text-purple-800 leading-relaxed">
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default Prompts