import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import colors from "../config/colors";
import { createAudioPlayer } from "expo-audio";

// Creates an UI element that changes background color if selected.

function Selectable({
  children,
  onPress,
  name,
  selected,
  style,
  data,
  playAudio = false,
}) {
  const backgroundColor = selected ? colors.selected : undefined;
  const [player, setPlayer] = useState();

  let audio = "";

  try {
    audio = data.audio;
  } catch (error) {
    console.log(error);
  }

  function playSound() {
    if (audio && playAudio) {
      try {
        const newPlayer = createAudioPlayer(audio);
        setPlayer(newPlayer);
        newPlayer.play();
      } catch (error) {
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    return player
      ? () => {
          player.remove();
        }
      : undefined;
  }, [player]);

  return (
    <Pressable
      key={name}
      onPress={() => {
        onPress();
        playSound();
      }}
      style={[{ backgroundColor: backgroundColor }, style]}
    >
      {children}
    </Pressable>
  );
}

export default Selectable;
