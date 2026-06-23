import { ServerCrash, RefreshCw, DatabaseBackup } from 'lucide-react'

function Recuperacion() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-cyan-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <ServerCrash className="text-cyan-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Mejora Tecnológica y Recuperación
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <p>
          Estrategias de modernización y plan de contingencia para garantizar la continuidad del negocio de FarmaSalud en caso de un incidente de seguridad crítico.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <RefreshCw className="text-cyan-600" size={20} />
              1. Mejora Tecnológica
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="text-slate-700 block">Despliegue de WAF:</strong> 
                Instalación de un Web Application Firewall para interceptar de manera proactiva cargas útiles maliciosas antes de que lleguen al código de la aplicación.
              </li>
              <li>
                <strong className="text-slate-700 block">Monitoreo de Base de Datos:</strong> 
                Implementar un sistema de alertas en tiempo real sobre las tablas que almacenan información de salud y puntos de clientes.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <DatabaseBackup className="text-cyan-600" size={20} />
              2. Plan de Recuperación
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong className="text-slate-700 block">Respaldos Críticos (Backups):</strong> 
                Copias de seguridad cifradas de las recetas médicas, almacenadas fuera de la red principal de la farmacia.
              </li>
              <li>
                <strong className="text-slate-700 block">Alta Disponibilidad:</strong> 
                Arquitectura en la nube para levantar réplicas del servidor web en minutos si el servidor original sufre una inyección de comandos o ransomware.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recuperacion    