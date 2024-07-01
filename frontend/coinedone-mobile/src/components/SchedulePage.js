import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useRoute } from "@react-navigation/native";
import AddWorkTimePage from "./AddWorkTimePage";
import { fetchSchedule } from "../api/api";

const SchedulePage = () => {
  const route = useRoute();
  const { userId } = route.params;
  console.log("Schedule:", userId);

  const [modalVisible, setModalVisible] = useState(false);
  const [savedWorkTime, setSavedWorkTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSchedule(userId);
        setSavedWorkTime(response.data.schedule);
      } catch (error) {
        console.error("Error fetching saved work time:", error.message);
      }
    };
    fetchData();
  }, [userId]);

  const handleModalClose = (workTimeData) => {
    setModalVisible(false);
    if (workTimeData) {
      setSavedWorkTime(workTimeData);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Schedules</Text>
      {savedWorkTime ? (
        <View style={styles.savedBox}>
          <Text style={styles.title}>Work Time</Text>
          <View style={styles.details}>
            <Text>Days:</Text>
            {savedWorkTime.selectedDays.map((day) => (
              <View key={day} style={[styles.dayCircle, styles.selectedDay]}>
                <Text style={[styles.dayText, styles.selectedDayText]}>
                  {day.charAt(0)}
                </Text>
              </View>
            ))}
            <Text>From: {savedWorkTime.startTime}</Text>
            <Text>To: {savedWorkTime.endTime}</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text></Text>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>Add your work timings</Text>
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <AddWorkTimePage onClose={handleModalClose} userId={userId} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  heading: {
    fontSize: 35,
    marginBottom: 20,
    color: "#0288d1",
  },
  savedBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    marginBottom: 10,
  },
  dayCircle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
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
    fontSize: 16,
  },
  selectedDayText: {
    color: "#0288d1",
  },
  editButton: {
    backgroundColor: "#0288d1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#0288d1",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  plusSign: {
    color: "#fff",
    fontSize: 30,
  },
  infoText: {
    marginTop: 10,
    color: "#0288d1",
  },
});

export default SchedulePage;
