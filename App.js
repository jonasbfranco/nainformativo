import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
