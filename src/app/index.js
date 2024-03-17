import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../../src/components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tanishk Soam is a millionaire by 2026</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: "100%",
  },
});
