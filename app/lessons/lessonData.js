// Data used to generate lessons.

const lessonData = [
  {
    lessonId: 1,
    title: "Lesson 1",
    style: 1,
    words: ["bathroom", "where"],
    supportWords: ["is"],
    reviewWords: ["where", "bathroom"],
    phrases: ["where is the bathroom?"],
  },
  {
    lessonId: 2,
    title: "Lesson 2",
    style: 2,
    words: ["excuse_me", "thank_you"],
    supportWords: [],
    reviewWords: ["where", "bathroom"],
    phrases: ["excuse_me where is the bathroom? thank_you."],
  },
  {
    lessonId: 3,
    title: "Lesson 3",
    style: 3,
    words: ["hello", "how_are_you"],
    supportWords: [],
    reviewWords: ["thank_you", "bathroom"],
    phrases: ["hello how_are_you", "excuse_me hello how_are_you"],
  },
  {
    lessonId: 4,
    title: "Lesson 4",
    style: 2,
    words: ["good", "please", "goodbye"],
    supportWords: ["and", "you"],
    reviewWords: ["hello", "how_are_you"],
    phrases: ["good and you"],
    subLesson: [
      {
        screenType: "prompt",
        screenSubType: "chat",
        instruction: "How would you respond?",
        phrase: "hola, cómo estás",
        choices: [
          { word: "adiós, por favor" },
          { word: "bien, y tú?", correct: "true" },
        ],
      },
    ],
  },
  {
    lessonId: 5,
    title: "Lesson 5",
    style: 4,
    words: ["open", "closed"],
    supportWords: ["yes", "no"],
    reviewWords: [],
    phrases: [],
    subLesson: [
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
    lessonId: 6,
    title: "Lesson 6",
    words: [],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    style: 4,
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
  {
    lessonId: 7,
    title: "Lesson 7",
    words: ["hello", "goodbye"],
    supportWords: [],
    reviewWords: [],
    phrases: [],
    style: 1,
    subLessons: [
      {
        screenType: "tip",
        tip: "Bananas are good for you. You should eat many bananas on your trip.",
        displayAfter: 2,
        word: "hello",
      },
      {
        screenType: "tip",
        tip: "Apples are good for you. You should eat many apples on your trip.",
        displayAfter: 1,
        word: "goodbye",
      },
    ],
  },
];

export default lessonData;
