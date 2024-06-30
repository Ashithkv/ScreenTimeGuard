import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

const AddSchedulePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [workTimeSlots, setWorkTimeSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTimeSlot = () => {
    setModalVisible(true);
  };

  const handleSaveSchedule = async () => {
    if (selectedDays.length === 0 || workTimeSlots.length === 0) {
      Alert.alert(
        "Validation Error",
        "Please select at least one day and add at least one time slot"
      );
      return;
    }

    setIsLoading(true);

    try {
      // Save schedule for each selected day
      const savePromises = selectedDays.map(async (day) => {
        const response = await axios.post(
          "http://localhost:5000/api/work-schedule",
          {
            user_id: "1", // Replace with actual user_id
            day,
            work_time_slots: workTimeSlots,
          }
        );
        console.log(`Schedule saved for ${day}:`, response.data);
        return response.data;
      });

      // Wait for all requests to complete
      await Promise.all(savePromises);

      Alert.alert("Success", "Schedule saved successfully");
      // Optionally, navigate to another page or provide feedback after saving
    } catch (error) {
      console.error("Error saving schedule:", error.message);
      Alert.alert("Error", "Failed to save schedule. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const addTimeSlot = () => {
    setWorkTimeSlots([...workTimeSlots, { start_time: "", end_time: "" }]);
    setModalVisible(false);
  };

  const toggleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Schedule</Text>
      <View style={styles.dayButtonsContainer}>
        <Button
          title="Monday"
          onPress={() => toggleDaySelection("Monday")}
          color={selectedDays.includes("Monday") ? "#007bff" : "#000"}
        />
        <Button
          title="Tuesday"
          onPress={() => toggleDaySelection("Tuesday")}
          color={selectedDays.includes("Tuesday") ? "#007bff" : "#000"}
        />
        <Button
          title="Wednesday"
          onPress={() => toggleDaySelection("Wednesday")}
          color={selectedDays.includes("Wednesday") ? "#007bff" : "#000"}
        />
        <Button
          title="Thursday"
          onPress={() => toggleDaySelection("Thursday")}
          color={selectedDays.includes("Thursday") ? "#007bff" : "#000"}
        />
        <Button
          title="Friday"
          onPress={() => toggleDaySelection("Friday")}
          color={selectedDays.includes("Friday") ? "#007bff" : "#000"}
        />
        <Button
          title="Saturday"
          onPress={() => toggleDaySelection("Saturday")}
          color={selectedDays.includes("Saturday") ? "#007bff" : "#000"}
        />
        <Button
          title="Sunday"
          onPress={() => toggleDaySelection("Sunday")}
          color={selectedDays.includes("Sunday") ? "#007bff" : "#000"}
        />
      </View>

      <Text style={styles.selectedDaysText}>
        Selected Days: {selectedDays.join(", ")}
      </Text>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Add Work Time Slot</Text>
          <TextInput
            style={styles.input}
            placeholder="Start Time"
            value={workTimeSlots.start_time}
            onChangeText={(value) =>
              setWorkTimeSlots({ ...workTimeSlots, start_time: value })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="End Time"
            value={workTimeSlots.end_time}
            onChangeText={(value) =>
              setWorkTimeSlots({ ...workTimeSlots, end_time: value })
            }
          />
          <Button title="Add Time Slot" onPress={addTimeSlot} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Button
        title={isLoading ? "Loading..." : "Add Schedule"}
        onPress={handleAddTimeSlot}
        disabled={isLoading}
      />
      <Button
        title={isLoading ? "Loading..." : "Save Schedule"}
        onPress={handleSaveSchedule}
        disabled={isLoading}
      />
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
    fontWeight: "bold",
    marginBottom: 20,
  },
  dayButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  selectedDaysText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddSchedulePage;
