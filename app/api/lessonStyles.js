// Lesson style objects. Requires a styleId and sequence of exercises
// Each exercise requires screen type(s). Certain screens require a wordType.

/*

Lesson styles:

1. Short intro: newWord pickImage
2. newWord first
3. reviewWord pickImage first
4. No newWord for words
5. reviewWord MC first
6. newWord pickImage, reviewword pickimage
7. reviewWord pickImage, newWord pickImage
8. all MC
9. firstScreen prompt, no words

*/

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
    sequence: [{ screens: ["prompt"] }],
  },
  {
    styleId: 10,
    sequence: [{ screens: ["review"] }],
  },
];

export default lessonStyles;
