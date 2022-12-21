import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];
  const nextLessonType = sampleLesson[data.nextLesson].screenType;

  const wordArray = data.word.split(" ");
  const learnWordArray = data.learnWord.split(" ");
  const helpTextArray = data.helpText.split(" ");

  const returnData = {
    wordArray: wordArray,
    learnWordArray: learnWordArray,
    helpTextArray: helpTextArray,
    nextLessonType: nextLessonType,
    ...data,
  };

  const dataObjects = ["word", "learnWord", "helpText"];

  dataObjects.forEach((element) => {
    if (data[element]) {
      let splitElement = null;
      splitElement = data[element].split(" ");
      const splitElementName = element + "Array";
      returnData[splitElementName] = splitElement;
    }
  });

  return returnData;
};

export default {
  getLessonData,
};
