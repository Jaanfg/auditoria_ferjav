import { Code, AlertTriangle, ShieldCheck } from 'lucide-react'

function XSS() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-6 border-l-4 border-orange-500">
      <div className="flex items-center gap-3 mb-6 border-b pb-4">
        <Code className="text-orange-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Vulnerabilidad 2: Cross-Site Scripting (XSS Reflejado)
        </h2>
      </div>

      <div className="space-y-6 text-slate-600">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={20} />
            Evidencia y Payload
          </h3>
          <p className="mt-2">
            El ataque se realizó en la sección XSS (Reflected) de DVWA inyectando el siguiente script en el campo de nombre:
          </p>
          <code className="block bg-slate-100 p-3 rounded mt-2 text-orange-600 font-mono text-sm border border-slate-200">
            &lt;script&gt;alert('XSS')&lt;/script&gt;
          </code>
          
          <div className="mt-4 p-4 bg-slate-50 border rounded-lg text-center">
            <img 
              src="/img/xss_ferjav.png" 
              alt="Evidencia de XSS Reflejado" 
              className="rounded border shadow-sm mx-auto max-w-full"
            />
            <p className="text-sm text-slate-500 mt-2">
              Captura del script ejecutándose en el navegador.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-800">¿Por qué funciona y su Impacto?</h3>
          <p className="mt-2">
            La vulnerabilidad ocurre porque la aplicación devuelve el texto introducido por el usuario sin procesarlo. Como resultado, el navegador no distingue entre el código original de la página y la entrada del atacante ejecutando el script inyectado.
          </p>
          <p className="mt-3 font-medium text-orange-800 bg-orange-50 p-3 rounded border border-orange-200">
            Impacto en FarmaSalud: Mediante un enlace enviado por correo, un atacante podría ejecutar código en el navegador de un cliente de la farmacia. Esto le permitiría robar su sesión activa para acceder a sus recetas médicas, historial de compras de salud o sustraer sus puntos de fidelización.
          </p>
        </div>

        <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
          <h3 className="text-lg font-semibold text-emerald-800 flex items-center gap-2">
            <ShieldCheck className="text-emerald-600" size={20} />
            Defensa y Prevención
          </h3>
          <p className="mt-2 text-emerald-900">
            La prevención clave es <strong>escapar la salida</strong>, convirtiendo caracteres especiales (como <code>&lt;</code> en <code>&amp;lt;</code>) para que el navegador los renderice como texto visual y no como código ejecutable. Además, se debe implementar una política estricta de Content Security Policy (CSP).
          </p>
        </div>
      </div>
    </div>
  )
}

export default XSS