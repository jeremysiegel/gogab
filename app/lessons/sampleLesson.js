const sampleLesson = {
  1: {
    screenType: "newWord",
    word: "bathroom",
    transliteration: "banyo",
    learnWord: "baño",
    nextLesson: 2,
  },
  2: {
    screenType: "reviewWord",
    word: "bathroom",
    transliteration: "banyo",
    learnWord: "baño",
    nextLesson: 3,
    iconSelections: [
      {
        name: "bus",
        title: "bus",
        correct: false,
      },
      {
        name: "umbrella",
        title: "umbrella",
        correct: false,
      },
      {
        name: "toilet",
        title: "bathroom",
        correct: true,
      },
    ],
  },
  3: {
    screenType: "testWord",
    learnWord: "baño",
    nextLesson: 4,
    boxSelections: [
      {
        name: "bus",
        title: "bus",
        correct: false,
      },
      {
        name: "umbrella",
        title: "umbrella",
        correct: false,
      },
      {
        name: "toilet",
        title: "bathroom",
        correct: true,
      },
      {
        name: "tree",
        title: "tree",
        correct: false,
      },
    ],
  },
  4: {
    screenType: "newWord",
    word: "Where",
    transliteration: "d-own-day",
    learnWord: "dónde",
    nextLesson: 5,
  },
  5: {
    screenType: "reviewWord",
    word: "Where",
    transliteration: "d-own-day",
    learnWord: "dónde",
    nextLesson: 6,
    iconSelections: [
      {
        name: "bus",
        title: "bus",
        correct: false,
      },
      {
        name: "question",
        title: "where",
        correct: true,
      },
      {
        name: "toilet",
        title: "bathroom",
        correct: false,
      },
    ],
  },
  6: {
    screenType: "testWord",
    learnWord: "dónde",
    nextLesson: 1,
    boxSelections: [
      {
        name: "bus",
        title: "bus",
        correct: false,
      },
      {
        name: "question",
        title: "Where",
        correct: true,
      },
      {
        name: "toilet",
        title: "bathroom",
        correct: false,
      },
      {
        name: "tree",
        title: "tree",
        correct: false,
      },
    ],
  },
};

export default sampleLesson;
