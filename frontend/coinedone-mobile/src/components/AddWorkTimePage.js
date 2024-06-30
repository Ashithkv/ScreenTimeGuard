import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddWorkTimePage = ({ onClose }) => {
  // State variables
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Days of the week
  const daysOfWeek = [
    { id: "Monday", label: "Monday" },
    { id: "Tuesday", label: "Tuesday" },
    { id: "Wednesday", label: "Wednesday" },
    { id: "Thursday", label: "Thursday" },
    { id: "Friday", label: "Friday" },
    { id: "Saturday", label: "Saturday" },
    { id: "Sunday", label: "Sunday" },
  ];

  // Time options for picker
  const timeOptions = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  // Function to toggle selected days
  const toggleDay = (dayId) => {
    setSelectedDays((prev) =>
      prev.includes(dayId) ? prev.filter((d) => d !== dayId) : [...prev, dayId]
    );
  };

  // Function to save work time
  const saveWorkTime = async () => {
    const userId = "668130ec94131ae44f9f43b8"; // Replace with actual user ID retrieval logic
    const scheduleData = {
      userId,
      selectedDays,
      startTime,
      endTime,
    };

    try {
      const response = await fetch("http://192.168.1.5:5000/api/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scheduleData),
      });

      if (!response.ok) {
        throw new Error("Failed to save schedule");
      }

      const data = await response.json();
      console.log(data.message); // Log success message
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error saving schedule:", error.message);
      // Handle error state or feedback to the user
    }
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.heading}>Add Work Time</Text>

        {/* Days selection */}
        <Text style={styles.subHeading}>Days Active</Text>
        <View style={styles.daysContainer}>
          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day.id}
              style={[
                styles.dayCircle,
                selectedDays.includes(day.id) && styles.selectedDay,
              ]}
              onPress={() => toggleDay(day.id)}
            >
              <Text
                style={[
                  styles.dayText,
                  selectedDays.includes(day.id) && styles.selectedDayText,
                ]}
              >
                {day.label.charAt(0)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Work times */}
        {/* <Text style={styles.subHeading}>Work Times</Text> */}
        <View style={styles.timeContainer}>
          <View style={styles.timeBox}>
            <Text style={styles.timeLabel}>From</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={startTime}
                style={styles.picker}
                onValueChange={(itemValue) => setStartTime(itemValue)}
              >
                {timeOptions.map((time, index) => (
                  <Picker.Item key={index} label={time} value={time} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.timeLabel}>To</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={endTime}
                style={styles.picker}
                onValueChange={(itemValue) => setEndTime(itemValue)}
              >
                {timeOptions.map((time, index) => (
                  <Picker.Item key={index} label={time} value={time} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* Save and Close buttons */}
        <TouchableOpacity style={styles.saveButton} onPress={saveWorkTime}>
          <Text style={styles.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  dayCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e1f5fe",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 1,
  },
  selectedDay: {
    borderColor: "#0288d1",
  },
  dayText: {
    fontSize: 18,
    color: "#0288d1",
  },
  selectedDayText: {
    color: "#0288d1",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  timeBox: {
    flex: 1,
    alignItems: "center",
  },
  timeLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#0288d1",
  },
  pickerContainer: {
    borderColor: "#0288d1",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    width: "95%",
    height: 40,
    justifyContent: "center",
  },
  picker: {
    width: 150,
    height: 50,
    left: -15,
  },
  saveButton: {
    backgroundColor: "#0288d1",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: "#0288d1",
    fontSize: 16,
  },
});

export default AddWorkTimePage;
