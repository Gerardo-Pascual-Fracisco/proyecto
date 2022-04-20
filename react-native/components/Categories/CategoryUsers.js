import React, {useEffect, useState} from "react";
import { StyleSheet,Text, View ,FlatList,RefreshControl,TouchableOpacity,Image} from 'react-native'
import axios from 'axios'
import { useNavigation } from "@react-navigation/native";
export default function CategoryUsers ({route}) {
  const {name,id} = route.params
  const navigation = useNavigation();



  
    const [refreshing, setRefreshing] = React.useState(false);

      const [tasks, setTasks] = useState([])

      const loadTasks = async () => {
  
        axios
        .get(`http://192.168.1.126:8000/api/showUser/${id}`)
        .then(res => {
        setTasks (res.data.users)
        })
        .catch(err => {
        console.log(err)
        })
      };
    
      
      useEffect(() => {
        navigation.setOptions({ title: name })

        axios
        .get(`http://192.168.1.126:8000/api/showUser/${id}`)
        .then(res => {
        setTasks (res.data.users)
        })
        .catch(err => {
        console.log(err)
        })
        }, [])

      const renderItem = ({ item }) => {
       
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
       onPress={() => navigation.navigate("User", { id:item.user_id,name:item.name,foto:item.foto  })}
       >

        <Text style={styles.itemTitle}>{item.name}</Text>
        <Image source={{ uri: item.foto }}
          style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => navigation.navigate("User")}
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
          keyExtractor={(item) => item.user_id + ""}
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




