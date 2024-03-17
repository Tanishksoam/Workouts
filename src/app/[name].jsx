import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { Stack } from "expo-router";

export default function ExerciseDetails({}) {
  const params = useLocalSearchParams();

  const exercise = exercises.find((exercise) => exercise.name === params.name);
  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.exerciseContainer}>
      <Stack.Screen options={{ title: `${exercise.name}` }} />
      <View style={styles.panel}>
        <Text style={styles.PageTitle}>Exercise Details</Text>
        <Text style={styles.exerciseTitle}>{exercise.name}</Text>
        <Text style={styles.exerciseSubTitle}>
          {exercise.muscle} | {exercise.equipment}
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions}>{exercise.instructions}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    padding: 10,
    gap: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 5,
    width: "100%",
  },
  panel: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: innerWidth - 20,
    gap: 5,
    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  PageTitle: {
    fontSize: 28,
    fontWeight: "300",
    textAlign: "center",
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  exerciseSubTitle: {
    fontSize: 14,
    fontWeight: "300",
    textTransform: "capitalize",
    color: "dimgrey",
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 24,
  },
});
