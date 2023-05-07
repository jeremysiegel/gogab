import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { moderateScale, scale } from "../utility/scaler";

const AppHeader = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(24),

    fontFamily: "assistantBold",
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
});

export default AppHeader;
