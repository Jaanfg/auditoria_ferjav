import { LayoutDashboard } from 'lucide-react'

function Indice() {
    const links = [
    { id: 'resumen', label: 'Resumen Ejecutivo' },
    { id: 'inyeccion-sql', label: 'Inyección SQL' },
    { id: 'xss', label: 'XSS Reflejado' },
    { id: 'comandos', label: 'Inyección de Comandos' },
    { id: 'activos', label: 'Activos de Información' },
    { id: 'matriz', label: 'Matriz de Riesgo' },
    { id: 'controles', label: 'Políticas y Controles' },
    { id: 'recuperacion', label: 'Mejora y Recuperación' },
    { id: 'bitacora', label: 'Bitácora de IA' },
  ]

  return (
    <aside className="hidden lg:block w-64 shrink-0 sticky top-28 h-fit">
      <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-teal-600">
        <h3 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
          <LayoutDashboard size={20} className="text-teal-600" />
          Módulo de Seguridad
        </h3>

        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-teal-800 hover:text-teal-600 hoverbg-teal-50/50 px-2 py-1.5 rounded-md transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Indice

