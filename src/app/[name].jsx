import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

import { Stack } from "expo-router";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

import graphqlClient from "../grapghqlClient";
import NewSetInput from "../components/NewSetInput";
import SetLists from "../components/SetLists";

const exerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      equipment
      instructions
      muscle
      name
    }
  }
`;

export default function ExerciseDetails({}) {
  const { name } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises", name],
    queryFn: () => graphqlClient.request(exerciseQuery, { name: name }),
  });
  
  const [instructions, setInstructions] = useState(false);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const exercise = data.exercises[0];

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.exerciseContainer}>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text style={styles.PageTitle}>Exercise Details</Text>

      <View style={styles.panel}>
        <Text style={styles.exerciseTitle}>{exercise.name}</Text>
        <Text style={styles.exerciseSubTitle}>
          {exercise.muscle} | {exercise.equipment}
        </Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.instructions} numberOfLines={instructions ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text
          onPress={() => setInstructions(!instructions)}
          style={styles.seeMore}
        >
          {" "}
          {instructions ? "See Less" : "See More"}{" "}
        </Text>
      </View>

      <NewSetInput />
      <SetLists name = {name} data = {data}/>
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
    // width: innerWidth - 20,
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
  seeMore: {
    fontSize: 14,
    fontWeight: "500",
    color: "dodgerblue",
    textAlign: "right",
  },
});
