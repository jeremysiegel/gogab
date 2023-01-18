import React, { useState, useEffect } from "react";
import ExerciseScreen from "../../components/exerciseScreen/ExerciseScreen";
import MatchingGame from "../../components/MatchingGame";
import getExerciseData from "../../api/getExerciseData";
import instructionText from "../../config/instructionText";
import CheckAnswerModal from "../../components/exerciseScreen/CheckAnswerModal";

function MatchingScreen({ route, navigation }) {
  const [data, setData] = useState();
  const [instruction, setInstruction] = useState();
  useEffect(() => {
    const setUpData = getExerciseData.getExerciseData(
      route.params.exerciseId,
      true
    );
    setData(setUpData);
    setInstruction(instructionText[setUpData.screenType]);
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  if (data === undefined) {
    return <></>;
  } else {
    return (
      <ExerciseScreen
        exerciseData={data}
        instruction={instruction}
        navigation={navigation}
        footer={false}
        footerModalVisible={modalVisible}
      >
        <MatchingGame data={data.selections} setComplete={setModalVisible} />
        <CheckAnswerModal
          navigation={navigation}
          nextExercise={data.nextExercise}
          nextExerciseType={data.nextExerciseType}
          correctAnswer={true}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </ExerciseScreen>
    );
  }
}

export default MatchingScreen;
