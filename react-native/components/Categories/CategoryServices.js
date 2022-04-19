import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native'
const MOSTRAR_SERVICES = 'http://192.168.1.72:8000/api/showById'

export default function CategoryServices({ navigation, route }) {

  const { name, id } = route.params
  const id_category=id;
  navigation.setOptions({ title: name })

  const [refreshing, setRefreshing] = React.useState(false);
  const [tasks, setTasks] = useState([])

  //obtener servicios de categoria
  const getCateServices = async (id=id_category) => {
    const res = await fetch(`${MOSTRAR_SERVICES}/${id}`);
    console.log(`${MOSTRAR_SERVICES}/${id}`);
    return await res.json();
  };

  const loadTasks = async () => {
    const data = await getCateServices()
    setTasks(data.services)
    console.log(data.services);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const renderItem = ({ item }) => {
<View><Text>{item.foto}</Text></View>
  };

  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  })
  return (
    <FlatList
      style={{ width: '100%' }}
      data={tasks}
      keyExtractor={(item) => item.id_service + ""}
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




