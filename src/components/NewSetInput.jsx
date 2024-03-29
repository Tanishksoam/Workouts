import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
// import { setData } from "./SetLists";
const url =
  "https://data.mongodb-api.com/app/data-vsoyg/endpoint/data/v1/action/insertOne";
const apiKey =
  "ENVf8L7uXWshlCL2jzt1sfS5y6SZxZoUjE82IngABIIJLtKEp3WnlTr57LRpllNS";



const NewSetInput = ({name}) => {
  const [reps, setReps] = useState("");
  const [weights, setWeights] = useState("");
  const addSet = () => {
    const data = {
      dataSource: "Cluster0",
      database: "workouts",
      collection: "sets",
      document: { exercise: name, reps: reps, weights: weights },
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        apiKey: apiKey,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


    setReps("");
    setWeights("");
  };


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Weights"
        value={weights}
        onChangeText={setWeights}
        style={styles.input}
        keyboardType="numeric"
      />
      <View>
        <Button title="Add" onPress={addSet} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "ghostwhite",
    padding: 10,
    flexDirection: "row", // Changed from "column" to "row"
    alignItems: "center",
    gap: 1,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
    width: "40%",
    flex: 1,
  },
});

export default NewSetInput;
