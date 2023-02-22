import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";
import defaultStyles from "../config/styles";
import constants from "../config/constants";
import AppText from "./AppText";
import { moderateScale } from "../utility/scaler";

// Creates a selectable icon with title.

function ChoiceImage({ item, title, onPress, selectedItem, fontWeight }) {
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
      <View style={styles.iconContainer}>
        <Icon
          name={item.icon}
          size={
            height < constants.shortHeight ? 80 : Math.min(0.28 * width, 120)
          }
          label={title}
          backgroundColor={colors.secondary}
          labelSize={height < constants.shortHeight ? 22 : undefined}
          labelWeight={fontWeight}
        />
        <AppText
          style={{
            fontSize: moderateScale(26),
            textAlign: "center",
          }}
        >
          {title}
        </AppText>
      </View>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  selectableItem: {
    margin: 15,
    maxWidth: 190,
    maxHeight: 220,
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});

export default ChoiceImage;
