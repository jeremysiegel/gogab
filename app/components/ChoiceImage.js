import React, { useState } from "react";
import { View, StyleSheet, Pressable, Icon } from "react-native";

function ChoiceImage(item) {
  const [selected, setSelected] = useState(false);
  const backgroundColor = item.name === selected ? "#6e3b6e" : "#f9c2ff";
  const color = item.name === selected ? "white" : "black";

  return (
    <Pressable
      key={item.name}
      onPress={() => {
        setAnswerIsCorrect(item.correct);
        setSelected(!selected);
        console.log(selected);
      }}
      style={{ backgroundColor: "red", padding: 10 }}
    >
      <Icon
        name={item.name}
        size={100}
        label={item.title}
        backgroundColor={colors.secondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChoiceImage;
