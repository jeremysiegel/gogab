const sampleLesson = {
  1: {
    screenType: "newWord",
    word: "bathroom",
    nextExercise: 8,
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
    word: "Where is the bathroom?",
    extra: "decoy1 decoy2 my",
    nextExercise: 1,
  },
};

export default sampleLesson;
