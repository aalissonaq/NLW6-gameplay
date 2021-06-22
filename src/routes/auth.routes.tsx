import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from 'react-native';

import { Home } from "./../screens/Home";
import { SignIn } from "./../screens/SignIn";


const { Navigator, Screen } = createStackNavigator();

export function AuthRoute() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />

    </Navigator>
  );
}
