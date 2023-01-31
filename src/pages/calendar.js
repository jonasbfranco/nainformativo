import { StyleSheet, Text, View } from "react-native";

function Calendar() {
  return (
    <View style={styles.container}>
      <Text>Pagina Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#040316",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { Calendar };
