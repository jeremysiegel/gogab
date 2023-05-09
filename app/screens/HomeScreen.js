import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SectionList,
  Dimensions,
  Platform,
} from "react-native";
import NavigationButton from "../components/NavigationButton";
import sections from "../lessons/sections";
import LessonContext from "../navigation/lessonContext";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { SimpleLineIcons } from "@expo/vector-icons";
import { moderateScale } from "../utility/scaler";
import getCardColor from "../utility/getCardColor";
import fonts from "../config/fonts";
import getCompletedLessons from "../utility/getCompletedLessons";
import AuthContext from "../navigation/authContext";
import checkArrayIncludesAll from "../utility/checkArrayIncludesAll";
import Screen from "../components/Screen";
import translatePhrases from "../utility/dictionaryTranslator";
import phraseDisctionaryEs from "../lessons/phraseDisctionary-es";
import dictionaryEs from "../lessons/dictionary-es";
// Home screen of app.

function HomeScreen({ navigation }) {
  const { width } = Dimensions.get("screen");
  const [completedLessons, setCompletedLessons] = useState();
  const { setSection, setLevel } = useContext(LessonContext);
  const { country } = useContext(AuthContext);

  useEffect(() => {
    getCompletedLessons(country, setCompletedLessons);
  }, []);

  const renderItems = ({ item, section }) => {
    const complete = checkArrayIncludesAll(
      item.lessons,
      completedLessons[country]
    );
    let level = 1;
    switch (section.title) {
      case "Level 2":
        level = 2;
        break;
      case "Level 3":
        level = 3;
        break;
      default:
        break;
    }
    const { sectionColor, cornerColor } = getCardColor(level);
    let iconName = "bubbles";
    switch (item.title) {
      case "Shopping":
        iconName = "handbag";
        break;
      case "Eating":
        iconName = "cup";
        break;
      case "Time":
        iconName = "clock";
        break;
      case "Getting around":
        iconName = "plane";
        break;
    }
    const icon = (
      <SimpleLineIcons
        size={33}
        color={complete ? colors.gold : sectionColor}
        name={iconName}
      />
    );
    return (
      <View style={styles.cardContainer}>
        <NavigationButton
          icon={icon}
          lessonData={item}
          title={item.title}
          sectionColor={sectionColor}
          cornerColor={cornerColor}
          onPress={() => {
            setSection(item.sectionId);
            setLevel(item.level);
            navigation.push("section", {
              sectionData: item,
            });
          }}
        />
      </View>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <AppText style={styles.header}>{title}</AppText>
  );
  if (completedLessons) {
    return (
      <Screen>
        <View>
          <SectionList
            scrollEnabled={true}
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItems}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={styles.footer}
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    margin: 20,
  },
  footer: {
    height: 100, //Makes sure last card displays above bottomTabs
  },

  header: {
    fontSize: moderateScale(40),
    color: colors.darkText,
    margin: 30,
    marginTop: Platform.OS === "ios" ? 40 : 0,
    marginLeft: moderateScale(30),
  },
});

export default HomeScreen;

