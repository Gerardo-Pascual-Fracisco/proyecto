import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Text, View, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios'
const URL = 'http://localhost:8000/api/category'

import Card from '../../components/Card';

function Home() {

  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);
  // const [ datalista, setlistalibro ] = useState([])

  useEffect(() => {
    getlibros()
  }, [])

  const getlibros = async () => {
    axios.get(URL)
      .then(({ data }) => {
        console.log(data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const renderItem = ({ item }) => (
    <Card Name={item.name} />)

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (

        <View>
          <ScrollView horizontal={true}>
            {data.map(item => {
              return (
                <View key={item => item.id_category.toString()} renderItem={renderItem}>
                  <Text>{item.name}: </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>




      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  body: {
    marginTop: 10,
    flexDirection: 'row',
  },
  box: {
    flex: 1,
    height: 50,
    width: 160,
  },
  textList: {
    fontSize: 25,
    color: 'blue',
  },

  title: {
    fontSize: 25,
    color: 'blue',
  },
  image: {
    width: 136,
    height: 108,
  },
});
export default Home;