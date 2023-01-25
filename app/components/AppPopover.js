import React from "react";
import { Text, StatusBar } from "react-native";
import { Popover } from "native-base";
import defaultStyles from "../config/styles";

// Creates popover that displays tooltip when pressed.

function AppPopover({ style, displayText, popoverText }) {
  return (
    <Popover
      offset={StatusBar.currentHeight}
      trigger={(triggerProps) => {
        return (
          <Text style={[defaultStyles.text, style]} {...triggerProps}>
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
  );
}

export default AppPopover;
