import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Profile } from "../pages/profile";
import { Search } from "../pages/search";

import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Feather name="home" size={25} color="#000" />;
            },
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: () => {
              return <Feather name="airplay" size={25} color="#000" />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <Feather name="user" size={25} color="#000" />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => {
              return <Feather name="search" size={25} color="#000" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
