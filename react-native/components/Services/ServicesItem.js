import React from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button, ButtonGroup, withTheme,SearchBar, Divider } from '@rneui/themed';

const SerrvicesItem = ({ Service,handleDelete }) => {
    return (
        <View style={styles.itemContainer}>
                      <TouchableOpacity>
                    
          <Text style={styles.itemTitle}>{ Service.service_n }</Text>
          <Image source={{uri: Service.foto}}
            style={styles.image}/>
      </TouchableOpacity>

          <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(Service.service_id)}
      >
        <Text style={{ color: "#fff" }}>View</Text>
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
      export default SerrvicesItem;