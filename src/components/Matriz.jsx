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
        <p className="text-sm">
          La siguiente matriz de riesgo evalúa las vulnerabilidades encontradas en el portal de FarmaSalud mediante la fórmula <strong>Riesgo = Probabilidad × Impacto</strong>. Se utiliza una escala de 1 a 3 para ambos ejes.
        </p>

        <div className="overflow-x-auto py-4">
          <div className="min-w-150[600px] max-w-2xl mx-auto">
            
            <div className="grid grid-cols-4 gap-2 text-center mb-2">
              <div className="col-start-2 font-bold text-slate-700 text-sm">Impacto Bajo (1)</div>
              <div className="font-bold text-slate-700 text-sm">Impacto Medio (2)</div>
              <div className="font-bold text-slate-700 text-sm">Impacto Alto (3)</div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-2 min-h-25[100px]">
              <div className="flex items-center justify-end pr-4 font-bold text-slate-700 text-sm text-right">
                Probabilidad<br/>Alta (3)
              </div>
              <div className="bg-yellow-100 border border-yellow-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-yellow-600/40 font-black text-xl">3</span>
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-orange-600/40 font-black text-xl">6</span>
                
                <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm w-full text-center">
                  XSS Reflejado
                </div>
              </div>
              <div className="bg-red-100 border border-red-300 rounded-md p-2 relative flex flex-col gap-2 items-center justify-center">
                <span className="absolute top-1 right-2 text-red-600/40 font-black text-xl">9</span>
                
                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm w-full text-center z-10">
                  Inyección SQL
                </div>
                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm w-full text-center z-10">
                  Inyección de Comandos
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-2 min-h-25[100px]">
              <div className="flex items-center justify-end pr-4 font-bold text-slate-700 text-sm text-right">
                Probabilidad<br/>Media (2)
              </div>
              <div className="bg-emerald-100 border border-emerald-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-emerald-600/40 font-black text-xl">2</span>
              </div>
              <div className="bg-yellow-100 border border-yellow-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-yellow-600/40 font-black text-xl">4</span>
              </div>
              <div className="bg-orange-100 border border-orange-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-orange-600/40 font-black text-xl">6</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 min-h-25[100px]">
              <div className="flex items-center justify-end pr-4 font-bold text-slate-700 text-sm text-right">
                Probabilidad<br/>Baja (1)
              </div>
              <div className="bg-emerald-100 border border-emerald-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-emerald-600/40 font-black text-xl">1</span>
              </div>
              <div className="bg-emerald-100 border border-emerald-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-emerald-600/40 font-black text-xl">2</span>
              </div>
              <div className="bg-yellow-100 border border-yellow-300 rounded-md p-2 relative flex items-center justify-center">
                <span className="absolute top-1 right-2 text-yellow-600/40 font-black text-xl">3</span>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 bg-slate-50 p-5 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2 mb-4">
            <AlertTriangle className="text-indigo-600" size={20} />
            Priorización y Justificación
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="bg-red-600 text-white font-bold px-2 rounded h-fit">Nivel 9</span>
              <p><strong>Inyección de Comandos e Inyección SQL:</strong> Ambas presentan una Probabilidad Alta (3) al ser fácilmente explotables sin autenticación previa y un Impacto Alto (3) ya que permiten el compromiso total de la base de datos de pacientes y el control absoluto del servidor de FarmaSalud. Son de resolución crítica e inmediata.</p>

            </li>
            <li className="flex gap-2">
              <span className="bg-orange-500 text-white font-bold px-2 rounded h-fit">Nivel 6</span>
              <p><strong>XSS Reflejado:</strong> Presenta una Probabilidad Alta (3) por la falta de sanitización en las entradas del portal web pero un Impacto Medio (2) ya que el ataque requiere engañar al usuario para robar su sesión limitando el daño a usuarios individuales y no a la infraestructura completa.</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Matriz





            