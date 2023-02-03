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
        instruction: "What would the sign below mean?",
        phrase: "Abierto" + "\n" + "9-10",
        choices: [
          { word: "Closed from 9-10" },
          { word: "Open from 9-10", correct: "true" },
        ],
      },
      {
        screenType: "prompt",
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
    words: ["open", "closed"],
    supportWords: ["yes", "no"],
    reviewWords: [],
    phrases: [],
    style: 5,
  },
];

export default lessonData;
