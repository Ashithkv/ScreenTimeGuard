// import React from "react";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import UserRegistrationForm from "./src/components/UserRegistrationForm";
// import AddSchedulePage from "./src/components/SchedulePage";
// // import RestrictionAppPage from "./src/components/AddWorkTimePage";
// import SchedulePage from "./src/components/SchedulePage";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="UserRegistration">
//         <Stack.Screen
//           name="UserRegistration"
//           component={UserRegistrationForm}
//           options={{ title: "Register" }}
//         />
//           <Stack.Screen
//           name="SchedulePage"
//           component={SchedulePage}
//           options={{ title: "SchedulePage App" }}
//         />
//         <Stack.Screen
//           name="AddSchedule"
//           component={AddSchedulePage}
//           options={{ title: "Add Schedule" }}
//         />
      
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

//
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import SchedulePage from "./src/components/SchedulePage";
// import AddWorkTimePage from "./src/components/AddWorkTimePage";
// import RestrictionsPage from "./src/components/RestrictionsPage";
// import SetLimitModal from "./src/components/SetLimitModal";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Schedule">
//         <Stack.Screen name="Schedule" component={SchedulePage} />
//         <Stack.Screen name="AddWorkTime" component={AddWorkTimePage} />
//         <Stack.Screen name="Restrictions" component={RestrictionsPage} />
//         <Stack.Screen name="SetLimit" component={SetLimitModal} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

//
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import SchedulePage from "./src/components/SchedulePage";
// import AddWorkTimePage from "./src/components/AddWorkTimePage";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Schedule">
//         <Stack.Screen name="Schedule" component={SchedulePage} />
//         <Stack.Screen name="AddWorkTime" component={AddWorkTimePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // For storing token locally
// import SchedulePage from "./src/components/SchedulePage";
// import AddWorkTimePage from "./src/components/AddWorkTimePage";
// import UserRegistrationForm from "./src/components/UserRegistrationForm";

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     // Example: Check if token exists in AsyncStorage (you can use your own token management)
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!isLoggedIn ? ( // If not logged in, show registration/login form
//           <Stack.Screen
//             name="UserRegistration"
//             component={UserRegistrationForm}
//             options={{ headerShown: false }} // Optional: Hide header for registration/login
//           />
//         ) : (
//           <>
//             <Stack.Screen name="Schedule" component={SchedulePage} />
//             <Stack.Screen name="AddWorkTime" component={AddWorkTimePage} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;






// import React, { useEffect, useState } from "react";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import UserRegistrationForm from "./src/components/UserRegistrationForm";
// import SchedulePage from "./src/components/SchedulePage";
// import RestrictionsPage from "./src/components/RestrictionsPage";
// import HomePage from "./src/components/HomePage";

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="UserRegistration">
//         {!isLoggedIn ? (
//           <Stack.Screen
//             name="UserRegistration"
//             component={UserRegistrationForm}
//             options={{ title: "Register" }}
//           />
//         ) : (
//           <>
//             <Stack.Screen
//               name="HomePage"
//               component={HomePage}
//               options={{ title: "Home" }}
//             />
//             <Stack.Screen
//               name="SchedulePage"
//               component={SchedulePage}
//               options={{ title: "Schedule" }}
//             />
//             <Stack.Screen
//               name="RestrictionsPage"
//               component={RestrictionsPage}
//               options={{ title: "RestrictionsPage" }}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;








// import React, { useEffect, useState } from "react";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import UserRegistrationForm from "./src/components/UserRegistrationForm";
// import SchedulePage from "./src/components/SchedulePage";
// import AddSchedulePage from "./src/components/AddWorkTimePage";
// import HomePage from "./src/components/HomePage"; // Ensure this import is correct

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     const token = await AsyncStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="UserRegistration">
//         {!isLoggedIn ? (
//           <Stack.Screen
//             name="UserRegistration"
//             component={UserRegistrationForm}
//             options={{ title: "Register" }}
//           />
//         ) : (
//           <>
//             <Stack.Screen
//               name="HomePage"
//               component={HomePage}
//               options={{ title: "Home" }}
//             />
//             <Stack.Screen
//               name="SchedulePage"
//               component={SchedulePage}
//               options={{ title: "Schedule" }}
//             />
//             <Stack.Screen
//               name="AddSchedule"
//               component={AddSchedulePage}
//               options={{ title: "Add Schedule" }}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// --------------------------------------------------------------------------------
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/components/HomePage";
import UserRegistrationForm from "./src/components/UserRegistrationForm";
import SchedulePage from "./src/components/SchedulePage";
import AddWorkTimePage from "./src/components/AddWorkTimePage";
import RestrictionsPage from "./src/components/RestrictionsPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserRegistrationForm">
        <Stack.Screen name="UserRegistrationForm" component={UserRegistrationForm} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SchedulePage" component={SchedulePage} />
        <Stack.Screen name="AddWorkTimePage" component={AddWorkTimePage} />
        <Stack.Screen name="RestrictionsPage" component={RestrictionsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
