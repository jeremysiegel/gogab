const sampleLesson = {
  1: {
    screenType: "newWord",
    word: "bathroom",
    helpText: "banyo",
    learnWord: "baño",
    nextLesson: 2,
  },
  2: {
    screenType: "pickImage",
    word: "bathroom",
    helpText: "banyo",
    learnWord: "baño",
    nextLesson: 3,
    selections: [
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
    screenType: "multipleChoice",
    word: "bathroom",
    learnWord: "baño",
    helpText: "banyo",
    nextLesson: 4,
    selections: [
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
    word: "where",
    helpText: "d-own-day",
    learnWord: "dónde",
    nextLesson: 5,
  },
  5: {
    screenType: "pickImage",
    word: "where",
    helpText: "d-own-day",
    learnWord: "dónde",
    nextLesson: 6,
    selections: [
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
    screenType: "multipleChoice",
    learnWord: "dónde",
    word: "where",
    helpText: "d-own-day",
    nextLesson: 1,
    selections: [
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
