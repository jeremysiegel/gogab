import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];
  console.log("data", data);
  const wordArray = data.word.split(" ");
  const learnWordArray = data.learnWord.split(" ");
  const helpTextArray = data.helpText.split(" ");

  const returnData = {
    wordArray: wordArray,
    learnWordArray: learnWordArray,
    helpTextArray: helpTextArray,
    ...data,
  };

  return returnData;
};

export default {
  getLessonData,
};
