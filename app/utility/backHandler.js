import React from "react";

import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

// Stops swipe back gesture.

const BackButtonExitHandler = () => {
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );
};

export default BackButtonExitHandler;
