import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Background } from "./../components/Background";
import { AuthRoute } from "./auth.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoute />
    </NavigationContainer>
  )
}
