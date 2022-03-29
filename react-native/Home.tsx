/*
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList ,Text, View } from 'react-native';
import axios from 'axios'
const URL='http://192.168.38.27:80/api/category'

//components
import Card from '../components/Card'
 function Home() {

  const [data, setData] = useState([]);
  
  const [isLoading, setLoading] = useState(true);
  // const [ datalista, setlistalibro ] = useState([])

  useEffect(() => {
    getlibros()
  },[])

  const getlibros = async () => {
    axios.get(URL)
    .then(({data}) => {
      console.log(data)
      setData(data)
    })
    .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  
    const renderItem = ({ item }) => (
      <Card Name={item.Name}  />)

      return (
        <View style={styles.container}>
          <View style={{flex: 0.2, backgroundColor: 'steelblue'}} >
          <Text style={styles.title}>Libros</Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id_category.toString()}
          />
          <StatusBar style="auto" />

        </View>
      );
}
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingHorizontal: 10,
        },
        body:{
          marginTop:10,
          flexDirection: 'row',
        },
        box:{
          flex:1,
          height: 50,
          width: 160,
        },
        textList: {
          fontSize: 25,
          color:'blue',
        },
        
        title: {
          fontSize: 25,
          color:'blue',
        },
        image:{
         width: 136,
         height: 108,
        },
      });
      export default Home;
*/