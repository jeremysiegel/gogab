import React from "react";
import { View, StyleSheet } from "react-native";

import WordList from "./WordList";
import Word from "./Word";

const words = [
  { id: 1, word: "Please" },
  { id: 8, word: "excuse" },
  { id: 2, word: "my" },
  { id: 7, word: "dear" },
  { id: 6, word: "aunt" },
  { id: 9, word: "sally" },
];

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <WordList>
        {words.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
  },
});

export default Duolingo;
