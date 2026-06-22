import { Grid, AlertTriangle } from 'lucide-react'

function Matriz() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-indigo-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Grid className="text-indigo-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Matriz de Riesgo y Mapa de Calor
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <p>
          Evaluación de las vulnerabilidades basada en su probabilidad de explotación vs el impacto en las operaciones de FarmaSalud.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-center border-collapse min-w-150[600px]">
            <tbody>
              <tr>
                <td className="w-32 font-semibold text-slate-700 bg-slate-50 border border-slate-200 p-2">Impacto Alto</td>
                <td className="p-4 bg-yellow-200 border border-slate-200"></td>
                <td className="p-4 bg-orange-400 border border-slate-200 font-bold text-orange-950 shadow-inner">
                  Inyección de Comandos
                </td>
                <td className="p-4 bg-red-600 border border-slate-200 font-bold text-white shadow-inner">
                  Inyección SQL
                </td>
              </tr>
              <tr>
                <td className="w-32 font-semibold text-slate-700 bg-slate-50 border border-slate-200 p-2">Impacto Medio</td>
                <td className="p-4 bg-green-200 border border-slate-200"></td>
                <td className="p-4 bg-yellow-200 border border-slate-200"></td>
                <td className="p-4 bg-orange-400 border border-slate-200 font-bold text-orange-950 shadow-inner">
                  XSS Reflejado
                </td>
              </tr>
              <tr>
                <td className="w-32 font-semibold text-slate-700 bg-slate-50 border border-slate-200 p-2">Impacto Bajo</td>
                <td className="p-4 bg-green-400 border border-slate-200"></td>
                <td className="p-4 bg-green-200 border border-slate-200"></td>
                <td className="p-4 bg-yellow-200 border border-slate-200"></td>
              </tr>
              <tr>
                <td className="w-32 border-none"></td>
                <td className="font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-3">Probabilidad Baja</td>
                <td className="font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-3">Probabilidad Media</td>
                <td className="font-semibold text-slate-700 bg-slate-50 border border-slate-200 py-3">Probabilidad Alta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 mt-6">
          <h3 className="font-semibold text-indigo-900 flex items-center gap-2 mb-3">
            <AlertTriangle className="text-indigo-600" size={20} />
            Priorización de Tratamiento
          </h3>
          <ul className="space-y-3 text-sm text-indigo-900">
            <li><strong>1. Prioridad Crítica (Inyección SQL):</strong> Exponer la base de datos de recetas médicas destruye la confianza y tiene consecuencias legales severas. Requiere mitigación inmediata.</li>
            <li><strong>2. Prioridad Alta (XSS Reflejado):</strong> Es altamente probable de distribuir mediante phishing afectando a la base de clientes masiva del sistema de fidelización.</li>
            <li><strong>3. Prioridad Alta (Inyección de Comandos):</strong> Aunque es menos probable de ejecutar sin conocimiento previo de la red, si ocurre, se pierde la disponibilidad total del servicio.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Matriz