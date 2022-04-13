import React from "react";
import Layout from "../../components/Categories/Layout";

import ServicesList from "../../components/Services/ServicesList";
import { Dimensions,View, Text, StyleSheet, ScrollView,TouchableOpacity,ImageBackground,TextInput } from 'react-native';
import { Button, ButtonGroup, withTheme,SearchBar, Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import Feather from 'react-native-vector-icons/Feather';
const widthScreen = Dimensions.get ("window").width

    
const ServicesScreen = () => { 
    return (
        <View style = { styles.container }>
             <View style = { styles.container1 }>
{/* ////////////////////////////////////////////////////////////////////////////////////*/}
      <ScrollView style={{padding: 20,}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
            alignItems: 'stretch',

          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 10}}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Categories
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>

       
       
  
 
  
       
      </ScrollView>





 {/* ////////////////////////////////////////////////////////////////////////////////////*/}
             </View>
            
             <View style = { styles.container3 }>
    
  
             
             <Layout>
      <ServicesList />
    </Layout>
             </View>
        </View>
        )
}



    

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
      alignItems: 'stretch',
      backgroundColor: 'red',
      flex: 1,
      flexDirection: 'column',
      
     // justifyContent: 'center',
    },
  container1: {
      alignItems: 'center',
      backgroundColor: 'yellow',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',

      
      
  },
  container2: {
      alignItems: 'center',
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
  },
  container3: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
},

viewBody: {
  flex: 1,
}

})

