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

        <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
          <p className="text-sm text-slate-700">
            Durante la evaluación se identificaron tres vulnerabilidades de severidad crítica y alta (Inyección SQL, Inyección de Comandos y XSS Reflejado) que comprometen la confidencialidad de los historiales médicos y la disponibilidad de la plataforma de ventas. En respuesta a eso, este documento presenta una priorización de riesgos basada en su impacto y puntaje CVSS, propone controles técnicos sustentados en los marcos <strong>OWASP y NIST</strong> y establece un plan de recuperación y mejoras para garantizar la continuidad del portal.
         </p>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">Activos de Información Críticos:</h3>
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