import { Shield, FileCheck, Wrench } from 'lucide-react'

function Controles() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-emerald-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Shield className="text-emerald-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Políticas de Prevención y Controles
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <p>
          Directrices estratégicas y tácticas para asegurar la confidencialidad y operatividad de FarmaSalud frente a futuras amenazas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-900 flex items-center gap-2 mb-4">
              <FileCheck className="text-emerald-600" size={20} />
              1. Políticas de Prevención
            </h3>

            <p className="text-xs font-bold text-emerald-700 mb-4 ml-7 uppercase tracking-wider">Aplica a los riesgos priorizados</p>

            <ul className="space-y-3 text-sm text-emerald-800 list-disc list-inside marker:text-emerald-500">
              <li><strong>Desarrollo Seguro:</strong> Implementar capacitaciones en OWASP para el equipo de desarrollo del portal.</li>
              <li><strong>Privacidad de Datos:</strong> Cifrar información clínica, recetas médicas y credenciales de pacientes ya sea que los datos estén siendo transferidos (HTTPS) o almacenados.</li>
              <li><strong>Menor Privilegio:</strong> Configurar la conexión a la base de datos con cuentas restringidas prohibiendo el acceso root a la aplicación web.</li>
            </ul>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg border border-teal-100">
            <h3 className="text-lg font-semibold text-teal-900 flex items-center gap-2 mb-4">
              <Wrench className="text-teal-600" size={20} />
              2. Controles de Mitigación
            </h3>
            
            <p className="text-xs font-bold text-teal-700 mb-4 ml-7 uppercase tracking-wider">Para riesgos Rojos / Naranjos</p>

            <ul className="space-y-3 text-sm text-teal-800 list-disc list-inside marker:text-teal-500">
              <li>
                <strong>Inyección SQL:</strong> Forzar el uso de Consultas Parametrizadas en todas las interacciones con el motor de base de datos relacional.
                <span className="block mt-1 font-semibold text-teal-900/70 text-xs ml-5">(Riesgo Rojo - Nivel 9 | Marco: OWASP)</span>
              </li>
              <li>
                <strong>XSS Reflejado:</strong> Sanitizar entradas, aplicar <em>Output Encoding</em> y configurar políticas CSP para proteger los tokens de fidelización.
                <span className="block mt-1 font-semibold text-teal-900/70 text-xs ml-5">(Riesgo Naranja - Nivel 6 | Marco: OWASP)</span>
              </li>
              <li>
                <strong>Inyección de Comandos:</strong> Validar entradas con listas blancas y usar APIs de red nativas en lugar de llamadas a la terminal del sstema operativo.
                <span className="block mt-1 font-semibold text-teal-900/70 text-xs ml-5">(Riesgo Rojo - Nivel 9 | Marco: NIST)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controles