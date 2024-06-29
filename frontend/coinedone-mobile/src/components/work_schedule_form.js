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

const WorkScheduleForm = () => {
  const [day, setDay] = useState("");
  const [workTimeSlots, setWorkTimeSlots] = useState([
    { start_time: "", end_time: "" },
  ]);
  const [blockedApps, setBlockedApps] = useState([""]);

  const handleTimeSlotChange = (index, field, value) => {
    const values = [...workTimeSlots];
    values[index][field] = value;
    setWorkTimeSlots(values);
  };

  const handleBlockedAppsChange = (index, value) => {
    const values = [...blockedApps];
    values[index] = value;
    setBlockedApps(values);
  };

  const handleAddTimeSlot = () => {
    setWorkTimeSlots([...workTimeSlots, { start_time: "", end_time: "" }]);
  };

  const handleAddBlockedApp = () => {
    setBlockedApps([...blockedApps, ""]);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:3000/work-schedule", {
      user_id: "1", // Replace with actual user_id
      day,
      work_time_slots: workTimeSlots,
      blocked_apps: blockedApps,
    });
    console.log(response.data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Set Work Schedule</Text>
      <View style={styles.formGroup}>
        <Text>Day</Text>
        <TextInput style={styles.input} value={day} onChangeText={setDay} />
      </View>
      {workTimeSlots.map((slot, index) => (
        <View key={index} style={styles.formGroup}>
          <Text>Work Time Slot {index + 1}</Text>
          <TextInput
            style={styles.input}
            placeholder="Start Time"
            value={slot.start_time}
            onChangeText={(value) =>
              handleTimeSlotChange(index, "start_time", value)
            }
          />
          <TextInput
            style={styles.input}
            placeholder="End Time"
            value={slot.end_time}
            onChangeText={(value) =>
              handleTimeSlotChange(index, "end_time", value)
            }
          />
        </View>
      ))}
      <Button title="Add Time Slot" onPress={handleAddTimeSlot} />
      {blockedApps.map((app, index) => (
        <View key={index} style={styles.formGroup}>
          <Text>Blocked App {index + 1}</Text>
          <TextInput
            style={styles.input}
            value={app}
            onChangeText={(value) => handleBlockedAppsChange(index, value)}
          />
        </View>
      ))}
      <Button title="Add Blocked App" onPress={handleAddBlockedApp} />
      <Button title="Save Schedule" onPress={handleSubmit} />
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

export default WorkScheduleForm;
 