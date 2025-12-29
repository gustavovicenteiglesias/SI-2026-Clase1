
import React, { useState } from 'react';
import { TabType } from '../types';

interface SlideshowProps {
  onNavigate?: (tab: TabType) => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const slides = [
    {
      id: 1,
      title: "PORTADA",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in fade-in zoom-in duration-700">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#AA9614] rounded-2xl flex items-center justify-center shadow-xl mb-4">
            <i className="fas fa-star text-white text-2xl sm:text-3xl"></i>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-[#3C3C3C] dark:text-white leading-none tracking-tighter">
            SISTEMAS DE <br/> <span className="text-[#AA9614]">INFORMACIÓN</span>
          </h2>
          <div className="h-1.5 w-24 sm:w-32 bg-[#AA9614] rounded-full mx-auto"></div>
          <p className="text-base md:text-2xl font-black text-gray-400 tracking-[0.2em] sm:tracking-[0.4em] uppercase">
            NOCIONES SOBRE SISTEMAS
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "SISTEMA: DEFINICIÓN",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6 overflow-y-auto pr-1">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-5 md:p-8 rounded-2xl sm:rounded-3xl border-l-[8px] sm:border-l-[12px] border-[#AA9614] shadow-lg">
            <p className="text-lg md:text-2xl font-bold leading-tight italic text-[#3C3C3C] dark:text-gray-100">
              “Conjunto de componentes interrelacionados y sus atributos, que interactúan entre sí, con un objetivo determinado”
            </p>
            <p className="text-right mt-3 font-black text-[#AA9614] tracking-widest uppercase text-[10px] sm:text-xs">(VOLPENTESTA, 1999)</p>
          </div>
          <div className="space-y-3">
             <p className="text-base sm:text-lg font-black text-[#3C3C3C] dark:text-white text-center italic">“Los sistemas pueden ser abstractos o físicos” (SENN, 1990)</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#3C3C3C] p-4 sm:p-6 rounded-xl sm:rounded-2xl text-white shadow-md border-b-4 border-[#AA9614]">
                   <h4 className="font-black text-base sm:text-lg mb-1 text-[#AA9614] uppercase tracking-wider">Sistema Abstracto</h4>
                   <p className="text-xs sm:text-sm opacity-80 leading-snug">Conceptual: producto de la mente humana (ideas, software).</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-gray-100 dark:border-gray-600">
                   <h4 className="font-black text-base sm:text-lg mb-1 text-[#3C3C3C] dark:text-[#AA9614] uppercase tracking-wider">Sistema Físico</h4>
                   <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-snug">Conjunto de elementos materiales (hardware, máquinas).</p>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "SISTEMA: MODELO GENERAL",
      content: (
        <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-black text-[#3C3C3C] dark:text-white uppercase tracking-widest border-b-2 border-[#AA9614] inline-block pb-1 self-start">
            Elementos del Modelo General:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {[
              { letter: 'a', text: 'CONTEXTO O AMBIENTE', icon: 'fa-globe-americas' },
              { letter: 'b', text: 'LÍMITES', icon: 'fa-border-style' },
              { letter: 'c', text: 'ENTRADAS Y SALIDAS', icon: 'fa-exchange-alt' },
              { letter: 'd', text: 'SUBSISTEMAS', icon: 'fa-cubes' },
              { letter: 'e', text: 'RETROALIMENTACIÓN', icon: 'fa-sync-alt' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-700 transition-all hover:bg-white dark:hover:bg-gray-700 hover:shadow-md">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#AA9614] rounded-lg flex items-center justify-center text-white font-black">
                  <i className={`fas ${item.icon} text-xs sm:text-sm`}></i>
                </div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wide text-gray-600 dark:text-gray-200">
                  <span className="text-[#AA9614] mr-1 sm:mr-2">{item.letter}.</span>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "EXPLORADOR DE ELEMENTOS",
      content: (
        <div className="flex flex-col h-full space-y-2 overflow-y-auto sm:overflow-hidden pr-1">
          <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-start h-full">
            <div className="md:w-1/3 space-y-1 sm:space-y-2 flex-shrink-0">
              <h4 className="text-base sm:text-lg font-black text-[#AA9614] uppercase tracking-tighter">Interacción Sistémica</h4>
              <p className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                Toca o pasa el cursor sobre los elementos.
              </p>
              
              <div className={`mt-1 sm:mt-2 p-2 sm:p-3 rounded-xl border-l-4 transition-all duration-300 ${hoveredPart ? 'bg-gray-50 dark:bg-gray-800 border-[#AA9614] translate-x-1' : 'bg-transparent border-transparent opacity-0 sm:h-auto h-0 overflow-hidden'}`}>
                <h5 className="font-black text-[#3C3C3C] dark:text-white uppercase text-[8px] sm:text-[9px] mb-0.5 sm:mb-1">
                  {hoveredPart === 'entradas' && 'Entradas'}
                  {hoveredPart === 'proceso' && 'Proceso'}
                  {hoveredPart === 'salidas' && 'Salidas'}
                  {hoveredPart === 'retro' && 'Retroalimentación'}
                  {hoveredPart === 'limites' && 'Límites'}
                  {hoveredPart === 'ambiente' && 'Ambiente'}
                </h5>
                <p className="text-[8px] sm:text-[10px] leading-snug font-medium italic">
                  {hoveredPart === 'entradas' && 'Recursos importados para funcionar.'}
                  {hoveredPart === 'proceso' && 'Transformación de recursos en resultados.'}
                  {hoveredPart === 'salidas' && 'Resultados devueltos al ambiente.'}
                  {hoveredPart === 'retro' && 'Control que ajusta el comportamiento.'}
                  {hoveredPart === 'limites' && 'Frontera que define el sistema.'}
                  {hoveredPart === 'ambiente' && 'Todo lo externo que influye al sistema.'}
                </p>
              </div>
            </div>

            <div className="md:w-2/3 w-full bg-white dark:bg-[#1a1a1a] rounded-2xl sm:rounded-[2.5rem] p-1 sm:p-4 relative flex flex-col items-center justify-center overflow-visible shadow-inner border border-gray-100 dark:border-gray-800 min-h-[180px] sm:h-full">
              <svg viewBox="0 0 800 500" className="w-full h-full max-h-[250px] sm:max-h-[400px] drop-shadow-lg overflow-visible" preserveAspectRatio="xMidYMid meet">
                {/* Ambiente */}
                <rect 
                  x="20" y="20" width="760" height="460" rx="40" 
                  fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4"
                  onMouseEnter={() => setHoveredPart('ambiente')}
                  onTouchStart={() => setHoveredPart('ambiente')}
                  className="cursor-help transition-all hover:fill-blue-50/30"
                />
                <text x="50" y="55" className="text-xl font-black fill-gray-300 uppercase tracking-widest italic">AMBIENTE</text>

                {/* Límites */}
                <rect 
                  x="120" y="100" width="560" height="300" rx="30" 
                  fill="white" stroke="#3C3C3C" strokeWidth="2" strokeDasharray="4 4" fillOpacity="0.8"
                  onMouseEnter={() => setHoveredPart('limites')}
                  onTouchStart={() => setHoveredPart('limites')}
                  className="cursor-help transition-all hover:stroke-[#AA9614]"
                />

                {/* Entradas */}
                <g onMouseEnter={() => setHoveredPart('entradas')} onTouchStart={() => setHoveredPart('entradas')} className="cursor-pointer group">
                  <path d="M40 250 L180 250" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
                  <path d="M170 240 L190 250 L170 260" fill="#f59e0b" />
                  <circle cx="100" cy="250" r="40" fill="white" stroke="#f59e0b" strokeWidth="4" className="group-hover:scale-110 transition-transform origin-center" />
                  <text x="100" y="255" textAnchor="middle" className="text-[10px] font-black fill-[#f59e0b] uppercase">ENTRADAS</text>
                </g>

                {/* Salidas */}
                <g onMouseEnter={() => setHoveredPart('salidas')} onTouchStart={() => setHoveredPart('salidas')} className="cursor-pointer group">
                  <path d="M620 250 L760 250" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
                  <path d="M750 240 L770 250 L750 260" fill="#3b82f6" />
                  <circle cx="700" cy="250" r="40" fill="white" stroke="#3b82f6" strokeWidth="4" className="group-hover:scale-110 transition-transform origin-center" />
                  <text x="700" y="255" textAnchor="middle" className="text-[10px] font-black fill-[#3b82f6] uppercase">SALIDAS</text>
                </g>

                {/* Proceso */}
                <g onMouseEnter={() => setHoveredPart('proceso')} onTouchStart={() => setHoveredPart('proceso')} className="cursor-pointer group">
                  <rect x="250" y="170" width="300" height="160" rx="24" fill="#3C3C3C" />
                  <rect x="250" y="170" width="300" height="40" rx="24" fill="#AA9614" />
                  <text x="400" y="196" textAnchor="middle" fill="white" className="text-sm font-black tracking-widest uppercase">PROCESO</text>
                  <g transform="translate(400, 260)">
                    <circle r="30" fill="none" stroke="#AA9614" strokeWidth="6" strokeDasharray="10 5" className="animate-[spin_8s_linear_infinite]" />
                    <circle r="15" fill="#AA9614" />
                  </g>
                </g>

                {/* Retroalimentación */}
                <g onMouseEnter={() => setHoveredPart('retro')} onTouchStart={() => setHoveredPart('retro')} className="cursor-pointer group">
                  <path 
                    d="M700 300 Q700 450 400 450 Q100 450 100 300" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="6" 
                    strokeDasharray="12 6"
                  />
                  <path d="M90 310 L100 290 L110 310" fill="#10b981" />
                  <text x="400" y="475" textAnchor="middle" className="text-[12px] font-black fill-[#065f46] uppercase italic">RETROALIMENTACIÓN</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "SISTEMA: SUBSISTEMAS",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6">
          <p className="text-base md:text-lg font-medium leading-snug">
            Cuando un componente de un sistema es en sí mismo un sistema, se lo llama <strong>SUBSISTEMA</strong>.
          </p>
          <div className="bg-[#3C3C3C] p-6 md:p-8 rounded-[2rem] border-b-4 border-[#AA9614] text-white">
             <h4 className="text-center font-black mb-6 text-[#AA9614] uppercase tracking-widest text-sm">SISTEMA DE TRANSPORTE</h4>
             <div className="flex items-center justify-center gap-4">
                <div className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-center">
                   TRANSPORTE TERRESTRE
                </div>
                <div className="flex flex-col items-center">
                   <i className="fas fa-exchange-alt text-[#AA9614] text-xl"></i>
                   <span className="text-[8px] font-black text-[#AA9614] mt-1">INTERFASES</span>
                </div>
                <div className="flex-1 p-3 bg-white/10 border border-white/20 rounded-lg text-xs font-bold text-center">
                   TRANSPORTE AÉREO
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "RETROALIMENTACIÓN",
      content: (
        <div className="flex flex-col justify-center h-full space-y-6">
          <p className="text-base font-medium text-center sm:text-left">
            Información del sistema que ingresa como entrada para <strong>ajustar</strong> las actividades.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl relative overflow-hidden">
             <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[9px] font-black text-gray-500 uppercase">ENTRADA</span>
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-[#3C3C3C] text-[#AA9614] border border-[#AA9614] font-black rounded-lg text-xs sm:text-sm">SISTEMA</div>
                <span className="text-[9px] font-black text-gray-500 uppercase">SALIDA</span>
             </div>
             <div className="flex justify-around items-center px-4 sm:px-8 relative">
                <div className="w-1/3 h-6 border-l-2 border-b-2 border-gray-400 rounded-bl-xl"></div>
                <div className="bg-[#AA9614] text-white px-3 py-1 rounded text-[8px] font-black uppercase">Sensor y Control</div>
                <div className="w-1/3 h-6 border-r-2 border-b-2 border-gray-400 rounded-br-xl"></div>
             </div>
             <div className="flex justify-center mt-2">
                <i className="fas fa-long-arrow-alt-up text-gray-400 text-lg"></i>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "SISTEMAS: CLASIFICACIÓN",
      content: (
        <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-black text-[#3C3C3C] dark:text-white uppercase mb-2">Clasificaciones Principales:</h3>
          <div className="space-y-2 sm:space-y-3">
            {[
              { letter: 'a', text: 'ABIERTOS Y CERRADOS' },
              { letter: 'b', text: 'DETERMINÍSTICOS Y PROBABILÍSTICOS' },
              { letter: 'c', text: 'SISTEMAS HOMBRE – MÁQUINA' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow border border-gray-100 dark:border-gray-700">
                <span className="text-2xl sm:text-3xl font-black text-[#3C3C3C] dark:text-white">{item.letter}.</span>
                <span className="text-base sm:text-lg font-black tracking-tight uppercase">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "ABIERTOS VS CERRADOS",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 sm:p-5 rounded-xl border-l-4 border-emerald-500">
               <h4 className="font-black text-emerald-800 dark:text-emerald-400 text-sm mb-1 uppercase">Abiertos</h4>
               <p className="text-[10px] sm:text-xs leading-relaxed">Intercambian información, materiales y energía con su ambiente. Son adaptativos.</p>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/10 p-4 sm:p-5 rounded-xl border-l-4 border-rose-500">
               <h4 className="font-black text-rose-800 dark:text-rose-400 text-sm mb-1 uppercase">Cerrados</h4>
               <p className="text-[10px] sm:text-xs leading-relaxed">Autocontenidos, no interactúan con el medio ambiente exterior.</p>
            </div>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-[#AA9614] text-center">
             <p className="text-[10px] sm:text-xs font-bold italic">Sistemas relativamente aislados: <span className="text-[#AA9614] font-black uppercase tracking-widest">MÁS O MENOS PERMEABLES</span>.</p>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "SISTEMAS DETERMINÍSTICOS",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#3C3C3C] rounded-full flex items-center justify-center text-[#AA9614] text-2xl sm:text-3xl mx-auto shadow-lg mb-2">
             <i className="fas fa-cog"></i>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#3C3C3C] dark:text-white uppercase">DETERMINÍSTICO</h3>
          <p className="text-base sm:text-xl leading-relaxed font-medium bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 rounded-2xl border-b-4 border-[#AA9614] max-w-lg mx-auto">
            Trabaja de manera <strong>previsible</strong>, se conoce con certeza su interacción y evolución.
          </p>
        </div>
      )
    },
    {
      id: 10,
      title: "SISTEMAS PROBABILÍSTICOS",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#AA9614] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto shadow-lg mb-2">
             <i className="fas fa-dice"></i>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#3C3C3C] dark:text-white uppercase">PROBABILÍSTICO</h3>
          <p className="text-base sm:text-xl leading-relaxed font-medium bg-[#3C3C3C] text-white p-5 sm:p-6 rounded-2xl border-b-4 border-[#AA9614] max-w-lg mx-auto">
            No se conoce con certeza su comportamiento, se estudia por su <strong>actuación probable</strong>.
          </p>
        </div>
      )
    },
    {
      id: 11,
      title: "CARACTERÍSTICAS (ACKOFF)",
      content: (
        <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-4 overflow-y-auto">
          <h3 className="text-base sm:text-lg font-black text-[#AA9614] mb-2 uppercase tracking-widest text-center sm:text-left">Tres Condiciones:</h3>
          <div className="space-y-2">
            {[
              "La conducta de cada parte afecta al todo.",
              "Los efectos sobre el todo son interdependientes.",
              "Ningún subgrupo tiene un efecto independiente."
            ].map((text, i) => (
              <div key={i} className="flex gap-3 sm:gap-4 items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#3C3C3C] text-[#AA9614] rounded-full flex items-center justify-center font-black flex-shrink-0 text-xs">
                  {i+1}
                </div>
                <p className="text-xs sm:text-sm font-bold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "EL SISTEMA COMO UN TODO",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6">
          <div className="text-center">
             <h3 className="text-2xl sm:text-3xl font-black text-[#3C3C3C] dark:text-white">PROPIEDADES ESENCIALES</h3>
             <div className="h-1 w-16 sm:w-20 bg-[#AA9614] mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
             <div className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-100 shadow-md">
                <p className="text-xs sm:text-sm font-medium">Las propiedades de las partes se <strong>PIERDEN</strong> al separarlas del sistema.</p>
             </div>
             <div className="p-4 sm:p-5 bg-[#3C3C3C] text-white rounded-xl sm:rounded-2xl border-b-4 border-[#AA9614] shadow-md">
                <p className="text-xs sm:text-sm font-medium">El sistema posee propiedades que <strong>NINGUNA</strong> de sus partes tiene aislada.</p>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "TEORÍA GENERAL DE SISTEMAS",
      content: (
        <div className="flex flex-col justify-center h-full space-y-4 sm:space-y-6 text-center">
          <div className="p-6 sm:p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl sm:rounded-3xl border-2 border-dashed border-gray-200">
             <p className="text-lg sm:text-2xl font-bold italic text-[#3C3C3C] dark:text-gray-100 leading-tight">
                “Los sistemas conforman una unidad que debe ser comprendida como tal…”
             </p>
             <p className="mt-4 font-black text-[#AA9614] uppercase text-[10px] tracking-widest">(VOLPENTESTA, 1999)</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
             <h4 className="text-base sm:text-lg font-black uppercase text-[#3C3C3C] dark:text-white">LUDWIG VON BERTALANFFY</h4>
             <div className="inline-block px-3 sm:px-4 py-1 bg-[#AA9614] text-white rounded-full font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">PRÓXIMA CLASE: TGS EN PROFUNDIDAD</div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "CASO DE ESTUDIO",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-3 sm:space-y-4 overflow-y-auto">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3C3C3C] rounded-full flex items-center justify-center shadow-lg border-2 border-[#AA9614]">
             <i className="fas fa-mobile-alt text-white text-xl sm:text-2xl"></i>
          </div>
          <h2 className="text-2xl sm:text-5xl font-black text-[#3C3C3C] dark:text-white leading-tight uppercase tracking-tighter">
            “UNA MIRADA <br/> AL INTERIOR DE <br/> <span className="text-[#AA9614]">NOKIA”</span>
          </h2>
          <p className="text-[10px] sm:text-sm font-black text-gray-400 tracking-[0.2em] mb-1 sm:mb-2">(DAFT, 2007)</p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-1 sm:mt-2 w-full max-w-md px-2">
            <a 
              href="assets/caso-nokia.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-3 py-3 bg-white dark:bg-gray-800 border-2 border-red-500 text-red-600 dark:text-red-400 rounded-xl sm:rounded-2xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-red-50 transition-all shadow-sm"
            >
               <i className="fas fa-file-pdf text-sm sm:text-base"></i>
               Texto del Caso
            </a>
            <a 
              href="assets/video-nokia.mp4" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 sm:gap-3 px-3 py-3 bg-white dark:bg-gray-800 border-2 border-[#AA9614] text-[#AA9614] rounded-xl sm:rounded-2xl font-black text-[9px] sm:text-[10px] uppercase tracking-widest hover:bg-yellow-50 transition-all shadow-sm"
            >
               <i className="fas fa-play-circle text-sm sm:text-base"></i>
               Video Resumen
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 mt-2 sm:mt-4">
             {["Sistemas Abiertos", "Retroalimentación", "Ambiente"].map(tag => (
               <span key={tag} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full font-bold text-[7px] uppercase tracking-widest text-[#AA9614]">{tag}</span>
             ))}
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "BIBLIOGRAFÍA",
      content: (
        <div className="flex flex-col justify-center h-full space-y-3 sm:space-y-4 overflow-y-auto pr-1">
          <h3 className="text-base sm:text-lg font-black text-[#AA9614] uppercase tracking-widest border-b-2 border-[#3C3C3C] inline-block pb-0.5 self-start">Referencias:</h3>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"><strong>Volpentesta, J. R. (1999).</strong> Estudio de Sistemas de Información para la Administración. Buenos Aires: Buyatti.</li>
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"><strong>Daft, R. L. (2007).</strong> Teoría y diseño organizacional. 9a edición. México: Learning.</li>
            <li className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl"><strong>Senn, J. A. (1990).</strong> Sistemas de información para la administración. México: Iberoamérica.</li>
          </ul>
        </div>
      )
    }
  ];

  const next = () => {
    setHoveredPart(null);
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };
  const prev = () => {
    setHoveredPart(null);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex flex-col h-[75vh] md:h-[80vh] w-full max-w-5xl mx-auto pb-4">
      {/* Slide Container */}
      <div className="flex-grow bg-white dark:bg-[#1e1e1e] rounded-3xl sm:rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 relative group flex flex-col">
        
        {/* Progress bar top */}
        <div className="h-1 sm:h-1.5 bg-gray-100 dark:bg-gray-800 flex overflow-hidden w-full">
          <div 
            className="h-full bg-[#AA9614] transition-all duration-500 ease-out" 
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Content Area */}
        <div className="p-5 md:p-12 flex-grow flex flex-col overflow-hidden">
          <div className="mb-3 sm:mb-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 sm:pb-4">
            <span className="text-[9px] sm:text-[10px] font-black text-[#AA9614] uppercase tracking-[0.2em] sm:tracking-[0.4em]">
              {slides[currentSlide].title} • PÁG {slides[currentSlide].id}
            </span>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#AA9614] animate-pulse"></div>
               <span className="text-[8px] sm:text-[9px] font-black text-gray-400 tracking-widest hidden sm:inline">UNSAdA SISTEMAS 2024</span>
            </div>
          </div>
          
          <div className="flex-grow flex flex-col relative overflow-hidden">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Floating Navigation buttons for desktop */}
        <div className="absolute inset-y-0 left-0 w-16 md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden">
           <button onClick={prev} disabled={currentSlide === 0} className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg text-[#3C3C3C] dark:text-white disabled:opacity-20 transition-all hover:scale-110 active:scale-95">
             <i className="fas fa-chevron-left"></i>
           </button>
        </div>
        <div className="absolute inset-y-0 right-0 w-16 md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden">
           <button onClick={next} disabled={currentSlide === slides.length - 1} className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg text-[#3C3C3C] dark:text-white disabled:opacity-20 transition-all hover:scale-110 active:scale-95">
             <i className="fas fa-chevron-right"></i>
           </button>
        </div>
      </div>

      {/* Footer Controls - Optimized specifically for PC and Mobile separately */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-2">
        {/* Progress indicators - Centered on Mobile, Left on PC */}
        <div className="flex items-center gap-3 order-1 sm:order-none">
           <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">PROGRESO</div>
           <div className="flex gap-1 sm:gap-1.5">
             {slides.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#AA9614] w-4 sm:w-6' : 'bg-gray-200 dark:bg-gray-800 w-1 sm:w-2'}`}
               />
             ))}
           </div>
        </div>
        
        {/* Navigation Buttons - Full width on Mobile, Side-by-side on PC */}
        <div className="flex gap-2 w-full sm:w-auto order-2 sm:order-none">
           <button 
            onClick={prev}
            disabled={currentSlide === 0}
            className="flex-1 sm:w-10 h-12 sm:h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 hover:bg-[#3C3C3C] hover:text-white disabled:opacity-30 transition-all active:scale-95"
          >
            <i className="fas fa-chevron-left sm:text-xs"></i>
            <span className="sm:hidden ml-2 font-black text-[10px] uppercase tracking-widest">Atrás</span>
          </button>
          <button 
            onClick={next}
            disabled={currentSlide === slides.length - 1}
            className="flex-[2] sm:w-auto sm:px-6 h-12 sm:h-10 bg-[#3C3C3C] text-white rounded-xl font-black text-xs tracking-widest shadow-lg hover:bg-black transition-all active:scale-95 disabled:opacity-50 uppercase flex items-center justify-center gap-2"
          >
            Siguiente
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
