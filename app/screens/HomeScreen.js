import React, { useContext } from "react";
import { View, StyleSheet, SectionList, Pressable } from "react-native";
import NavigationButton from "../components/NavigationButton";
import sections from "../lessons/sections";
import LessonContext from "../navigation/lessonContext";
import BackgroundScreen from "../components/BackgroundScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { SimpleLineIcons } from "@expo/vector-icons";
import { moderateScale, scale } from "../utility/scaler";
import getCardColor from "../utility/getCardColor";
import fonts from "../config/fonts";
// Home screen of app.

function HomeScreen({ navigation }) {
  const { setSection, setLevel } = useContext(LessonContext);
  const renderItems = ({ item, section }) => {
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
      <SimpleLineIcons size={33} color={sectionColor} name={iconName} />
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
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <SectionList
          scrollEnabled={true}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItems}
          stickySectionHeadersEnabled={false}
          numColumns={1}
          renderSectionHeader={({ section: { title } }) => (
            <AppText style={styles.header}>{title}</AppText>
          )}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={styles.footer}
        />
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
  },
  cardContainer: {
    paddingLeft: 20,
  },
  footer: {
    height: 100, //Makes sure last card displays above bottomTabs
  },

  header: {
    fontSize: moderateScale(40),
    fontFamily: fonts.bold,
    //fontWeight: "bold",
    color: colors.darkText,
    marginLeft: scale(10),
    marginBottom: 30,
    marginTop: 40,
  },
});

export default HomeScreen;
