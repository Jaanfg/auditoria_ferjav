import { Terminal, AlertTriangle, ShieldCheck } from 'lucide-react'

function Comandos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-red-800">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Terminal className="text-red-900" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Vulnerabilidad 3: Inyección de Comandos
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            Evidencia y Payload
          </h3>
          <p className="mt-2">
            El ataque se realizó en la sección Command Injection de DVWA inyectando comandos del sistema operativo concatenados a una IP válida:
          </p>
          <code className="block bg-slate-100 p-3 rounded mt-2 text-red-800 font-mono text-sm border border-slate-200">
            127.0.0.1; cat /etc/passwd
          </code>
          
          <div className="mt-4 p-4 bg-slate-50 border rounded-lg text-center">
            <img 
              src="/img/comandos_ferjav.png" 
              alt="Evidencia de Inyección de Comandos" 
              className="rounded border shadow-sm mx-auto max-w-full"
            />
            <p className="text-sm text-slate-500 mt-2">
              Captura de la ejecución del ping con la lectura del archivo interno /etc/passwd.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800">¿Por qué funciona y su Impacto?</h3>
          <p className="mt-2">
            La vulnerabilidad existe porque la aplicación pasa la entrada del usuario directamente a la terminal del sistema sin filtros. El carácter <code>;</code> actúa como un separador indicándole al servidor que ejecute el primer comando (ping) y a continuación, el segundo (cat), dándole al atacante control sobre el entorno.
          </p>
          <p className="mt-3 font-medium text-red-900 bg-red-100 p-3 rounded border border-red-200">
            Impacto en FarmaSalud: Un atacante obtiene control total del servidor web. Podría instalar ransomware para secuestrar las operaciones de la farmacia, alterar las recetas digitales para modificar dosis o utilizar este servidor comprometido como puente para saltar a la red corporativa donde se procesan los pagos y cotizaciones de salud.
          </p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
          <h3 className="text-lg font-semibold text-emerald-800 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} />
            Defensa y Prevención
          </h3>
          <p className="mt-2 text-emerald-900">
            La regla de oro es no transferir nunca la entrada del usuario directamente al sistema operativo. La defensa requiere emplear <strong>listas blancas</strong> (como por ej. aceptar estrictamente formatos de IP válidos) y utilizar APIs seguras nativas del lenguaje de programación que no invoquen la terminal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comandos