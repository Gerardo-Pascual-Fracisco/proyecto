import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions, RefreshControl
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../components/colors';
import axios from 'axios'
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get('window').width / 2 - 30;

const CategoryServices = ({ route }) => {
  const { name, id } = route.params
  const navigation = useNavigation();
  const SERVICES = `http://192.168.1.187:8000/api/showById/${id}`


  const [refreshing, setRefreshing] = React.useState(false);

  const [services, setservices] = useState([])

  const loadservices = async () => {

    axios
      .get(SERVICES)
      .then(res => {
        setservices(res.data.services)
      })
      .catch(err => {
        console.log(err)
      })
  };


  useEffect(() => {
    navigation.setOptions({ title: name })

    axios
      .get(SERVICES)
      .then(res => {
        setservices(res.data.services)
        console.log(res)

      })
      .catch(err => {
        console.log(err)
      })
  }
    , [])


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CategoryU", { id: item.service_id, name: item.service_n })}>
        <View style={style.card}>
          <View style={{ alignItems: 'flex-end' }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: item.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={item.like ? colors.red : colors.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={{ uri: item.foto }}

              style={{
                flex: 1, width: '100%',
                height: '100%'
              }}
            />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            {item.service_n}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold' }}>
              ${item.service_id}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: colors.green,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ fontSize: 22, color: colors.white, fontWeight: 'bold' }}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  const onRefresh = React.useCallback(async () => {

    setRefreshing(true);
    await loadservices();
    setRefreshing(false);
  })
  return (
    <FlatList
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 10,
        paddingBottom: 50,
      }}
      numColumns={2}
      data={services}
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


const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',

  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: colors.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: colors.green,

  },
  card: {
    height: 250,
    backgroundColor: colors.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,

  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: colors.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryServices;