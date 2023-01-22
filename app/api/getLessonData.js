import sampleLesson from "../lessons/sampleLesson";

const getLessonData = (id) => {
  const data = sampleLesson[id];
  let lessonData = {};
  let excerciseNumber = 1;

  data.words.forEach((element) => {
    lessonData[excerciseNumber] = { screenType: "newWord", word: element };
    excerciseNumber++;
    lessonData[excerciseNumber] = { screenType: "pickImage", word: element };
    excerciseNumber++;
    lessonData[excerciseNumber] = {
      screenType: "multipleChoice",
      word: element,
    };
    excerciseNumber++;
  });
  data.supportWords.forEach((element) => {
    lessonData[excerciseNumber] = {
      screenType: "multipleChoice",
      word: element,
    };
    excerciseNumber++;
  });

  for (var i = 0; i < data.reviewWords.length; i++) {
    lessonData[excerciseNumber] = {
      screenType: "multipleChoice",
      word: data.reviewWords[i],
      reverse: true,
    };
    excerciseNumber++;
  }

  lessonData[excerciseNumber] = { screenType: "matching" };
  excerciseNumber++;

  for (var i = 0; i < data.phrases.length; i++) {
    lessonData[excerciseNumber] = {
      screenType: "sentenceBuilder",
      word: data.phrases[i],
      reverse: true,
    };
    excerciseNumber++;
  }
  return lessonData;
};

export default getLessonData;
