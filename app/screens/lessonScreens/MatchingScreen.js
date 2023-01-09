import React, { useState } from "react";
import LessonScreen from "../../components/lessonScreen/LessonScreen";
import MatchingGame from "../../components/MatchingGame";
import getLessonData from "../../api/getLessonData";
import instructionText from "../../config/instructionText";
import LessonFooter from "../../components/lessonScreen/LessonFooter";
import CheckAnswerModal from "../../components/lessonScreen/CheckAnswerModal";

function MatchingScreen({ route, navigation }) {
  const data = getLessonData.getLessonData(route.params.lessonId);
  const instruction = instructionText[data.screenType];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <LessonScreen
      lessonData={data}
      instruction={instruction}
      navigation={navigation}
      footer={false}
      footerModalVisible={modalVisible}
    >
      <MatchingGame data={data.selections} setComplete={setModalVisible} />
      <CheckAnswerModal
        navigation={navigation}
        nextLesson={data.nextLesson}
        nextLessonType={data.nextLessonType}
        correctAnswer={true}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </LessonScreen>
  );
}

export default MatchingScreen;
