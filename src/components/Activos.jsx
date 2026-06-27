import { Database, Users, Gift, AlertOctagon, Key, CreditCard } from 'lucide-react'

function Activos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-blue-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <AlertOctagon className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Activos de Información y Riesgos
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <p>
          En base a la industria de FarmaSalud, el diseño de la base de datos y la arquitectura del portal custodian los siguientes activos críticos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Database className="text-blue-500" size={20} />
              <h3 className="font-semibold text-slate-800">1. Base de Datos de Salud y Recetas</h3>
            </div>
            <p className="text-sm"><strong>Descripción:</strong> Tablas relacionales que contienen el historial médico de los pacientes, recetas médicas retenidas y tratamientos crónicos.</p>
            <p className="text-sm mt-1 text-blue-700"><strong>Clasificación:</strong> Confidencial / Crítico</p>
            <p className="text-sm mt-2 text-red-600"><strong>Riesgo Principal:</strong> Extracción no autorizada mediante Inyección SQL exponiendo información médica sensible y violación de la privacidad.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="text-indigo-500" size={20} />
              <h3 className="font-semibold text-slate-800">2. Sistema de Fidelización</h3>
            </div>
            <p className="text-sm"><strong>Descripción:</strong> Plataforma que administra los descuentos y beneficios asociados al Rut del cliente.</p>
            <p className="text-sm mt-1 text-blue-700"><strong>Clasificación:</strong> Uso Interno / Alto Valor</p>
            <p className="text-sm mt-2 text-red-600"><strong>Riesgo Principal:</strong> Robo de tokens de sesión mediante XSS para canjear beneficios de forma fraudulenta.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Users className="text-emerald-500" size={20} />
              <h3 className="font-semibold text-slate-800">3. Infraestructura y Datos Personales</h3>
            </div>
            <p className="text-sm"><strong>Descripción:</strong> El servidor web y los registros de clientes (Rut, nombres, direcciones de despacho).</p>
            <p className="text-sm mt-1 text-blue-700"><strong>Clasificación:</strong> Confidencial / Crítico</p>
            <p className="text-sm mt-2 text-red-600"><strong>Riesgo Principal:</strong> Compromiso total del servidor mediante Inyección de Comandos permitiendo inyectar ransomware y paralizar el servicio.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Key className="text-amber-500" size={20} />
              <h3 className="font-semibold text-slate-800">4. Credenciales de Acceso</h3>
            </div>
            <p className="text-sm"><strong>Descripción:</strong> Usuarios y contraseñas de clientes y administradores.</p>
            <p className="text-sm mt-1 text-blue-700"><strong>Clasificación:</strong> Estrictamente Confidencial</p>
            <p className="text-sm mt-2 text-red-600"><strong>Riesgo Principal:</strong> Filtración de datos.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="text-purple-500" size={20} />
              <h3 className="font-semibold text-slate-800">5. Plataforma de Pagos</h3>
            </div>
            <p className="text-sm"><strong>Descripción:</strong> Módulo de transacciones online para compra de medicamentos.</p>
            <p className="text-sm mt-1 text-blue-700"><strong>Clasificación:</strong> Operacional / Financiero</p>
            <p className="text-sm mt-2 text-red-600"><strong>Riesgo Principal:</strong> Interrupción operativa por caída del servidor.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Activos