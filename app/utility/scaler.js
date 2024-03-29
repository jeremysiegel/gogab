// Used to scale objects based on device size.
// App mostly uses moderate scale, which is set here to default at 0.2.

import {
  scale as scaleRN,
  verticalScale as verticalScaleRN,
  moderateScale as moderateScaleRN,
} from "react-native-size-matters";

const scale = (value) => {
  return scaleRN(value);
};
const verticalScale = (value) => {
  return verticalScaleRN(value);
};
const moderateScale = (value, level = 0.2) => {
  return moderateScaleRN(value, level);
};

export { scale, verticalScale, moderateScale };
