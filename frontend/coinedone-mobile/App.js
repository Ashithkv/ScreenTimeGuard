// App.js

import React from "react";
import "react-native-gesture-handler"; // Import gesture handler required by React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserRegistrationForm from "./src/components/UserRegistrationForm";
import AddSchedulePage from "./src/components/AddSchedulePage";
import RestrictionAppPage from "./src/components/RestrictionAppPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserRegistration">
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistrationForm}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="AddSchedule"
          component={AddSchedulePage}
          options={{ title: "Add Schedule" }}
        />
        <Stack.Screen
          name="RestrictionApp"
          component={RestrictionAppPage}
          options={{ title: "Restriction App" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
