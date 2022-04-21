import { View, SafeAreaView, Image, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../components/colors';
import axios from 'axios'

const User = ({ navigation, route }) => {
  const { name, id } = route.params
  const USER = `http://192.168.1.126:8000/api/user/${id}`



  const [refreshing, setRefreshing] = React.useState(false);

  const [user, setuser] = useState([])

  const loaduser = async () => {

    axios
      .get(USER)
      .then(res => {
        setuser(res.data.usuario)
      })
      .catch(err => {
        console.log(err)
      })
  };


  useEffect(() => {
    navigation.setOptions({ title: name })

    axios
      .get(USER)
      .then(res => {
        setuser(res.data.usuario)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const renderItem = ({ item }) => {

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}>
        <View style={style.header}>
          <Icon name="shopping-cart" size={28} />
        </View>

        <View
          style={{
            height: 200,
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: item.foto }}

            style={{
              flex: 1, width: '50%',
              height: '100%'
            }}
          />
        </View>
        <View style={style.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={style.line} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best choice</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>
            <View style={style.priceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: colors.white,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                ${item.name}
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}>
              {item.address}
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: 'bold',
                  }}>
                  1
                </Text>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>+</Text>
                </View>
              </View>

              <View style={style.buyBtn}>
                <Text
                  style={{ color: colors.white, fontSize: 18, fontWeight: 'bold' }}>
                  Contratar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };


  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loaduser();
    setRefreshing(false);
  })
  return (
    <FlatList
      style={{ width: '100%' }}
      data={user}
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
const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'

  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: colors.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: colors.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: 'bold', fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: colors.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default User;