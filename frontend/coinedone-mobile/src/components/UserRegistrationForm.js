// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import axios from "axios";

// const UserRegistrationForm = ({ navigation }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoginMode, setIsLoginMode] = useState(false); // Track current form mode

//   const API_URL = "http://192.168.1.5:5000"; // Replace with your machine's local IP address

//   const handleRegistration = async () => {
//     if (!name || !email || !password) {
//       Alert.alert("Validation Error", "Please fill in all fields");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/users/register`,
//         {
//           name,
//           email,
//           password,
//         },
//         { timeout: 5000 } // Adjust timeout as needed
//       );
//       console.log("Registration Response data:", response.data);
//       Alert.alert("Success", "User registered successfully");
//       navigation.navigate("AddSchedule");
//     } catch (error) {
//       console.error("Error registering user:", error.message);
//       Alert.alert(
//         "Error",
//         `Failed to register user. ${error.message}` // Display detailed error message
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Alert.alert("Validation Error", "Please enter email and password");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/users/login`,
//         {
//           email,
//           password,
//         },
//         { timeout: 5000 } // Adjust timeout as needed
//       );
//       console.log("Login Response data:", response.data);
//       Alert.alert("Success", "User logged in successfully");
//       navigation.navigate("AddSchedule"); // Navigate to appropriate screen after login
//     } catch (error) {
//       console.error("Error logging in:", error.message);
//       Alert.alert(
//         "Error",
//         `Failed to log in. ${error.message}` // Display detailed error message
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleMode = () => {
//     setIsLoginMode(!isLoginMode); // Toggle between registration and login mode
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>
//         {isLoginMode ? "User Login" : "User Registration"}
//       </Text>
//       {!isLoginMode && ( // Render name field only in registration mode
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//         />
//       )}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       {!isLoginMode ? ( // Render Register button in registration mode
//         <Button
//           title={isLoading ? "Loading..." : "Register"}
//           onPress={handleRegistration}
//           disabled={isLoading}
//         />
//       ) : (
//         // Render Login button in login mode
//         <Button
//           title={isLoading ? "Logging in..." : "Login"}
//           onPress={handleLogin}
//           disabled={isLoading}
//         />
//       )}
//       <Button
//         title={isLoginMode ? "Switch to Register" : "Switch to Login"}
//         onPress={toggleMode}
//         style={styles.switchButton}
//       />
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
//   switchButton: {
//     marginTop: 20, // Adjust margin to create space between buttons
//   },
// });

// export default UserRegistrationForm;
