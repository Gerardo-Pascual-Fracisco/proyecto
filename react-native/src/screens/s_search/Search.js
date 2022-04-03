import React from "react";
import { View, StyleSheet, Text } from "react-native";

const MyServices = () => {
  return (
    <View style={styles.center}>
      <Text>Mis Servicios</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default MyServices;
