import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Image, FlatList, RefreshControl, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, SearchBar, Divider } from '@rneui/themed';
import { getUser, updateUser } from '../../src/api/api_user'

const EditProfileScreen = ({ task }) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const [tasks, setUser] = useState([])
  const [getName, setName] = useState([])
  
  const loadUser = async () => {
    const data = await getUser()
    setUser(data.usuario);
  };
  useEffect(() => {
    loadUser();
  }, []);

  const renderItem = ({ item }) => {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.principal}>
          <View style={styles.imagen}>
            <Image style={{
              width: 100,
              height: 100,
            }}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}></Image>
          </View>
          <View style={styles.contenedor_p}>
            <View style={styles.info_p}>
              <Text>Nombre: {item.name}</Text>
              <Text>Correo: </Text><TextInput defaultValue={item.email} onChangeText={(val) => setName(val)} disable={true} />

            </View>
            <View style={styles.botton_edit}>
              <Button onPress={() => updateUser({
                name: "perla",
                email: "destiney.zboncak@example.com",
                address: "718 Eugenia Underpass Cletustown"
              })}></Button>
            </View>
          </View>
        </View>
        <Divider
          style={{ width: "100%" }}
          color="#e4e6e8"
          insetType="left"
          subHeaderStyle={{}}
          width={10}
          orientation="horizontal"
        />
        <View style={styles.contenedor_1}>
          <View style={styles.contenedor_2}>
            <View style={styles.c_texto_1}><Text style={styles.texto_1}>Direccion</Text></View>
            <View style={styles.contenedor_3}><Text>{item.address}</Text></View>
          </View>
          <View style={styles.contenedor_2}>
            <View style={styles.c_texto_1}><Text style={styles.texto_1}>Metodo de Pago</Text></View>
            <View style={styles.contenedor_3}></View>
          </View>
          <View style={styles.contenedor_2}>
            <View style={styles.c_texto_1}><Text style={styles.texto_1}>Redes sociales</Text></View>
            <View style={styles.contenedor_3}></View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadUser();
    setRefreshing(false);
  })
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id + ""}
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

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    marginHorizontal: 10,
    marginRight: 15,
  },
  principal: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
  },
  imagen: {
    backgroundColor: '#e4e6e8',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 100,
    height: 100,

  },
  contenedor_p: {
    //backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',

    margin: 10,
    width: 100,
    height: 150,
  },
  info_p: {
    backgroundColor: '#e4e6e8',
    flex: 1,
    borderRadius: 10,
    padding: 5,
  },
  botton_edit: {
    //backgroundColor: 'yellow',
    flex: 0,
    padding: 10,

  },
  contenedor_1: {
    //backgroundColor: 'purple',
    flex: 1,
    flexDirection: 'column',
  },
  contenedor_2: {
    backgroundColor: '#e4e6e8',
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
  c_texto_1: {
  },
  texto_1: {
    paddingLeft: 10,
    fontSize: 15,
  },
  contenedor_3: {
    backgroundColor: '#c9cdd1',
    borderRadius: 10,
    borderColor: '#939ba3',
    borderWidth: 2,
    marginHorizontal: 10,
    marginBottom: 10,
    flex: 1,
  },
});
