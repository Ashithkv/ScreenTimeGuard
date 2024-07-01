// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import axios from "axios";

// const RestrictionAppPage = () => {
//   const [dayType, setDayType] = useState("");
//   const [appLimits, setAppLimits] = useState([{ app: "", limit: "" }]);

//   const API_URL = "http://192.168.1.5:5000"; 
// //
//   const handleAddAppLimit = () => {
//     setAppLimits([...appLimits, { app: "", limit: "" }]);
//   };

//   const handleRestriction = async () => {
//     if (!dayType || appLimits.some((limit) => !limit.app || !limit.limit)) {
//       Alert.alert("Validation Error", "Please fill in all fields");
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/api/app-restrictions`, {
//         dayType,
//         appLimits,
//       });
//       console.log("App Restriction Response data:", response.data);
//       Alert.alert("Success", "App restrictions set successfully");
//     } catch (error) {
//       console.error("Error setting app restrictions:", error.message);
//       Alert.alert("Error", `Failed to set app restrictions. ${error.message}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Set App Restrictions</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Day Type (weekday/weekend)"
//         value={dayType}
//         onChangeText={setDayType}
//       />
//       {appLimits.map((limit, index) => (
//         <View key={index} style={styles.appLimitContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="App Package Name"
//             value={limit.app}
//             onChangeText={(text) => {
//               const newAppLimits = [...appLimits];
//               newAppLimits[index].app = text;
//               setAppLimits(newAppLimits);
//             }}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Limit (e.g., 30m)"
//             value={limit.limit}
//             onChangeText={(text) => {
//               const newAppLimits = [...appLimits];
//               newAppLimits[index].limit = text;
//               setAppLimits(newAppLimits);
//             }}
//           />
//         </View>
//       ))}
//       <Button title="Add App Limit" onPress={handleAddAppLimit} />
//       <Button title="Set App Restrictions" onPress={handleRestriction} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: "80%",
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   appLimitContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   },
// });

// export default RestrictionAppPage;
