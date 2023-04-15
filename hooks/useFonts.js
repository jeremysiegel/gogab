import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    assistant: require("../assets/fonts/Assistant-Regular.ttf"),
    assistantSemiBold: require("../assets/fonts/Assistant-SemiBold.ttf"),
    assistantMedium: require("../assets/fonts/Assistant-Medium.ttf"),
    assistantBold: require("../assets/fonts/Assistant-Bold.ttf"),
    varela: require("../assets/fonts/VarelaRound-Regular.ttf"),
  });
