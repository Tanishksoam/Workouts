import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import ExerciseListItem from "../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native-web";
import { gql } from "graphql-request";
import Client from "../grapghqlClient";

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
    }
  }
`;

export default function ExerciseScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      return Client.request(exerciseQuery);
    },
  });
  console.log(data);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Tanishk Soam is a millionaire by 2026</Text>
      <FlatList
        data={data?.exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </ScrollView>
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
