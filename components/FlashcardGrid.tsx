
import React from 'react';
import { flashcards } from '../data';
import Flashcard from './Flashcard';

const FlashcardGrid: React.FC = () => {
  // Group flashcards by category
  const categories = Array.from(new Set(flashcards.map(card => card.category)));

  return (
    <div className="space-y-12">
      <div className="mb-12 border-b-2 border-gray-100 pb-6">
        <h2 className="text-4xl font-black text-[#3C3C3C] dark:text-white">Guía de Conceptos</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg italic">Explora los temas fundamentales divididos por secciones.</p>
      </div>

      {categories.map((category) => (
        <section key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-2 bg-[#AA9614] rounded-full"></div>
            <h3 className="text-2xl font-black text-[#3C3C3C] dark:text-gray-200 uppercase tracking-wider">
              {category}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flashcards
              .filter(card => card.category === category)
              .map((card) => (
                <Flashcard key={card.id} data={card} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default FlashcardGrid;
