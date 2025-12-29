
import React, { useState } from 'react';
import { TabType } from './types';
import FlashcardGrid from './components/FlashcardGrid';
import Quiz from './components/Quiz';
import CaseStudy from './components/CaseStudy';
import Slideshow from './components/Slideshow';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('slides');
  
  // UNSAdA Official Colors
  const colors = {
    dorado: '#AA9614',
    gris: '#3C3C3C',
    blanco: '#FFFFFF'
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-[#1a1a1a] text-[#3C3C3C] dark:text-gray-100">
      {/* Header */}
      <header 
        className="text-white shadow-xl py-6 px-4 sticky top-0 z-50 border-b-4 border-[#AA9614]"
        style={{ backgroundColor: colors.gris }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg">
               <i className="fas fa-university text-3xl" style={{ color: colors.dorado }}></i>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight uppercase">Sistemas de Información</h1>
              <p className="text-xs text-gray-300 font-medium opacity-90 tracking-widest">UNSAdA - NOCIONES SOBRE SISTEMAS</p>
            </div>
          </div>

          <nav className="flex bg-black/20 rounded-xl p-1 border border-white/10 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('slides')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex-shrink-0 ${activeTab === 'slides' ? 'bg-[#AA9614] text-white shadow-lg' : 'hover:bg-white/10 text-gray-300'}`}
            >
              <i className="fas fa-desktop"></i>
              Clase
            </button>
            <button 
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex-shrink-0 ${activeTab === 'flashcards' ? 'bg-[#AA9614] text-white shadow-lg' : 'hover:bg-white/10 text-gray-300'}`}
            >
              <i className="fas fa-layer-group"></i>
              Fichas
            </button>
            <button 
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex-shrink-0 ${activeTab === 'quiz' ? 'bg-[#AA9614] text-white shadow-lg' : 'hover:bg-white/10 text-gray-300'}`}
            >
              <i className="fas fa-vial"></i>
              Quiz
            </button>
            <button 
              onClick={() => setActiveTab('case-study')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all flex-shrink-0 ${activeTab === 'case-study' ? 'bg-[#AA9614] text-white shadow-lg' : 'hover:bg-white/10 text-gray-300'}`}
            >
              <i className="fas fa-book-open"></i>
              Nokia
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full p-4 md:p-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'slides' && <Slideshow onNavigate={(tab) => setActiveTab(tab)} />}
          {activeTab === 'flashcards' && <FlashcardGrid />}
          {activeTab === 'quiz' && <Quiz />}
          {activeTab === 'case-study' && <CaseStudy />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-1 font-bold tracking-widest text-[#3C3C3C] dark:text-gray-400">UNSAdA</p>
          <p className="text-sm font-medium opacity-60">Universidad Nacional de San Antonio de Areco</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
