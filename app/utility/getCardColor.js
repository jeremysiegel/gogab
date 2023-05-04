import colors from "../config/colors";

export default function getCardColor(level) {
  let sectionColor = colors.primary;
  let cornerColor = colors.primaryTint;
  switch (level) {
    case 2:
      sectionColor = colors.orange;
      cornerColor = colors.orangeTint;
      break;
    case 3:
      sectionColor = colors.secondaryCard;
      cornerColor = colors.secondaryCardTint;
      break;
    default:
      sectionColor = colors.primary;
      cornerColor = colors.primaryTint;
      break;
  }
  return {
    sectionColor: sectionColor,
    cornerColor: cornerColor,
  };
}
