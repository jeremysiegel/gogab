import React, { useContext } from "react";
import { View, StyleSheet, SectionList } from "react-native";
import NavigationButton from "../components/NavigationButton";
import sections from "../lessons/sections";
import LessonContext from "../navigation/lessonContext";
import BackgroundScreen from "../components/BackgroundScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { moderateScale, scale } from "../utility/scaler";
// Home screen of app.

function HomeScreen({ navigation }) {
  const { setSection } = useContext(LessonContext);
  const renderItems = ({ item }) => {
    return (
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
          numColumns={1}
          renderSectionHeader={({ section: { title } }) => (
            <AppText style={styles.header}>{title}</AppText>
          )}
        />
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  header: {
    marginLeft: scale(40),
    fontSize: moderateScale(40),
  },
});

export default HomeScreen;
