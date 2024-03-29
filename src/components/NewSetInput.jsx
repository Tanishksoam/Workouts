import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

const NewSetInput = () => {
  const [reps, setReps] = useState("");
  const [weights, setWeights] = useState("");
  const addSet = () => {
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
