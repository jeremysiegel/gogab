import React from "react";
import { View, StyleSheet } from "react-native";
import Selectable from "./Selectable";
import colors from "../config/colors";
import Icon from "./Icon";

function ChoiceImage({ item, onPress, selected }) {
  return (
    <Selectable
      name={item.name}
      selected={selected}
      onPress={onPress}
      style={styles.selectableItem}
    >
      <View>
        <Icon
          name={item.name}
          size={100}
          label={item.title}
          backgroundColor={colors.secondary}
        />
      </View>
    </Selectable>
  );
}

const styles = StyleSheet.create({
  selectableItem: {
    margin: 15,
    width: 160,
    height: 200,
    justifyContent: "center",
    borderColor: colors.selectableBorder,
    borderWidth: 3,
    borderRadius: 5,
  },
});

export default ChoiceImage;
