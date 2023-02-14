// Data used to generate lessons.

const lessonData = [
  {
    lessonId: 1,
    title: "Lesson 1",
    style: 1,
    words: ["bathroom", "where"],
    supportWords: ["is"],
    phrases: ["where is the bathroom?"],
  },

  {
    lessonId: 2,
    title: "Lesson 2",
    style: 3,
    words: ["hello", "good_morning", "how_are_you"],
    supportWords: [],
    reviewWords: ["bathroom", "where"],
    phrases: ["hello good_morning", "hello how_are_you"],
    subLessons: [
      {
        screenType: "tip",
        title: "Greetings in Spanish",
        tip: "In Spanish there are different greetings for different times of day. We'll get to other time specific greetings later.",
        word: "good_morning",
        displayAfter: 1,
      },
    ],
  },

  {
    lessonId: 3,
    title: "Lesson 3",
    style: 3,
    words: ["good", "please", "goodbye"],
    supportWords: ["and", "you"],
    reviewWords: ["hello", "how_are_you"],
    phrases: ["good and you"],
    endLesson: [
      {
        screenType: "prompt",
        screenSubType: "chat",
        instruction: "How would you respond?",
        phrase: "hola, cómo estás",
        choices: [
          { word: "adiós, por favor" },
          { word: "bien, y tú?", correct: true },
        ],
      },
    ],
  },
  {
    lessonId: 4,
    title: "Lesson 4",
    style: 2,
    words: ["excuse_me", "thank_you"],
    supportWords: [],
    reviewWords: ["good", "please", "goodbye", "hello"],
    phrases: ["excuse_me where is the bathroom? thank_you."],
    endLesson: [
      {
        screenType: "prompt",
        screenSubType: "chat",
        instruction: "What should you say?",
        phrase: "I'm leaving now.",
        choices: [
          { word: "adiós", correct: true },
          { word: "hola" },
          { word: "perdón" },
        ],
      },
    ],
  },
  /*
  {
    lessonId: 5,
    title: "Lesson 5",
    style: 3,
    words: [],
    supportWords: [],
    reviewWords: ["hello", "thank_you", "please", "goodbye"],
    phrases: ["hello how_are_you", "good, and you?"],
  },
  {
    lessonId: 6,
    title: "Lesson 6",
    style: 2,
    words: ["open", "closed"],
    supportWords: ["yes", "no"],
    reviewWords: [],
    phrases: [],
    endLesson: [
      {
        screenType: "prompt",
        screenSubType: "sign",
        instruction: "What would the sign below mean?",
        phrase: "Abierto" + "\n" + "9-10",
        choices: [
          { word: "Closed from 9-10" },
          { word: "Open from 9-10", correct: "true" },
        ],
      },
      {
        screenType: "prompt",
        screenSubType: "sign",
        instruction: "What would the sign below mean?",
        phrase: "Cerrado" + "\n" + "10-11",
        choices: [
          { word: "Closed from 10-11", correct: "true" },
          { word: "Open from 10-11" },
        ],
      },
    ],
  },
  {
    lessonId: 7,
    title: "Lesson 7",
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    style: 5,
    endLesson: [
      {
        screenType: "prompt",
        screenSubType: "sign",
        instruction: "What would the sign below mean?",
        phrase: "Abierto" + "\n" + "9-10",
        choices: [
          { word: "Closed from 9-10" },
          { word: "Open from 9-10", correct: "true" },
        ],
      },
      {
        screenType: "prompt",
        screenSubType: "chat",
        instruction: "Choose a response:",
        phrase: "Hola como estas?",
        choices: [
          { word: "Bien y tu", correct: "true" },
          { word: "por favor" },
        ],
      },

      {
        screenType: "prompt",
        screenSubType: "icon",
        instruction: "What would the sign below mean?",
        phrase: "Entrada",
        icon: "arrow-left",
        choices: [{ word: "Looey", correct: "true" }, { word: "Rooey" }],
      },
    ],
  },
  */
];

export default lessonData;
