
import React, { useState } from 'react';
import { FlashcardData } from '../types';

interface FlashcardProps {
  data: FlashcardData;
}

const Flashcard: React.FC<FlashcardProps> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 h-72 w-full cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-[#AA9614]/30 transition-all">
          <h3 className="text-2xl font-black text-[#3C3C3C] dark:text-white text-center px-4 leading-tight mb-4">
            {data.term}
          </h3>
          <div className="h-1 w-12 bg-[#AA9614] rounded-full mb-6"></div>
          <div className="absolute bottom-6 flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <i className="fas fa-sync-alt mr-2"></i>
            <span>Click para descubrir</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 bg-[#3C3C3C] text-white border-4 border-[#AA9614] rounded-2xl shadow-2xl overflow-y-auto">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#AA9614] mb-4">
            {data.term}
          </h4>
          <p className="text-center text-lg leading-relaxed font-medium">
            {data.definition}
          </p>
          <div className="mt-6 flex items-center opacity-40 text-[10px] font-bold uppercase tracking-widest">
            <i className="fas fa-undo-alt mr-2"></i>
            <span>Volver</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Flashcard;
