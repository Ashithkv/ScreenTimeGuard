import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

const SetLimitModal = ({ navigation }) => {
  const [weekdayLimit, setWeekdayLimit] = useState("");
  const [weekendLimit, setWeekendLimit] = useState("");

  const handleSaveLimit = () => {
    // limit
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Set Limit</Text>
      <TextInput
        style={styles.input}
        placeholder="Weekdays Limit (e.g., 1h 30m)"
        value={weekdayLimit}
        onChangeText={setWeekdayLimit}
      />
      <TextInput
        style={styles.input}
        placeholder="Weekends Limit (e.g., 2h)"
        value={weekendLimit}
        onChangeText={setWeekendLimit}
      />
      <Button title="Save" onPress={handleSaveLimit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SetLimitModal;
