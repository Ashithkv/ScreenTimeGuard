import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Button,
  Alert,
} from "react-native";
import axios from "axios";

const RestrictionAppPage = () => {
  const [apps, setApps] = useState([
    { id: 1, name: "Facebook", restriction: true },
    { id: 2, name: "Instagram", restriction: true },
    { id: 3, name: "Youtube", restriction: true },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveRestrictions = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/app-time-limit",
        {
          user_id: "1", // Replace with actual user_id
          app_limits: apps
            .filter((app) => app.restriction)
            .map((app) => ({ app_package: app.name })),
        }
      );
      console.log(response.data);
      Alert.alert("Success", "App restrictions saved successfully");
      // Optionally, navigate to another page or provide feedback after saving
    } catch (error) {
      console.error("Error saving app restrictions:", error.message);
      Alert.alert(
        "Error",
        "Failed to save app restrictions. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSwitch = (id) => {
    const updatedApps = apps.map((app) =>
      app.id === id ? { ...app, restriction: !app.restriction } : app
    );
    setApps(updatedApps);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Restriction App Page</Text>
      {apps.map((app) => (
        <View key={app.id} style={styles.appContainer}>
          <Text>{app.name}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={app.restriction ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(app.id)}
            value={app.restriction}
          />
        </View>
      ))}
      <Button
        title={isLoading ? "Loading..." : "Save Restrictions"}
        onPress={handleSaveRestrictions}
        disabled={isLoading}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  appContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RestrictionAppPage;
