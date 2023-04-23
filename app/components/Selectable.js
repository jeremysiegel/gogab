import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import colors from "../config/colors";
import { Audio } from "expo-av";

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
  const [sound, setSound] = useState();

  let audio = "";

  try {
    audio = data.audio;
  } catch (error) {
    console.log(error);
  }

  async function playSound() {
    if (audio && playAudio) {
      try {
        const { sound } = await Audio.Sound.createAsync(audio);
        setSound(sound);

        await sound.playAsync();
      } catch (error) {
        console.log(error);
      }
    }
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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
