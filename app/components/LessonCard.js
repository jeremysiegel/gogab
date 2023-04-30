import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

const LessonCard = ({ title, subtitle, titleColor }) => {
  return (
    <View style={styles.card}>
      <AppText style={[{ color: titleColor }, styles.title]}>{title}</AppText>
      {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: 300,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    color: colors.darkText,
  },
});

export default LessonCard;
