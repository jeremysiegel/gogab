import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";

const LessonCard = ({
  title,
  subtitle,
  titleColor,
  sectionColor,
  cornerColor,
  icon,
}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.topBox, { backgroundColor: sectionColor }]}>
        <View style={[styles.semiCircle, { backgroundColor: cornerColor }]}>
          <View style={styles.iconContainer}>{icon}</View>
        </View>
        <View style={styles.titleContainer}>
          <AppText style={[{ color: titleColor }, styles.title]}>
            {title}
          </AppText>
        </View>
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
    minHeight: 140,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  titleContainer: {
    width: 220,
  },
  iconContainer: {
    padding: 7,
  },
  topBox: {
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingLeft: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    minHeight: 110,
    position: "relative",
  },
  semiCircle: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 70,
    height: 60,
    borderBottomLeftRadius: 70,
    borderTopEndRadius: 10,
    backgroundColor: colors.primaryTint,
    alignItems: "flex-end",
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
    paddingVertical: 5,
  },
});

export default LessonCard;
