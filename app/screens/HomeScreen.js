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
// Home screen of app.

function HomeScreen({ navigation }) {
  const { setSection } = useContext(LessonContext);
  const renderItems = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <NavigationButton
          lessonData={item}
          title={item.title}
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
    paddingLeft: 40,
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
