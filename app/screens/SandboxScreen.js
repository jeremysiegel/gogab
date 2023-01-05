import React, { useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import DuoDragDrop, {
  Word,
  Lines,
  Placeholder,
  DuoDragDropRef,
} from "@jamsch/react-native-duo-drag-drop";
import Screen from "../components/Screen";
import colors from "../config/colors";

function SandboxScreen(props) {
  const ref = useRef(DuoDragDropRef);

  return (
    <Screen>
      <View style={styles.container}>
        <DuoDragDrop
          ref={ref}
          words={[
            "Juan",
            "She",
            "apples",
            "today",
            "with",
            "eats",
            "her",
            "another",
          ]}
          wordBankOffsetY={10}
          renderWord={() => (
            <Word
              containerStyle={{
                backgroundColor: colors.selected,
                borderColor: colors.selected,
              }}
              textStyle={{
                color: colors.light,
              }}
            />
          )}
          renderLines={(props) => (
            <Lines
              numLines={0}
              containerStyle={{
                backgroundColor: "transparent",
              }}
            />
          )}
        />
      </View>
      <Button
        title="Get words"
        onPress={() => {
          const answered = ref.current?.getAnsweredWords();
          console.log(answered); // ["Juan", "She"]
          const words = ref.current?.getWords();
          console.log(words); // { answered: ["Juan", "She"], bank: ["today", "with", ...] }
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20, flex: 1 },
});

export default SandboxScreen;
