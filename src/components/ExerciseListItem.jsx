import { StyleSheet, Text, View } from "react-native";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseTitle}>{item.name}</Text>
      <Text style={styles.exerciseSubTitle}>
        {item.muscle} | {item.equipment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: innerWidth - 10,
    gap: 5,
    marginTop: 5,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubTitle: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
