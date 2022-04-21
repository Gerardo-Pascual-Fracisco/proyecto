import React, { useState, useEffect } from "react";
import {  RefreshControl, View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput, } from "react-native";
import ServicesItem from '../../components/Services/ServicesItem'
import { getServices } from '../../api'

const ServicesScreen = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const [Services, setServices] = useState([])
  const [search, setSearch] = useState("");

  const loadServices = async () => {
    const data = await getServices()
    setServices(data.data)
  };
  useEffect(() => {
    loadServices();
  }, []);

  const renderItem = ({ item }) => {
    return <ServicesItem Service={item} />

  };
  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadServices();
    setRefreshing(false);
  })
  return (


<View style={styles.container}>
      <StatusBar backgroundColor="#141414" />

      <View style={styles.header}>
        <Text style={styles.title}>Comserp</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Servicio "
          placeholderTextColor="#000000"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>
    
    <FlatList
      style={{ width: '100%' }}
      data={Services.filter(
        (Service) =>
        Service.service_n.toLowerCase().includes(search)
      )}
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
    </View>
  );
};
export default ServicesScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    color: "#000000",
    marginTop: 10,
  },
  list: {
    width: "90%",
  },
  searchInput: {
    color: "#000000",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    width: "50%",
    textAlign: "center",
  },
});