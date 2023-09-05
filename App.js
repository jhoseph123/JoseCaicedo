import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AgregarNumsMayores10 from "./components/AggregarNumsArr";
import PromedioEdades from "./components/PromedioEdades";
import PromedioPOO from "./components/PromedioEdades";

export default function App() {
  return (
    <View style={styles.container}>
      <PromedioPOO />
      <StatusBar style="auto" />
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
