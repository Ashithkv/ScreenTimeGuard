import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const AppLimitsForm = () => {
  const [day, setDay] = useState("");
  const [appLimits, setAppLimits] = useState([
    { app_package: "", limit_duration: "" },
  ]);

  const handleAppLimitChange = (index, field, value) => {
    const values = [...appLimits];
    values[index][field] = value;
    setAppLimits(values);
  };

  const handleAddAppLimit = () => {
    setAppLimits([...appLimits, { app_package: "", limit_duration: "" }]);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/app-limits", {
      user_id: "1", // Replace with actual user_id
      day,
      app_limits: appLimits,
    });
    console.log(response.data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Set App Limits</Text>
      <View style={styles.formGroup}>
        <Text>Day</Text>
        <TextInput style={styles.input} value={day} onChangeText={setDay} />
      </View>
      {appLimits.map((limit, index) => (
        <View key={index} style={styles.formGroup}>
          <Text>App Limit {index + 1}</Text>
          <TextInput
            style={styles.input}
            placeholder="App Package"
            value={limit.app_package}
            onChangeText={(value) =>
              handleAppLimitChange(index, "app_package", value)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Limit Duration"
            value={limit.limit_duration}
            onChangeText={(value) =>
              handleAppLimitChange(index, "limit_duration", value)
            }
          />
        </View>
      ))}
      <Button title="Add App Limit" onPress={handleAddAppLimit} />
      <Button title="Save App Limits" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default AppLimitsForm;
