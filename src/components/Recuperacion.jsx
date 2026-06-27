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
                <strong className="text-slate-700 block">Implementación de WAF:</strong> 
                Desplegar un Web Application Firewall para filtrar tráfico malicioso y detectar patrones de Inyección SQL y XSS antes de que alcancen el portal de clientes.
              </li>
              <li>
                <strong className="text-slate-700 block">Auditoría de Base de Datos:</strong> 
                Implementar un monitoreo activo sobre las tablas de recetas médicas y fidelización para detectar extracciones anómalas de información.
              </li>
          <li>
                <strong className="text-slate-700 block">Segmentación de Red:</strong> 
                Aislar el servidor web de la base de datos principal en redes virtuales distintas para contener el movimiento en caso de que un atacante logre una inyección de comandos.
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
                <strong className="text-slate-700 block">Recuperación de Datos de Salud:</strong> 
                Ejecutar backups diarios y semanales de la base de datos. Estos respaldos deben almacenarse en una ubicación externa y de forma cifrada.
              </li>
              <li>
                <strong className="text-slate-700 block">Alta Disponibilidad:</strong> 
                Establecer una infraestructura en la nube que permita levantar servidores de contingencia rápidamente asegurando que la venta de medicamentos y el acceso a las recetas no se interrumpan en caso de compromiso del servidor principal.
              </li>
              <li>
                <strong className="text-slate-700 block">Procedimiento de Restauración:</strong> 
                Realizar simulacros y pruebas mensuales de restauración de los respaldos para garantizar que el tiempo objetivo de recuperación cumpla con los estándares de la industria.
              </li>
            <li>
                <strong className="text-slate-700 block">Plan de Notificación:</strong> 
                Establecer un protocolo formal de comunicación para alertar inmediatamente al equipo de respuesta, autoridades y a los pacientes afectados en caso de confirmarse una brecha de datos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recuperacion