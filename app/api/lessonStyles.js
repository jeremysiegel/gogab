// Lesson style objects. Requires a styleId and sequence of exercises
// Each exercise requires screen type(s). Certain screens require a wordType.
// If there are no screens in the sequence, must set "firstScreen"
const lessonStyles = [
  {
    styleId: 1,
    sequence: [
      {
        screens: ["newWord", "pickImage"],
        wordType: ["words"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
        reverse: true,
      },
    ],
  },
  {
    styleId: 2,
    sequence: [
      {
        screens: ["newWord", "multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["pickImage"],
        wordType: ["reviewWords"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 3,
    sequence: [
      {
        screens: ["pickImage"],
        wordType: ["reviewWords"],
        reverse: true,
      },
      {
        screens: ["newWord", "pickImage"],
        wordType: ["words"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 4,
    sequence: [
      {
        screens: ["pickImage", "multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },

      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 5,
    sequence: [
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
        reverse: true,
      },
      {
        screens: ["pickImage", "multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },

      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 6,
    sequence: [
      {
        screens: ["newWord", "pickImage"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["pickImage"],
        wordType: ["reviewWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 7,
    sequence: [
      {
        screens: ["pickImage"],
        wordType: ["reviewWords"],
      },
      {
        screens: ["newWord", "pickImage"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 8,
    sequence: [
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
      {
        screens: ["newWord", "multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 9,
    sequence: [],
    firstScreen: "prompt",
  },
];

export default lessonStyles;
