// Lesson style objects. Requires a styleId and sequence of exercises
// Each exercise requires screen type(s). Certain screens require a wordType.

/*

Lesson styles:

1. pickImage, multipleChoice
2. multipleChoice, pickImage
3. pickImage reverse, multipleChoice reverse
4. multipleChoice reverse, pickImage reverse
5. pickImage reverse, multipleChoise
6. multipleChoice, pickImage reverse
7. pickImage, multipleChoice reverse
8. multipleChoice reverse, pickImage
9. firstScreen prompt, no words
10. Review

*/

const lessonStyles = [
  {
    styleId: 1,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
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
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 2,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 3,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
        reverse: true,
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
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 4,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
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
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 5,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
        reverse: true,
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
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 6,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
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
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 7,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
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
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },
  {
    styleId: 8,
    sequence: [
      {
        screens: ["newWord"],
        wordType: ["phrases"],
      },
      {
        screens: ["multipleChoice"],
        wordType: ["words"],
        reverse: true,
      },
      {
        screens: ["pickImage"],
        wordType: ["words"],
      },
      {
        screens: ["matching"],
      },
      {
        screens: ["sentenceBuilder"],
        wordType: ["phrases"],
        reverse: true,
      },
      {
        screens: ["multipleChoice"],
        wordType: ["reviewWords"],
      },
    ],
  },

  {
    styleId: 9,
    sequence: [{ screens: ["prompt"] }],
  },
  {
    styleId: 10,
    sequence: [{ screens: ["review"] }],
  },
];

export default lessonStyles;
