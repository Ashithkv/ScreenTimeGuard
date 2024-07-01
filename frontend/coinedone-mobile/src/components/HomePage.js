import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = route.params;
  
  console.log("Home page:", userId);
  return (
    <View>
     <View style={styles.container}>
        <Button title="Go to Schedule" onPress={() => navigation.navigate("SchedulePage", { userId })} style={styles.button} />
     </View>
     <View style={styles.container}>
        <Button title="Go to Restrictions" onPress={() => navigation.navigate("RestrictionsPage",{ userId })} style={styles.button} />
     </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10, 
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0288d1",
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
});

export default HomePage;
 
// import React from "react";
// import { View, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const HomePage = ({ route }) => {
//   const navigation = useNavigation();
//   const { userId } = route.params;
  
//   console.log("User ID:", userId);

//   return (
//     <View>
//       <Button title="Add Work Time" onPress={() => navigation.navigate("AddWorkTimePage", { userId })} />
//     </View>
    
//   );
// };



