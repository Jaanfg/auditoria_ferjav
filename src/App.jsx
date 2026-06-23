import { Shield, BookOpen } from 'lucide-react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'

import Prompts from './components/Prompts'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-10 px-6 shadow">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Auditoría de Seguridad - FarmaSalud
            </h1>
            <p className="text-slate-300 mt-1">
              T13034 - Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        
        <Resumen />
        <InyeccionSQL />
        <XSS />
        <Comandos />
        <Activos />
        <Matriz />
        <Controles />

        <Prompts />
      </main>

      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Estudiante: Javier Andrés Fernández Garrido</span>
          <span>Docente: Rubén Schnettler - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App
