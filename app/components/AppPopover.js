import React from "react";
import { Text, StatusBar, View, StyleSheet, Pressable } from "react-native";
import { Popover } from "native-base";
import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppPopover({ style, displayText, popoverText }) {
  return (
    <Pressable style={styles.container} hitSlop={20}>
      <Popover
        offset={StatusBar.currentHeight}
        trigger={(triggerProps) => {
          return (
            <Text
              style={[defaultStyles.text, styles.displayText, style]}
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
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  displayText: {
    color: colors.primary,
    // textDecorationLine: "underline",
  },
});

export default AppPopover;
