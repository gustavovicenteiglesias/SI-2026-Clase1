
import React from 'react';
import { nokiaCaseText } from '../data';

const CaseStudy: React.FC = () => {
  const paragraphs = nokiaCaseText.trim().split('\n\n');
  const title = paragraphs[0];
  const body = paragraphs.slice(1);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="bg-[#3C3C3C] p-12 md:p-20 text-white relative border-b-8 border-[#AA9614]">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <i className="fas fa-mobile-alt text-[300px] -rotate-12"></i>
          </div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-[#AA9614] rounded text-xs font-black uppercase tracking-[0.3em] mb-8">
              ESTUDIO DE CASO
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight max-w-3xl">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="p-10 md:p-16">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-8 space-y-10 text-[#3C3C3C] dark:text-gray-300 text-xl leading-[1.8] font-medium text-justify">
              {body.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-6xl first-letter:font-black first-letter:text-[#AA9614] first-letter:mr-4 first-letter:float-left">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="md:col-span-4">
              <aside className="sticky top-32 space-y-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border-t-4 border-[#AA9614] shadow-sm">
                  <h4 className="text-[#3C3C3C] dark:text-white font-black text-xl mb-6 uppercase tracking-wider">
                    Análisis Sistémico
                  </h4>
                  <ul className="space-y-5 text-sm font-bold text-gray-600 dark:text-gray-400">
                    <li className="flex gap-4">
                      <i className="fas fa-exclamation-triangle text-[#AA9614] mt-1"></i>
                      <span>Falla de Entradas: No detectaron el mercado medio.</span>
                    </li>
                    <li className="flex gap-4">
                      <i className="fas fa-times-circle text-[#AA9614] mt-1"></i>
                      <span>Sistema Cerrado: Aislamiento de las señales del entorno.</span>
                    </li>
                    <li className="flex gap-4">
                      <i className="fas fa-sync-alt text-[#AA9614] mt-1"></i>
                      <span>Retroalimentación: Fallaron los mecanismos de ajuste.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl">
                  <p className="text-sm italic text-gray-500 leading-relaxed">
                    "La supervivencia de una organización depende de su capacidad para funcionar como un sistema abierto y adaptativo."
                  </p>
                </div>
              </aside>
            </div>
          </div>

          <div className="mt-20 bg-[#AA9614] p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 transition-transform group-hover:scale-150"></div>
            <h4 className="font-black text-3xl mb-6">Lección para el Estudiante</h4>
            <p className="text-xl leading-relaxed opacity-90 font-medium">
              Nokia ilustra que la <strong>homeostasis</strong> no es estática; requiere un intercambio vigoroso con el ambiente. Cuando un sistema deja de escuchar a su entorno, la <strong>entropía</strong> toma el control, conduciendo inevitablemente al desorden y la obsolescencia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
