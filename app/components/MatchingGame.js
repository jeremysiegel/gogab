import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import ChoiceBox from "./ChoiceBox";
import colors from "../config/colors";

const wordArray = [];
const matchArray = [];

// From Stack overflow
function shuffle(array) {
  let shuffledArray = [...array];
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}

function MatchingGame({ data, setComplete }) {
  const [shuffledData, setShuffledData] = useState();
  useEffect(() => {
    const shuffled = shuffle(data);
    setShuffledData(shuffled);
  }, []);

  const [selected, setSelected] = useState([]);
  const [currentObjects, setCurrentObjects] = useState([]);
  const [correctObjects, setCorrectObjects] = useState([]);
  const [incorrectObjects, setIncorrectObjects] = useState([]);

  data.forEach((element) => {
    wordArray.push(element.word);
  });

  data.forEach((element) => {
    matchArray.push(element.match);
  });

  const renderChoiceBox = (itemKey) => {
    return (
      <ChoiceBox
        title={itemKey}
        onPress={() => {
          setSelected(itemKey);
          checkMatch(itemKey);
        }}
        currentObjects={currentObjects}
        style={[
          correctObjects.includes(itemKey) ? styles.correct : null,
          incorrectObjects.includes(itemKey) ? styles.incorrect : null,
        ]}
      />
    );
  };

  const checkIfComplete = () => {
    if (correctObjects.length === data.length * 2) {
      setComplete(true);
    }
  };

  const checkMatch = (key) => {
    if (correctObjects.includes(key)) {
      return;
    }

    let keyType = "";
    wordArray.includes(key) ? (keyType = "word") : (keyType = "match");

    if (currentObjects.length === 2) {
      setIncorrectObjects([]);
      setCurrentObjects([key]);
    }

    if (currentObjects.length === 1) {
      if (
        (keyType === "word" && wordArray.includes(currentObjects[0])) ||
        (keyType === "match" && matchArray.includes(currentObjects[0]))
      ) {
        currentObjects.shift();
        currentObjects.push(key);
      } else {
        data.forEach((element) => {
          if (element[keyType] === key) {
            currentObjects.push(key);

            if (
              (keyType === "word" && element.match === currentObjects[0]) ||
              (keyType === "match" && element.word === currentObjects[0])
            ) {
              currentObjects.forEach((element) => {
                correctObjects.push(element);
              });
              setCurrentObjects([]);
              checkIfComplete();
            } else {
              currentObjects.forEach((element) => {
                incorrectObjects.push(element);
              });
            }
          }
        });
      }
    } else if (currentObjects.length === 0) {
      currentObjects.push(key);
    }
  };

  if (shuffledData === undefined) {
    return <></>;
  } else {
    return (
      <Screen>
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.word} //has to be unique
              renderItem={({ item }) => renderChoiceBox(item.word)}
              numColumns={1}
              extraData={selected}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={shuffledData}
              keyExtractor={(item) => item.match} //has to be unique
              renderItem={({ item }) => renderChoiceBox(item.match)}
              numColumns={1}
              extraData={selected}
            />
          </View>
        </View>
      </Screen>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    maxWidth: 250,
    padding: 20,
  },
  correct: {
    backgroundColor: colors.success,
  },
  incorrect: {
    backgroundColor: colors.danger,
  },
});

export default MatchingGame;
