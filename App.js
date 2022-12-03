import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Bathroom</Text>
        <Text>Bathroom</Text>
        <StatusBar style="auto" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
