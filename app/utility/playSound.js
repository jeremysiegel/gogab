import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";

function playSound(filename) {
  const [sound, setSound] = useState();
  async function playSound() {
    if (filename) {
      const { sound } = await Audio.Sound.createAsync(filename);
      setSound(sound);

      await sound.playAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  playSound();
}

export default playSound;
