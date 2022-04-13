import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet,TouchableOpacity,ScrollView,  } from "react-native";
const ItemService  = ({ task,handleDelete }) => {

  const navigation = useNavigation();
 

  useEffect(() => {
      navigation.setOptions({
          headerLargeTitle: true,
          headerTitle: "Services",
          headerRight: () => (
              <TouchableOpacity
                  onPress={() => navigation.navigate("Stack")}
                  >
                  <Text style={{color: '#ffffff',backgroundColor: "purple", width: 80,
                      height: 30,
                      borderRadius: 5, textAlign: "center", marginRight: 20, fontSize: 15}}>Categories</Text>
      
              </TouchableOpacity>
          ),
          headerSearchBarOptions: {
              placeholder: "Services",
              onChangeText: (event) => {
              },
          },
      });
  }, [navigation]);

    return (
        <View style={styles.itemContainer}>
                      <TouchableOpacity>

          <Text style={styles.itemTitle}>{ task.service_n }</Text>
      </TouchableOpacity>

          <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(task.id_service)}
      >
        <Text style={{ color: "#fff" }}>View</Text>
      </TouchableOpacity>
      </View>
      );
      
      
    };
      
    const styles = StyleSheet.create({
        itemContainer: {
          backgroundColor: "#333333",
          padding: 20,
          marginVertical: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 5,
        },
        itemTitle: {
          color: "#ffffff",
        },
      });
      export default ItemService ;