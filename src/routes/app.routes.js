import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/home";
import { Dashboard } from "../pages/dashboard";
import { Profile } from "../pages/profile";
import { Search } from "../pages/search";

<<<<<<< HEAD
import { Feather, Ionicons } from "@expo/vector-icons";
=======
import { Feather } from "@expo/vector-icons";
>>>>>>> main

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#9fe801",
          // tabBarInactiveTintColor: "",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "#171626",
            borderTopWidth: 0,

            //   bottom: 14,
            //   left: 14,
            //   right: 14,
            //   elevation: 0,
            //   borderRadius: 4,
            //   height: 60,
            //   marginBottom: 20,
            height: Platform.OS === "android" ? 55 : 100,
          },
        }}
      >
=======
      <Tab.Navigator>
>>>>>>> main
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
<<<<<<< HEAD
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={color} />;
              }

              return <Ionicons name="home-outline" size={size} color={color} />;
=======
            tabBarIcon: () => {
              return <Feather name="home" size={25} color="#000" />;
>>>>>>> main
            },
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
<<<<<<< HEAD
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="calendar" size={size} color={color} />;
              }

              return (
                <Ionicons name="calendar-outline" size={size} color={color} />
              );
=======
            tabBarIcon: () => {
              return <Feather name="airplay" size={25} color="#000" />;
>>>>>>> main
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
<<<<<<< HEAD
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="person" size={size} color={color} />;
              }

              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
=======
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
>>>>>>> main
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
