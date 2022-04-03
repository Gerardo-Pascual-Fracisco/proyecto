import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Text, View } from 'react-native';
import axios from 'axios'
const URL = 'http://localhost:8000/api/user/Leonora Schuppe'

function Profile_C() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getlibros()
  }, [])

  const getlibros = async () => {
    axios.get(URL)
      .then(({ data }) => {
        console.log(data)
        setData(data.usuario)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  return (
    <View style={styles.container}>
      <View>
        <Text>Usuario</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ paddingBottom: 10 }}>
            <Text>  Nombre: {item.name}  </Text>
            <Text>  Email: {item.email}  </Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />


    </View>
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
export default Profile_C;