import { View, StyleSheet, Text, StatusBar } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>WorkInspect v1</Text>
      <Text style={styles.descriptionText}>
        Monitoramento preciso para trabalhos de qualidade
      </Text>
    </View>
  );
}

const statusBarHeight = Number(StatusBar.currentHeight) + 100;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    alignItems: "center",
    height: statusBarHeight + 25,
    borderBottomWidth: 1,
    borderBottomColor: "#C0C0C0",
  },
  textHeader: {
    color: "#1C1C1C",
    fontSize: 20,
    fontFamily: "Poppins_400Regular",
  },
  descriptionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 13,
  },
});
