import { Database, AlertTriangle, ShieldCheck } from 'lucide-react'

function InyeccionSQL() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-red-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Database className="text-red-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Vulnerabilidad 1: Inyección SQL
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            Evidencia y Payload
          </h3>
          <p className="mt-2">
            El ataque se realizó en la sección SQL Injection de DVWA ingresando el siguiente payload en el campo User ID:
          </p>
          <code className="block bg-slate-100 p-3 rounded mt-2 text-red-600 font-mono text-sm border border-slate-200">
            ' OR '1'='1
          </code>
          
          <div className="mt-4 p-4 bg-slate-50 border rounded-lg text-center">
            <img 
              src="/img/sqli_ferjav.png" 
              alt="Evidencia de Inyección SQL" 
              className="rounded border shadow-sm mx-auto max-w-full"
            />
            <p className="text-sm text-slate-500 mt-2">
              Captura del ataque en entorno DVWA.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800">¿Por qué funciona y su Impacto?</h3>
          <p className="mt-2">
            La aplicación construye la consulta concatenando la entrada del usuario directamente sin sanitizar. La comilla simple insertada cierra el dato original y la expresión añade una condición siempre verdadera provocando que la base de datos devuelva todos los registros.
          </p>
          <p className="mt-3 font-medium text-red-700 bg-red-50 p-3 rounded border border-red-100">
            Impacto en FarmaSalud: Un atacante podría extraer la base de datos completa de clientes exponiendo el historial médico, recetas de enfermedades crónicas y datos de fidelización vulnerando gravemente la privacidad.
          </p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
          <h3 className="text-lg font-semibold text-emerald-800 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} />
            Defensa y Prevención
          </h3>
          <p className="mt-2 text-emerald-900">
            La mitigación principal consiste en implementar <strong>consultas parametrizadas</strong>. Esto garantiza que la base de datos reciba primero la instrucción y luego el dato tratándolo siempre como un valor literal y nunca como código.
          </p>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mt-4">
          <h3 className="text-lg font-semibold text-blue-800 flex items-center gap-2 mb-2">
            <ShieldCheck className="text-blue-600" size={20} />
            Control de Mitigación (OWASP)
          </h3>
          <p className="text-blue-900 text-sm">
            Siguiendo las directrices de <strong>OWASP</strong>, se debe aplicar el principio de menor privilegio. La aplicación web debe conectarse con una cuenta restringida que no tenga permisos para modificar la estructura de las tablas limitando el impacto de una inyección exitosa.
            </p>
        </div>

      </div>
    </div>
  )
}

export default InyeccionSQL