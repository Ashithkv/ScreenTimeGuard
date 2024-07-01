import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { registerUser, loginUser } from '../api/api';

const UserRegistrationForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleRegistration = async () => {
    if (!name || !email || !password) {
      Alert.alert("Validation Error", "Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await registerUser({ name, email, password });
      const userId = response.data._id; // Assuming the server response contains userId
      console.log("Register", userId)
      Alert.alert("Success", "User registered successfully");
      navigation.navigate("HomePage", { userId });
    } catch (error) {
        const message = error.response?.data?.message || "Failed to register user. Please try again.";
        Alert.alert(message);    
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Validation Error", "Please enter email and password");
      return;
    }

    setIsLoading(true);

    try {
      const response = await loginUser({ email, password});
      const userId = response.data._id; // Assuming the server response contains userId
      console.log("log",userId)
      Alert.alert("Success", "User logged in successfully");
      navigation.navigate("HomePage", { userId });
    } catch (error) {
        const message = error.response?.data?.message || "Failed to log in. Please try again.";
        Alert.alert(message);    
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{isLoginMode ? "User Login" : "User Registration"}</Text>
      {!isLoginMode && (
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      )}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <View style={styles.button}>
        <Button title={isLoading ? "Loading..." : isLoginMode ? "Login" : "Register"} onPress={isLoginMode ? handleLogin : handleRegistration} disabled={isLoading} />
      </View>
      <View style={styles.button}>
        <Button title={isLoginMode ? "Switch to Register" : "Switch to Login"} onPress={() => setIsLoginMode(!isLoginMode)} />
      </View>
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
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button:{
    width: "60%",
    paddingHorizontal: 10, 
    marginTop: 10,
  }
});

export default UserRegistrationForm;

