import colors from "./colors";
import { moderateScale, verticalScale } from "../utility/scaler";
import fonts from "./fonts";

export default {
  colors,
  border: {
    borderWidth: 5,
    borderRadius: 5,
    borderColor: colors.selected,
  },
  text: {
    fontSize: moderateScale(21),
    color: colors.darkText,
    fontFamily: fonts.main,
  },
  instructionText: {
    fontSize: moderateScale(24),
    fontFamily: fonts.bold,
    fontWeight: "bold",
  },
  practiceWord: {
    fontSize: moderateScale(28),
    color: colors.primary,
    textAlign: "center",
  },
  learnWord: {
    fontSize: moderateScale(30),
    color: colors.secondary,
    //textDecorationLine: "underline",
  },
  popoverText: {
    fontFamily: fonts.bold,
    fontSize: "md",
    fontWeight: "bold",
    lineHeight: "sm",
    color: colors.darkText,
    textAlign: "center",
  },
  checkAnswer: {
    fontSize: moderateScale(28),
    fontFamily: fonts.bold,
    fontWeight: "bold",
  },
  big: {
    fontSize: moderateScale(44),
    fontFamily: fonts.bold,
    fontWeight: "bold",
  },
  elevated: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  }
};
