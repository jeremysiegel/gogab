import React from "react";
import { Text, StatusBar, View, StyleSheet } from "react-native";
import { Popover } from "native-base";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppPopover({ displayText, popoverText }) {
  return (
    <View style={styles.container}>
      <Popover
        offset={StatusBar.currentHeight}
        trigger={(triggerProps) => {
          return (
            <Text
              style={[defaultStyles.text, styles.displayText]}
              {...triggerProps}
            >
              {displayText}
            </Text>
          );
        }}
      >
        <Popover.Content>
          <Popover.Arrow />
          <Popover.Header _text={defaultStyles.popoverText}>
            {popoverText}
          </Popover.Header>
        </Popover.Content>
      </Popover>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
  },
  displayText: {
    color: colors.blue,
    textDecorationLine: "underline",
  },
});

export default AppPopover;
