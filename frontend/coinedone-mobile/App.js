import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import WorkScheduleForm from "./src/components/work_schedule_form";
import AppLimitsForm from "./src/components/app_time_limit_form";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WorkScheduleForm />
      <AppLimitsForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default App;
