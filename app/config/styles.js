import colors from "./colors";
import { moderateScale } from "../utility/scaler";
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
    color: colors.secondary,
    textAlign: "center",
  },
  learnWord: {
    fontSize: moderateScale(30),
    color: colors.primary,
    //textDecorationLine: "underline",
  },
  popoverText: {
    fontFamily: fonts.bold,
    fontSize: "md",
    fontWeight: "bold",
    lineHeight: "sm",
    color: colors.darkText,
  },
  checkAnswer: {
    fontSize: moderateScale(28),
    fontFamily: fonts.bold,
    fontWeight: "bold",
  },
};
