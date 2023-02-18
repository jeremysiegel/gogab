export default prompts = [
  {
    promptId: 1,
    screenType: "prompt",
    screenSubType: "chat",
    instruction: "How would you respond?",
    phrase: "hola, cómo estás?",
    choices: [
      { word: "hola, por favor?" },
      { word: "bien, y tú?", correct: true },
    ],
  },
  {
    promptId: 2,
    screenType: "prompt",
    screenSubType: "chat",
    instruction: "How would you respond?",
    phrase: "adios",
    choices: [{ word: "hola" }, { word: "hasta luego", correct: true }],
  },
];
