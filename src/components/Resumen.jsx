import { FileText, Activity, ShieldAlert, CreditCard } from 'lucide-react'

function Resumen() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <FileText className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Resumen de la Auditoría: FarmaSalud
        </h2>
      </div>

      <div className="space-y-4 text-slate-600">
        <p>
          El presente informe detalla la auditoría de seguridad web realizada al portal de clientes de <strong>FarmaSalud</strong>, una reconocida cadena de farmacias.
        </p>
        <p>
          Este portal web es una plataforma crítica para la organización ya que permite a los clientes acceder a servicios personalizados y gestionar información altamente sensible.
        </p>

        <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">Activos de Información Custodiados:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center text-center">
            <Activity className="text-emerald-500 mb-2" />
            <span className="font-medium text-slate-700">Recetas y Salud</span>
            <span className="text-sm text-slate-500 mt-1">Historial médico y recetas.</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center text-center">
            <CreditCard className="text-indigo-500 mb-2" />
            <span className="font-medium text-slate-700">Fidelización</span>
            <span className="text-sm text-slate-500 mt-1">Puntos acumulados y beneficios del programa.</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center text-center">
            <ShieldAlert className="text-rose-500 mb-2" />
            <span className="font-medium text-slate-700">Datos de Clientes</span>
            <span className="text-sm text-slate-500 mt-1">Información personal y de contacto.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumen