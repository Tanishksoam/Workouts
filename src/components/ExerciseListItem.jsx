import { Link } from "expo-router";
import { StyleSheet, Text, Pressable } from "react-native";

export default function ExerciseListItem({ item }) {


  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseTitle}>{item.name}</Text>
        <Text style={styles.exerciseSubTitle}>
          {item.muscle} | {item.equipment}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: innerWidth - 10,
    gap: 5,
    marginHorizontal: 3,
    marginTop: 5,
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
