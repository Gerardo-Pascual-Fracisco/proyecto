import React from "react";
import { View, StyleSheet,StatusBar } from "react-native";
const Layout =({ children }) => {
    return <View style={styles.container}>
 
    {children}
    </View>;
};
const styles = StyleSheet.create({
  container: {
  
},});
export default Layout;