import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Button, ButtonGroup, withTheme, SearchBar, Divider, Input } from '@rneui/themed';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyServicesScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      
      <View style={styles.contenedor_s}>
        <View style={styles.chat}>

        </View>
        <View style={styles.lista}>
        </View>
        
      </View>
      <View style={styles.teclado}>
        <Input
          disabledInputStyle={{ background: "#ddd" }}
          label="User Form"
          leftIcon={<Icon name="account-outline" size={20} />}
          leftIconContainerStyle={{}}
          rightIcon={<Icon name="close" size={20} />}
          rightIconContainerStyle={{}}
          placeholder="Mensaje"
        />
      </View>
    </SafeAreaView>
  );
};

export default MyServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    margin: 10,
  },
  contenedor_s: {
    flex: 1,
//    backgroundColor: "blue",
    flexDirection: 'row',
  },
  chat: {
    backgroundColor: "#d7dbdd",
    borderColor:'#a1a4a6',
    flex: 1,
    margin:5,
    padding:90,
    borderRadius:15,
    borderWidth:2,    
  },
  lista: {
    backgroundColor: "#d7dbdd",
    borderColor:'#a1a4a6',
    flex: 1,
    margin:5,
    borderRadius:15, 
    borderWidth:2, 
  },
  teclado: {
    //backgroundColor: "yellow",
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop:10,
    borderRadius:15,
    borderColor:'#a1a4a6',
    borderWidth:2, 
  }
});
