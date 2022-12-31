import colors from "./colors";
import { moderateScale } from "../utility/scaler";
import fonts from "./fonts";

export default {
  colors,
  text: {
    fontSize: moderateScale(21),
    color: colors.darkText,
    fontFamily: fonts.main,
  },
  instructionText: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
  },
  practiceWord: {
    fontSize: moderateScale(28),
    color: colors.secondary,
  },
  learnWord: {
    fontSize: moderateScale(30),
    color: colors.primary,
    //textDecorationLine: "underline",
  },
  testWord: {
    fontSize: moderateScale(30),
    color: colors.orange,
  },
  popoverText: {
    fontFamily: fonts.main,
    fontSize: "md",
    fontWeight: "700",
    lineHeight: "sm",
    color: colors.darkText,
  },
  checkAnswer: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
  },
};
