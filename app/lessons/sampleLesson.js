const sampleLesson = {
  1: {
    screenType: "newWord",
    word: "bathroom",
    nextExercise: 2,
  },

  2: {
    screenType: "pickImage",
    word: "bathroom",
    nextExercise: 3,
  },
  3: {
    screenType: "multipleChoice",
    word: "bathroom",
    nextExercise: 7,
  },
  /*
  4: {
    screenType: "newWord",
    word: "where",
    helpText: "d-own-day",
    learnWord: "dónde",
    nextExercise: 5,
  },
  5: {
    screenType: "pickImage",
    word: "where",
    helpText: "d-own-day",
    learnWord: "dónde",
    nextExercise: 6,
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
    nextExercise: 7,
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
    nextExercise: 8,
  },

  8: {
    screenType: "sentenceBuilder",
    word: "Please excuse my dear aunt Sally",
    extra: "decoy1 decoy2 my",
    learnWord: "lease xcuse y ear unt ally",
    helpText: "Please excuse my dear aunt Sally",
    nextExercise: 1,
  },
};

export default sampleLesson;
