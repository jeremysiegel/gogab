// Lesson style objects. Requires a styleId and sequence of exercises
// Each exercise requires screen type(s). Certain screens require a wordType.

const lessonStyles = [
  {
    styleId: 1,
    sequence: [
      {
        screens: ["newWord", "pickImage", "multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
        reverse: true,
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
        screens: ["pickImage"],
        wordType: ["words"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["supportWords"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
        reverse: true,
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
    styleId: 3,
    sequence: [
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
        wordType: ["reviewWords"],
        reverse: true,
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
      },
    ],
  },
  {
    styleId: 4,
    sequence: [],
    firstScreen: "prompt",
  },
];

export default lessonStyles;
