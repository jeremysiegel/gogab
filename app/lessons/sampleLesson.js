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
    nextLesson: 7,
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
  /*
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
    nextLesson: 7,
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
  */
  7: {
    screenType: "matching",
    selections: [
      {
        word: "where",
        match: "donde",
      },
      {
        word: "bathroom",
        match: "bano",
      },
      {
        word: "is",
        match: "esta",
      },
      {
        word: "two",
        match: "dos",
      },
    ],
    nextLesson: 8,
  },

  8: {
    screenType: "sentenceBuilder",
    word: "Please excuse my dear aunt Sally",
    extra: "decoy1 decoy2 my",
    learnWord: "lease xcuse y ear unt ally",
    helpText: "Please excuse my dear aunt Sally",
    nextLesson: 1,
  },
};

export default sampleLesson;
