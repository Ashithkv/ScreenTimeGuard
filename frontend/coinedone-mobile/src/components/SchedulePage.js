import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import AddWorkTimePage from "./AddWorkTimePage"; // Import the modal component

const SchedulePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [savedWorkTime, setSavedWorkTime] = useState(null); // State to store saved work time data

  // Fetch saved work time data from server
  useEffect(() => {
    fetchSavedWorkTime(); // Fetch data on component mount
  }, []);

  const fetchSavedWorkTime = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.5:5000/api/view-work-schedule"
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch saved work time: ${response.status} - ${response.statusText}`
        );
      }
      const data = await response.json();
      if (data.length > 0) {
        setSavedWorkTime(data[0]);
      }
    } catch (error) {
      console.error(error.message);
      // Handle error state or display feedback to the user
    }
  };

  // Function to handle saving work time
  const saveWorkTime = (data) => {
    setSavedWorkTime(data);
    setModalVisible(false);
  };

  // Function to handle editing work time
  const editWorkTime = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Schedules</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)} // Show the modal
      >
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>Add your work timings</Text>

      {savedWorkTime && (
        <View style={styles.savedWorkTimeContainer}>
          <Text style={styles.workTimeTitle}>Work Time</Text>
          <View style={styles.selectedDaysContainer}>
            {savedWorkTime.selectedDays.map((day) => (
              <View key={day} style={styles.selectedDay}>
                <Text style={styles.selectedDayText}>{day}</Text>
              </View>
            ))}
          </View>
          {savedWorkTime.workTimes.map((workTime, index) => (
            <View key={index} style={styles.timeDetails}>
              <Text style={styles.timeLabel}>Start Time:</Text>
              <Text style={styles.timeValue}>{workTime.startTime}</Text>
              <Text style={styles.timeLabel}>End Time:</Text>
              <Text style={styles.timeValue}>{workTime.endTime}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.editButton} onPress={editWorkTime}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Close the modal
      >
        <AddWorkTimePage onClose={saveWorkTime} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: 38,
    marginBottom: 20,
    color: "#00008B",
  },
  addButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1f5fe",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  plusSign: {
    fontSize: 40,
    color: "#0288d1",
  },
  infoText: {
    fontSize: 16,
    color: "#0288d1",
  },
  savedWorkTimeContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "80%",
  },
  workTimeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selectedDaysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  selectedDay: {
    backgroundColor: "#0288d1",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  selectedDayText: {
    color: "#fff",
    fontSize: 16,
  },
  timeDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  timeLabel: {
    fontWeight: "bold",
    marginRight: 10,
  },
  timeValue: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#0288d1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SchedulePage;
