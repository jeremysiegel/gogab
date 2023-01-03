import React, { useState } from "react";
import AppText from "../../components/AppText";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import MatchingGame from "../../components/MatchingGame";
import getLessonData from "../../api/getLessonData";
import instructionText from "../../config/instructionText";

function MatchingScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);
  const instruction = instructionText[data.screenType];
  const [complete, setComplete] = useState(false);

  return (
    <LessonScreen
      lessonData={data}
      instruction={instruction}
      navigation={navigation}
      touched={complete}
    >
      <MatchingGame data={data.selections} setComplete={setComplete} />
    </LessonScreen>
  );
}

export default MatchingScreen;
