import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { saveSchedule } from "../api/api";
import RNPickerSelect from "react-native-picker-select";

const AddWorkTimePage = ({ onClose, userId }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const toggleDay = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day) ? prevSelectedDays.filter((d) => d !== day) : [...prevSelectedDays, day]
    );
  };

  const handleSave = async () => {
    if (!startTime || !endTime || selectedDays.length === 0) {
      Alert.alert("Validation Error", "Please fill in all fields and select days");
      return;
    }

    try {
      const response = await saveSchedule({ startTime, endTime, selectedDays, userId });
      Alert.alert("Success", "Work time saved successfully");
      onClose({ startTime, endTime, selectedDays });
    } catch (error) {
      Alert.alert("Error", `Failed to save work time. ${error.message}`);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Add Work Time</Text>
        <TouchableOpacity onPress={() => onClose(null)} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day) => (
          <TouchableOpacity key={day} style={[styles.dayCircle, selectedDays.includes(day) && styles.selectedDay]} onPress={() => toggleDay(day)}>
            <Text style={[styles.dayText, selectedDays.includes(day) && styles.selectedDayText]}>{day.charAt(0)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setStartTime(value)}
        placeholder={{ label: "Select Start Time", value: null }}
        items={generateTimeOptions()}
      />
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setEndTime(value)}
        placeholder={{ label: "Select End Time", value: null }}
        items={generateTimeOptions()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} style={styles.buttonOk} />
      </View>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
    marginRight: 50,
    marginLeft: 50,
  },
});

// function to generate time options in AM/PM format
const generateTimeOptions = () => {
  const timeOptions = [];
  for (let hour = 0; hour <= 23; hour++) {
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const time = `${hour12.toString().padStart(2, "0")}:00 ${period}`;
    timeOptions.push({ label: time, value: time });
  }
  return timeOptions;
};


const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 100, 
    marginTop: 20, 
  },
  buttonOk: {
    backgroundColor: "#0288d1",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
    marginTop: 200,
    marginBottom: 200,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#0288d1",
  },
  daysContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#e1f5fe",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedDay: {
    borderColor: "#0288d1",
  },
  dayText: {
    fontSize: 16,
  },
  selectedDayText: {
    color: "#0288d1",
  },
});

export default AddWorkTimePage;
