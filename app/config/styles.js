import colors from "./colors";
import { moderateScale } from "../utility/scaler";

export default {
  colors,
  text: {
    fontSize: 21,
    color: colors.darkText,
    fontFamily: "assistantMedium",
  },
  practiceWord: {
    fontSize: moderateScale(28),
    color: colors.secondary,
  },
  learnWord: {
    fontSize: moderateScale(30),
    color: colors.primary,
  },
  testWord: {
    fontSize: moderateScale(30),
    color: colors.orange,
  },
  popoverText: {
    fontFamily: "assistantMedium",
    fontSize: "md",
    fontWeight: "700",
    lineHeight: "sm",
    color: colors.darkText,
  },
};
