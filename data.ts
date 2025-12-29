
import { FlashcardData, QuizQuestion } from './types';

export const nokiaVideoSummary = [
  {
    title: "El Gigante Imbatible",
    desc: "En 1998, Nokia dominaba el 35% del mercado mundial. 1 de cada 3 celulares en el planeta era un Nokia.",
    icon: "fa-globe",
    color: "#AA9614"
  },
  {
    title: "La Apuesta Equivocada",
    desc: "Invirtieron millones en smartphones de gama alta, ignorando el segmento medio que pedía cámaras y pantallas a color accesibles.",
    icon: "fa-exclamation-triangle",
    color: "#3C3C3C"
  },
  {
    title: "El Derrumbe (2004)",
    desc: "En solo 6 años perdieron 15 puntos de cuota global. Sus acciones cayeron mientras Motorola y Samsung capturaban al público joven.",
    icon: "fa-chart-line-down",
    color: "#ef4444"
  },
  {
    title: "La Lección Aprendida",
    desc: "¿Los dispositivos que desarrollamos son los que el cliente desea? La innovación no sirve si el sistema se cierra a su ambiente.",
    icon: "fa-lightbulb",
    color: "#10b981"
  }
];

export const flashcards: FlashcardData[] = [
  { id: 1, category: "Definición", term: "Sistema", definition: "Conjunto organizado de elementos interrelacionados que interactúan entre sí y con su ambiente para alcanzar un objetivo común." },
  { id: 2, category: "Naturaleza", term: "Sistema Abstracto", definition: "Compuesto por elementos no tangibles como planes, ideas, software o teorías. Son creaciones de la mente humana." },
  { id: 3, category: "Naturaleza", term: "Sistema Físico", definition: "Conjunto de elementos materiales (hardware, máquinas, personas) que operan organizadamente para lograr un objetivo." },
  { id: 4, category: "Metodología", term: "Caja Negra", definition: "Estudio de un sistema analizando únicamente sus entradas y salidas cuando no se puede o no conviene determinar sus procesos internos." },
  { id: 5, category: "Control", term: "Feed-forward", definition: "Corriente de control en las entradas que detecta errores antes de que ingresen al proceso, actuando como filtro preventivo." },
  { id: 6, category: "Estructura", term: "Interfases", definition: "Elementos de interconexión situados en los límites de un sistema por los cuales se transfiere o coordina información entre subsistemas." },
  { id: 7, category: "Estructura", term: "Fragmentación", definition: "Capacidad de un sistema para factorizarse en subsistemas más simples para manejar la complejidad jerárquicamente." },
  { id: 8, category: "Estructura", term: "Simplificación", definition: "Proceso de ordenar subsistemas (agrupamiento o desacoplamiento) para reducir el número de interconexiones e interfases." },
  { id: 9, category: "Propiedades", term: "Sinergia", definition: "La acción conjunta de los componentes es superior a la suma de las actuaciones individuales. El todo es mayor que las partes." },
  { id: 10, category: "Propiedades", term: "Homeostasis", definition: "Capacidad de adaptación para mantener un equilibrio dinámico interno frente a cambios del entorno." },
  { id: 11, category: "Propiedades", term: "Entropía", definition: "Tendencia natural al desorden y desaparición. Los sistemas cerrados sucumben a ella por falta de intercambio con el medio." },
  { id: 12, category: "Control", term: "Retroalimentación Negativa", definition: "Mecanismo correctivo que reduce las desviaciones respecto al objetivo, promoviendo la estabilidad." },
  { id: 13, category: "Control", term: "Retroalimentación Positiva", definition: "Refuerza la dirección actual del sistema, amplificando el comportamiento y tendiendo a la desestabilización." },
  { id: 14, category: "Clasificación", term: "Sistema Abierto", definition: "Intercambia materia, energía e información con el ambiente. Es adaptativo y combate la entropía." }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Qué caracteriza a un Sistema Abstracto?",
    options: ["Está compuesto por elementos materiales", "Es una creación de la mente como planes o software", "No interactúa con el ambiente", "Es siempre predecible"],
    correctAnswer: 1,
    explanation: "Los sistemas abstractos son conceptuales (ideas, reglas, software) y requieren un sistema físico para ejecutarse."
  },
  {
    id: 2,
    question: "¿En qué consiste el método de 'Caja Negra'?",
    options: ["En ignorar las entradas", "En estudiar solo los procesos internos", "En analizar el sistema solo por sus entradas y salidas", "En cerrar el sistema al ambiente"],
    correctAnswer: 2,
    explanation: "Se usa cuando el interior es muy complejo o costoso de determinar analíticamente."
  },
  {
    id: 3,
    question: "La 'Retroalimentación Positiva' se diferencia de la Negativa en que:",
    options: ["Es mejor para el sistema", "Reduce las desviaciones", "Refuerza y amplifica la dirección actual del movimiento", "Solo ocurre en sistemas cerrados"],
    correctAnswer: 2,
    explanation: "La positiva confirma la dirección actual; la negativa es la que corrige desviaciones para mantener estabilidad."
  },
  {
    id: 4,
    question: "¿Qué es el 'Feed-forward'?",
    options: ["Control al final del proceso", "Control en las entradas para detectar errores preventivamente", "Una salida del sistema", "Un tipo de entropía"],
    correctAnswer: 1,
    explanation: "Actúa como filtro previo para evitar costos de procesar datos incorrectos en el sistema."
  },
  {
    id: 5,
    question: "Según el texto, ¿qué sucede cuando se desmiembra un sistema?",
    options: ["Sus partes conservan todas sus funciones", "Mejora el rendimiento individual", "Pierde sus propiedades esenciales", "Aumenta la sinergia"],
    correctAnswer: 2,
    explanation: "Las propiedades esenciales derivan de la interacción; al desmembrarse, el sistema pierde su identidad y propósito."
  },
  {
    id: 6,
    question: "¿Qué es una 'Interfase'?",
    options: ["Un límite infranqueable", "Un elemento de interconexión entre subsistemas", "Un tipo de software", "La salida final de un sistema social"],
    correctAnswer: 1,
    explanation: "Son intermediarios en los límites que permiten la transferencia de información o coordinación entre partes."
  },
  {
    id: 7,
    question: "¿Qué propiedad describe que 'el todo es más que la suma de sus partes'?",
    options: ["Entropía", "Sinergia", "Homeostasis", "Fragmentación"],
    correctAnswer: 1,
    explanation: "La sinergia es la propiedad donde la interacción produce un resultado superior al que lograrían las partes aisladas."
  },
  {
    id: 8,
    question: "La tendencia natural de un sistema al desorden y la desintegración se llama:",
    options: ["Entropía", "Homeostasis", "Inercia", "Retroalimentación"],
    correctAnswer: 0,
    explanation: "La entropía es el desgaste natural; los sistemas abiertos la combaten mediante el intercambio con el ambiente."
  },
  {
    id: 9,
    question: "¿Cuál es el objetivo principal de la Homeostasis?",
    options: ["Aumentar la producción", "Mantener un equilibrio dinámico interno", "Cerrar el sistema al exterior", "Eliminar todos los subsistemas"],
    correctAnswer: 1,
    explanation: "Es la capacidad de adaptación que permite al sistema mantener su equilibrio frente a perturbaciones del entorno."
  },
  {
    id: 10,
    question: "¿Quién es considerado el padre de la Teoría General de Sistemas?",
    options: ["Ludwig von Bertalanffy", "John von Neumann", "Russell Ackoff", "Norbert Wiener"],
    correctAnswer: 0,
    explanation: "Bertalanffy propuso la TGS como un marco integrador para todas las ciencias en la década de 1950."
  },
  {
    id: 11,
    question: "Un sistema que intercambia materia y energía con su entorno se clasifica como:",
    options: ["Sistema Cerrado", "Sistema Abierto", "Sistema Determinístico", "Sistema Abstracto"],
    correctAnswer: 1,
    explanation: "Los sistemas abiertos son permeables y dependen de su ambiente para sobrevivir y evolucionar."
  },
  {
    id: 12,
    question: "Un sistema 'Determinístico' se caracteriza por:",
    options: ["Tener un comportamiento imprevisible", "Funcionar de manera previsible y conocida", "Depender totalmente del azar", "No tener entradas"],
    correctAnswer: 1,
    explanation: "En un sistema determinístico, a partir de una entrada específica, siempre se puede predecir el resultado con certeza."
  },
  {
    id: 13,
    question: "Según Ackoff, ¿cuál es una condición para que un conjunto de elementos sea un sistema?",
    options: ["Cada parte debe ser independiente", "La conducta de cada parte afecta al todo", "El sistema debe ser siempre físico", "No debe haber subsistemas"],
    correctAnswer: 1,
    explanation: "Ackoff sostiene que la interdependencia es clave: lo que hace una parte afecta el desempeño global."
  },
  {
    id: 14,
    question: "En el caso Nokia, ¿cuál fue el principal error sistémico detectado?",
    options: ["Producir demasiados teléfonos baratos", "Falta de entendimiento de los cambios en el ambiente (mercado medio)", "Tener demasiada sinergia", "Ser un sistema demasiado abierto"],
    correctAnswer: 1,
    explanation: "Nokia se aisló de las señales del entorno (ambiente) y no ajustó sus procesos a la demanda real de los consumidores."
  },
  {
    id: 15,
    question: "¿Qué es la 'Simplificación' de un sistema?",
    options: ["Eliminar partes al azar", "Organizar subsistemas para reducir interconexiones complejas", "Convertir un sistema físico en abstracto", "Ignorar la retroalimentación"],
    correctAnswer: 1,
    explanation: "Se logra agrupando o desacoplando partes para manejar mejor la complejidad a través de menos interfases."
  },
  {
    id: 16,
    question: "¿Cuál es la función del 'Ambiente' en la TGS?",
    options: ["Es irrelevante para el sistema", "Rodea, influye y condiciona al sistema", "Es una parte interna del proceso", "Solo recibe salidas pero no envía entradas"],
    correctAnswer: 1,
    explanation: "El contexto o ambiente es todo lo externo que interactúa con el sistema, proveyendo recursos e imponiendo restricciones."
  }
];

