import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/AntDesign'


//importar pantallas para inicio
import HomeScreen from './HomeScreen';
//importar pantallas para busqueda
import ServicesScreen from './ServicesScreen';
//importar pantallas para chat
import MyServicesScreen from './MyServicesScreen';
//importar pantallas para configuracion
import SettingsScreen from './SettingsScreen';
import EditProfileScreen from './EditProfileScreen';


const HomeStack = createStackNavigator();
const ServicesStack = createStackNavigator();
const MyServicesStack = createStackNavigator();
const SettingsStack = createStackNavigator();




const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Inicio"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Inicio',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Busqueda"
      component={ServicesStackScreen}
      options={{
        tabBarLabel: 'Busqueda',
        tabBarColor: '#4f6bad',
        tabBarIcon: ({ color }) => (
          <Icon2 name="person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={MyServicesSatckScreen}
      options={{
        tabBarLabel: 'Chat',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon3 name="contacts" color={color} size={26} />
        ),
      }}
    />
     <Tab.Screen
      name="Configuraciones"
      component={SettingsSatckScreen}
      options={{
        tabBarLabel: 'Configuración',
        tabBarColor: '#ad4f9a',
        tabBarIcon: ({ color }) => (
          <Icon3 name="setting" color={color} size={26} />
        ),
      }}
    />
    
 {/* Pantallas de settings*/}


  </Tab.Navigator>
);

export default MainTabScreen;

//-----------configurar ruta pantallas inicio
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="InicioStack" component={HomeScreen} options={{
      headerShown:false,
      title: 'Inicio'
     }} />
  </HomeStack.Navigator>
);

//-----------configurar ruta pantallas busuqeda
const ServicesStackScreen = ({ navigation }) => (
  <ServicesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ServicesStack.Screen name="BusquedaStack" component={ServicesScreen}  options={{
      headerShown:false,
      title: 'Busqueda'
     }} />
  </ServicesStack.Navigator>
);

//-----------configurar ruta pantallas chat
const MyServicesSatckScreen = ({ navigation }) => (
  <MyServicesStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <MyServicesStack.Screen name="ChatStack" component={MyServicesScreen} options={{
      headerShown:false,
      title: 'Chat'
    }} />
  </MyServicesStack.Navigator>
);

//-----------configurar ruta pantallas configuracion
const SettingsSatckScreen = ({ navigation }) => (
  <SettingsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#ad4f83',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <SettingsStack.Screen name="ConfiguraccionesStack" component={SettingsScreen} options={{
      headerShown:false,
      title: 'Configuraciones'    
    }} />
      <SettingsStack.Screen 
      name="EditProfile" //Nombre que coloras en onPress={() => navigation.navigate('EditProfile')}
      component={EditProfileScreen} 
      options={{title:'Perfil'
    }} />
   
  </SettingsStack.Navigator>
);
