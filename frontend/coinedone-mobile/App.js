// import React from "react";
// import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import UserRegistrationForm from "./src/components/UserRegistrationForm";
// import AddSchedulePage from "./src/components/SchedulePage";
// import RestrictionAppPage from "./src/components/RestrictionAppPage";

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
//         <Stack.Screen
//           name="AddSchedule"
//           component={AddSchedulePage}
//           options={{ title: "Add Schedule" }}
//         />
//         <Stack.Screen
//           name="RestrictionApp"
//           component={RestrictionAppPage}
//           options={{ title: "Restriction App" }}
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
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SchedulePage from "./src/components/SchedulePage";
import AddWorkTimePage from "./src/components/AddWorkTimePage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Schedule">
        <Stack.Screen name="Schedule" component={SchedulePage} />
        <Stack.Screen name="AddWorkTime" component={AddWorkTimePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
