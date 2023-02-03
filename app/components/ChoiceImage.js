import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";

// Creates a selectable icon with title.

function ChoiceImage({
  item,
  title,
  onPress,
  selectedItem,
  labelSize,
  fontWeight,
}) {
  const [selected, setSelected] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setSelected(selectedItem === title);
  });

  return (
    <Selectable
      name={title}
      selected={selected}
      onPress={onPress}
      style={[
        defaultStyles.border,
        styles.selectableItem,
        { height: 0.24 * height, width: 0.39 * width },
      ]}
    >
      <View>
        <Icon
          name={item.icon}
          size={Math.min(0.25 * width, 100)}
          label={title}
          backgroundColor={colors.secondary}
          labelSize={labelSize}
          labelWeight={fontWeight}
        />
      </View>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  selectableItem: {
    margin: 15,
    maxWidth: 160,
    maxHeight: 200,
    justifyContent: "center",
  },
});

export default ChoiceImage;
