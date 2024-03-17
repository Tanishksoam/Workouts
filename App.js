import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <Text>Tanishk Soam is a millionaire by 2026</Text>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseTitle}>{exercise.name}</Text>
        <Text style={styles.exerciseSubTitle}>
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    gap: 5,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
});
