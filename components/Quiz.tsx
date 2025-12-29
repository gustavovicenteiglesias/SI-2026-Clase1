
import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data';
import { QuizQuestion } from '../types';

const Quiz: React.FC = () => {
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Function to shuffle and pick 6 questions
  const initializeQuiz = () => {
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    setActiveQuestions(shuffled.slice(0, 6));
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  // Load questions on mount
  useEffect(() => {
    initializeQuiz();
  }, []);

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null || activeQuestions.length === 0) return;
    if (selectedOption === activeQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < activeQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  if (activeQuestions.length === 0) {
    return <div className="text-center py-20 font-black text-gray-400">Cargando evaluación...</div>;
  }

  if (quizComplete) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#1e1e1e] p-10 rounded-3xl shadow-2xl text-center border-t-8 border-[#AA9614]">
        <div className="mb-8">
          <div className="inline-block p-6 rounded-full bg-gray-50 dark:bg-gray-800 text-[#AA9614] text-5xl mb-6 shadow-inner">
            <i className={`fas ${percentage >= 70 ? 'fa-award' : 'fa-graduation-cap'}`}></i>
          </div>
          <h2 className="text-4xl font-black text-[#3C3C3C] dark:text-white">Resultado</h2>
          <p className="text-gray-500 mt-2 font-medium italic">Evaluación de Teoría General de Sistemas</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-10 border border-gray-100 dark:border-gray-700">
          <div className="text-7xl font-black text-[#3C3C3C] dark:text-white mb-2">{score} / {activeQuestions.length}</div>
          <div className="text-xl font-bold text-[#AA9614] uppercase tracking-widest">{percentage}% de aciertos</div>
        </div>

        <button 
          onClick={initializeQuiz}
          className="w-full bg-[#AA9614] hover:bg-[#8e7d10] text-white py-5 rounded-xl font-black text-xl transition-all shadow-xl active:scale-95"
        >
          Reiniciar Evaluación (Nuevas Preguntas)
        </button>
      </div>
    );
  }

  const question = activeQuestions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[#1e1e1e] p-6 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#AA9614] uppercase tracking-[0.3em]">RETO ACADÉMICO ALEATORIO</span>
          <span className="text-lg font-black text-gray-400">{currentQuestion + 1} de {activeQuestions.length}</span>
        </div>
        <div className="h-3 w-48 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#AA9614] transition-all duration-700 ease-out"
            style={{ width: `${((currentQuestion + 1) / activeQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-[#3C3C3C] dark:text-white mb-12 leading-tight">
        {question.question}
      </h3>

      <div className="space-y-4 mb-12">
        {question.options.map((option, index) => {
          let styles = "relative border-2 border-gray-100 dark:border-gray-800 p-5 rounded-xl flex items-center transition-all cursor-pointer ";
          
          if (selectedOption === index) {
            styles += "border-[#AA9614] bg-gray-50 dark:bg-gray-800 ring-2 ring-[#AA9614]/20 ";
          } else {
            styles += "hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50/50 ";
          }
          
          if (showResult) {
            styles += "cursor-default ";
            if (index === question.correctAnswer) {
              styles = "relative border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 p-5 rounded-xl flex items-center text-emerald-700 dark:text-emerald-400 font-bold ";
            } else if (selectedOption === index) {
              styles = "relative border-2 border-rose-500 bg-rose-50 dark:bg-rose-900/20 p-5 rounded-xl flex items-center text-rose-700 dark:text-rose-400 font-bold ";
            } else {
              styles += "opacity-40 ";
            }
          }

          return (
            <div key={index} className={styles} onClick={() => handleOptionSelect(index)}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-5 font-black flex-shrink-0 ${selectedOption === index ? 'bg-[#AA9614] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                {String.fromCharCode(65 + index)}
              </div>
              <span className="text-lg font-medium">{option}</span>
            </div>
          );
        })}
      </div>

      {showResult && (
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-8 border-[#AA9614] animate-in slide-in-from-left duration-300">
          <h4 className="text-xs font-black uppercase tracking-widest text-[#AA9614] mb-2">Fundamento Teórico</h4>
          <p className="text-[#3C3C3C] dark:text-gray-300 text-lg italic leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {!showResult ? (
        <button 
          onClick={handleCheck}
          disabled={selectedOption === null}
          className={`w-full py-5 rounded-xl font-black text-xl transition-all shadow-xl ${selectedOption === null ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed' : 'bg-[#3C3C3C] text-white hover:bg-black'}`}
        >
          Verificar Respuesta
        </button>
      ) : (
        <button 
          onClick={handleNext}
          className="w-full bg-[#AA9614] hover:bg-[#8e7d10] text-white py-5 rounded-xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3"
        >
          {currentQuestion + 1 < activeQuestions.length ? 'Continuar' : 'Ver Resultados'}
          <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
};

export default Quiz;
