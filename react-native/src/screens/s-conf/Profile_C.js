import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, StatusBar, FlatList, Text, View, SafeAreaView, ScrollView, Image, } from "react-native";
import styled from 'styled-components'
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
  <SafeAreaView style={styles.container}>
    <ScrollView showsHorizontalScrollIndicato={false} showsVerticalScrollIndicator={false}>
      <View>
        <table>
          <tr>
            <td>
              <View  style={styles.Image}>
              <Image
                  style={styles.tinyLogo}
                  source={{ uri: "http://placekitten.com/100/100" }}
                />
              </View>
            </td>
            <td>
              <ViewA1 style={{paddingRight: 100,}}>
                <text>Nombre:</text>
                <td><InputA1></InputA1></td>
              </ViewA1>
              <ViewA1>
                <text>Correo:</text>
                <td><InputA1></InputA1></td>
              </ViewA1>
            </td>
          </tr>
        </table>
      </View>

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

      <ViewA2>
        <text>Direccion</text>
        <td><InputA2></InputA2></td>
      </ViewA2>
      <ViewA2>
        <text>Redes Sociales</text>
        <td><InputA2></InputA2></td>
      </ViewA2>
      <ViewA2>
        <text>Metodo de Pago</text>
        <td><InputA2></InputA2></td>
      </ViewA2>

      <ViewA2>
        <ButtonA1>cambiar Contraseña</ButtonA1>
      </ViewA2>
    </ScrollView>
  </SafeAreaView>
);
  
}

const ViewA2 = styled.div`
  background-color: write;
  color: black;
  border-color: orange;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px 0px;
  text-align: left;
`;
const InputA2 = styled.input`

  background-color: whrite;
  color: black;
  border-color: purple;
  font-size: 20px;
  padding: 25% 30%;
  border-radius: 5px;
  margin: 10px 0px;
  text-align: left;
`;

const ViewA1 = styled.div`

  background-color: write;
  color: black;
  border-color: orange;
  font-size: 15px;
  border-radius: 5px;
  text-align: left;
`;

const InputA1 = styled.input`

  background-color: whrite;
  color: black;
  border-color: orange;
  padding: 5% 30%;
  border-radius: 5px;
  margin: 10px 0px;
  text-align: left;
`;

const ButtonA1 = styled.button`

  background-color: whrite;
  color: black;
  border-color: black;
  font-size: 20px;
  padding: 5px 5px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  text-align: left;
  
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  Image: {
    paddingLeft: 0,
  },
  body: {
    marginTop: 10,
    flexDirection: "row",
  },
  textList: {
    fontSize: 25,
    color: "blue",
  },

  title: {
    fontSize: 25,
    color: "blue",
  },
});
export default Profile_C;