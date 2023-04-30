import React, { useContext } from "react";
import { View, StyleSheet, SectionList, Pressable } from "react-native";
import NavigationButton from "../components/NavigationButton";
import sections from "../lessons/sections";
import LessonContext from "../navigation/lessonContext";
import BackgroundScreen from "../components/BackgroundScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { moderateScale, scale } from "../utility/scaler";
import LessonCard from "../components/LessonCard";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
// Home screen of app.

function HomeScreen({ navigation }) {
  const { setSection } = useContext(LessonContext);
  const renderItems = ({ item, section }) => {
    let sectionColor = colors.primary;
    let cornerColor = colors.primaryTint;
    switch (section.title) {
      case "Level 2":
        sectionColor = colors.orange;
        cornerColor = colors.orangeTint;
        break;
      case "Level 3":
        sectionColor = colors.secondaryCard;
        cornerColor = colors.secondaryCardTint;
        break;
      default:
        sectionColor = colors.primary;
        cornerColor = colors.primaryTint;
        break;
    }
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
    fontSize: 40,
    fontWeight: "bold",
    color: colors.darkText,
    marginLeft: 10,
    marginBottom: 30,
    marginTop: 40,
  },
});

export default HomeScreen;
