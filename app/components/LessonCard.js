import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const LessonCard = ({ title, subtitle, titleColor, style }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topBox}>
        <View style={styles.semiCircle} />
        <AppText style={[{ color: titleColor }, styles.title]}>{title}</AppText>
      </View>
      {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 300,
    height: 140,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flex: 1,
    elevation: 5,
  },
  topBox: {
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 100,
    position: "relative",
  },
  semiCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 70,
    height: 70,
    borderBottomLeftRadius: 70,
    borderTopEndRadius: 10,
    backgroundColor: colors.primaryTint,
  },
  title: {
    fontSize: 24,
    fontFamily: "assistantBold",
    fontWeight: Platform.OS === "ios" ? "bold" : undefined,
    color: colors.white,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: colors.darkText,
    paddingLeft: 20,
    paddingTop: 5,
  },
});

export default LessonCard;
