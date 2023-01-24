const lessonStyles = [
  {
    styleId: 1,
    firstScreen: "newWord",
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
    firstScreen: "pickImage",
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
];

export default lessonStyles;