export const nokiaCaseText = `Una mirada al interior de Nokia

Nokia se convirtió en el líder mundial de la micro telefonía celular en 1998, la gigantesca compañía finlandesa estaba lista para sacar del negocio a sus rivales para siempre. Pero para 2004, los productos que no se adaptaban a las necesidades de los consumidores y las tensas relaciones con sus principales clientes habían costado a Nokia casi 15 de su 35% de participación del mercado global, con lo que el crecimiento de sus ingresos se revirtió y las acciones cayeron en picada.

¿Qué salió mal? Una cosa, Nokia se olvidó del sector en alto crecimiento de los teléfonos celulares; el mercado de modelos de mediano alcance con cámaras y pantallas a color de alta resolución. Los líderes de Nokia optaron por invertir cientos de millones de dólares en el desarrollo de los "teléfonos inteligentes" que permitían a los clientes acceso a Internet, juegos de video, música y ver películas o programas de televisión. El problema fue que estos teléfonos eran demasiado voluminosos y costosos para muchos clientes, que comenzaron a cambiar a los modelos más económicos a manos de Motorola, Samsung y Siemens.

En consecuencia, se quedaron sin el segmento medio, que permitía a los clientes dotarse del teléfono aún cuando no estaban listos para un modelo de gama alta. El problema no era sólo de funcionalidad sino de imagen. Los consumidores consideraban los teléfonos de Nokia de tecnología desactualizada. Tampoco lograron forjar una alianza con las compañías telefónicas de Estados Unidos que les diera la misma fuerza que las empresas de la competencia. En América Latina, los clientes no estaban dispuestos a gastar mucho dinero en equipos que estuvieran atados a una sola empresa de telefonía móvil.

"Su actual situación es consecuencia de la falta de entendimiento de los mercados", afirmó un analista. "Una empresa con los recursos de Nokia no puede darse el lujo de desconocer lo que buscan los consumidores".

Para salir del problema, Nokia ha reforzado sus líneas avanzadas de teléfonos y ha comenzado a fabricar los modelos de gama media, con la esperanza de recuperar la participación de mercado. Para no repetir los errores del pasado, Nokia ha intentado estar más cerca de los consumidores para determinar con mayor precisión qué productos desean y en qué momento. Uno de los ejecutivos de Nokia afirmó que la empresa debe aprender de la experiencia, ya que la clave es: "¿Los dispositivos que Nokia está desarrollando son los que el cliente desea?".`;
