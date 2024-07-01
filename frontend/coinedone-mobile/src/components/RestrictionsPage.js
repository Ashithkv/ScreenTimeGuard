import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Switch } from "react-native";

const RestrictionsPage = ({ navigation }) => {
  const blockedApps = ["Facebook", "Instagram", "YouTube", "Twitter"];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restrictions</Text>
      <FlatList
        data={blockedApps}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.appContainer}>
            <Text>{item}</Text>
            <Switch />
          </View>
        )}
      />
      <Button
        title="Set Limits"
        onPress={() => navigation.navigate("SetLimit")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  appContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default RestrictionsPage;

