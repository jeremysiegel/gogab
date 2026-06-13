import { createAudioPlayer } from "expo-audio";

// Plays an audio asset once, waiting for the source to finish loading first.
//
// Works around an expo-audio bug on Android *release* builds (expo/expo#34555,
// #40448) where calling player.play() before the source is loaded is silently
// dropped — audio works in dev/debug but is silent in the APK. We retry play()
// on every status update until the player reports loaded, playing only once.
//
// Returns the player so callers can player.remove() it on unmount.
export default function playSound(audio) {
  if (!audio) return null;
  let player;
  try {
    player = createAudioPlayer(audio);
    let started = false;
    const tryPlay = () => {
      if (!started && player.isLoaded) {
        started = true;
        player.play();
      }
    };
    player.addListener("playbackStatusUpdate", tryPlay);
    // Fast path for debug builds where the asset is already loaded.
    tryPlay();
  } catch (error) {
    console.log(error);
  }
  return player;
}
