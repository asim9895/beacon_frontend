import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const Routing = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
      {/* <AppRoutes /> */}
    </NavigationContainer>
  );
};

export default Routing;
