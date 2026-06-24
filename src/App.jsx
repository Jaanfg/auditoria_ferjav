import { useState } from 'react'
import { ShieldPlus, Activity, Lock, Mail, Globe } from 'lucide-react'
import Indice from './components/Indice'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'

function App() {

  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="min-h-screen bg-emerald-50/40 flex flex-col font-sans scroll-smooth">
      
      <header className="bg-white border-b-4 border-teal-600 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-teal-50 p-2 rounded-lg border border-teal-100">
                <Activity size={32} className="text-teal-600" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-teal-900 tracking-tight">
                  FarmaSalud
                </h1>
                <p className="text-teal-700 text-sm font-semibold mt-0.5 flex items-center gap-1">
                  <Lock size={14} /> Reporte de Auditoría Interna
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end">
              <span className="bg-red-50 text-red-700 border border-red-200 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                Estrictamente Confidencial
              </span>
              <span className="text-xs text-slate-500 mt-1">Acceso TI - T13034</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-6xl mx-auto px-6 py-12 w-full flex gap-8 items-start relative">
        
        <Indice />

        <main className="flex-1 max-w-4xl w-full space-y-6">
          <section id="resumen" className="scroll-mt-28"><Resumen /></section>
          <section id="inyeccion-sql" className="scroll-mt-28"><InyeccionSQL /></section>
          <section id="xss" className="scroll-mt-28"><XSS /></section>
          <section id="comandos" className="scroll-mt-28"><Comandos /></section>
          <section id="activos" className="scroll-mt-28"><Activos /></section>
          <section id="matriz" className="scroll-mt-28"><Matriz /></section>
          <section id="controles" className="scroll-mt-28"><Controles /></section>
          <section id="recuperacion" className="scroll-mt-28"><Recuperacion /></section>
          <section id="bitacora" className="scroll-mt-28"><Prompts /></section>

          <div className="mt-16 pt-12 border-t-2 border-teal-200/60 flex justify-end perspective-1000">
            <div 
              className="w-[320px] h-[160px] cursor-pointer group [perspective:1000px]"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                
                <div className="absolute w-full h-full bg-white p-8 rounded-xl border border-teal-100 shadow-sm flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-emerald-600"></div>
                  <p className="font-serif italic text-4xl text-teal-900 mb-3 tracking-wide text-center">
                    Javier Fernández G.
                  </p>
                  <div className="h-px bg-teal-200 w-full mb-3"></div>
                  <p className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500 uppercase tracking-widest text-center">
                    Desarrollador Full Stack
                  </p>
                </div>

                <div className="absolute w-full h-full bg-teal-900 p-6 rounded-xl border border-teal-800 shadow-md flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                  
                  <p className="text-teal-200 text-xs font-bold uppercase tracking-widest mb-4">
                    Información de Contacto
                  </p>
                  
                  <div className="flex flex-col gap-3 w-full px-4">
                    <a href="mailto:ja.fernandezg21@gmail.com" className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors">
                      <Mail size={18} />
                      <span className="text-sm font-medium">ja.fernandezg21@gmail.com</span>
                    </a>
                    
                    <a href="https://github.com/Jaanfg" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors">
                      <Globe size={18} />
                      <span className="text-sm font-medium">github.com/Jaanfg</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-teal-900 text-teal-50 py-8 mt-auto border-t-4 border-teal-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <ShieldPlus size={18} className="text-teal-400" />
            <span>Documento Interno - FarmaSalud TI</span>
          </div>
          <div className="text-center md:text-right text-teal-200/80">
            <p>Auditor: Javier Andrés Fernández Garrido</p>
            <p>Docente: Rubén Schnettler - INACAP Valparaíso</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App