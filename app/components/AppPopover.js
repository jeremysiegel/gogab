import React from "react";
import { Text, StatusBar, View } from "react-native";
import { Popover } from "native-base";
import defaultStyles from "../config/styles";

// Creates popover that displays tooltip when pressed.

function AppPopover({
  style,
  underlineStyle,
  displayText,
  popoverText,
  secondPopoverText,
  key,
  onOpen,
}) {
  return (
    <Popover
      onOpen={onOpen}
      offset={StatusBar.currentHeight}
      trigger={(triggerProps) => {
        return (
          <View style={underlineStyle}>
            <Text style={[defaultStyles.text, style]} {...triggerProps}>
              {displayText}
            </Text>
          </View>
        );
      }}
    >
      <Popover.Content>
        <Popover.Arrow />
        <Popover.Header _text={defaultStyles.popoverText}>
          {popoverText}
        </Popover.Header>
        <Popover.Header _text={defaultStyles.popoverText}>
          {secondPopoverText}
        </Popover.Header>
      </Popover.Content>
    </Popover>
  );
}

export default AppPopover;
