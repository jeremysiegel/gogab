import lessonData from "../lessons/lessonData";

function getLessonData(id) {
  let data = [];

  lessonData.forEach((element) => {
    if (element.lessonId === id) {
      data = element;
    }
  });
  let lesson = {};
  let excerciseNumber = 1;

  data.words.forEach((element) => {
    lesson[excerciseNumber] = { screenType: "newWord", word: element };
    excerciseNumber++;
    lesson[excerciseNumber] = { screenType: "pickImage", word: element };
    excerciseNumber++;
    lesson[excerciseNumber] = {
      screenType: "multipleChoice",
      word: element,
    };
    excerciseNumber++;
  });
  data.supportWords.forEach((element) => {
    lesson[excerciseNumber] = {
      screenType: "multipleChoice",
      word: element,
    };
    excerciseNumber++;
  });

  for (var i = 0; i < data.reviewWords.length; i++) {
    lesson[excerciseNumber] = {
      screenType: "multipleChoice",
      word: data.reviewWords[i],
      reverse: true,
    };
    excerciseNumber++;
  }

  lesson[excerciseNumber] = { screenType: "matching" };
  excerciseNumber++;

  for (var i = 0; i < data.phrases.length; i++) {
    lesson[excerciseNumber] = {
      screenType: "sentenceBuilder",
      word: data.phrases[i],
      reverse: true,
    };
    excerciseNumber++;
  }
  return lesson;
}

export default getLessonData;
