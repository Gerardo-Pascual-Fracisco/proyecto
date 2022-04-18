import React, {useEffect, useState} from "react";
import { StyleSheet,Text, View ,FlatList,RefreshControl} from 'react-native'
import {getCateServices} from '../../api'

export default function MyServicesScreen ({ navigation, route}) {
  

    console.log(route.params)
    const [refreshing, setRefreshing] = React.useState(false);

      const [tasks, setTasks] = useState([])
  
      const loadTasks = async () => {
        const data = await getCateServices()
        setTasks(data);
        console.log(data)
      };
      useEffect(() => {
        loadTasks();
      }, []);
      const renderItem = ({ item }) => {
        return
        (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate}
              >
      
              <Text style={styles.itemTitle}>{item.service_n}</Text>
              <Image source={{ uri: item.foto }}
                style={styles.image} />
            </TouchableOpacity>
      
            <TouchableOpacity
              style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
              onPress={() => navigation.navigate("My services")}
            >
      
      
              <Text style={{ color: "#fff" }}>View</Text>
            </TouchableOpacity>
          </View>
        );
       };
       const onRefresh = React.useCallback(async () => {

        setRefreshing(true);
        await loadTasks () ;
        setRefreshing(false);
    })
      return (
        <FlatList
        style={{ width: '100%'}}
          data={tasks}
          keyExtractor={(item) => item.service_id + ""}
          renderItem={renderItem}
    
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              colors={["#78e08f"]}
              onRefresh={onRefresh}
              progressBackgroundColor="#000"
        />
    }
    />
    
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
    image: {
      width: 50,
      height: 50,
    },
  });




