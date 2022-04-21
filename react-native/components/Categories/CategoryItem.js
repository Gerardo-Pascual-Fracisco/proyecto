import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ task}) => {
  const navigation = useNavigation();
  

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
       onPress={() => navigation.navigate("CategoryS", { id:task.id_category,name:task.name })}
        >

        <Text style={styles.itemTitle}>{task.name}</Text>
        <Image source={{ uri: task.foto }}
          style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#2E8B57", padding: 7, borderRadius: 5 }}
        onPress={() => navigation.navigate("CategoryS", { id:task.id_category,name:task.name })}
      >
        <Text style={{ color: "#FFF" }}>Ver</Text>
      </TouchableOpacity>
    </View>
  );


};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  itemTitle: {
    color: "#000000",
  },
  image:{
    width: 50,
    height: 50,
   },
});
export default CategoryItem;