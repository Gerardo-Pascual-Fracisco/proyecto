import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/s_hom/Home";
import Servicios from "../screens/s-serv/Servicios";
import MyServices  from "../screens/s_search/Search";
import Setting from "../screens/s-conf/Setting";
import Perfil from "../screens/s-conf/Profile_C";


const HomeStackNavigator = createNativeStackNavigator();

function MyHome() {
    return (
        <HomeStackNavigator.Navigator
        screenOptions ={{
            headerShown: false,
        }}
            initialRouteName="Home"
        >
            <HomeStackNavigator.Screen
                name="Home"
                component={Home}
            />
              <HomeStackNavigator.Screen
                name="Servicios"
                component={Servicios}
            />
              <HomeStackNavigator.Screen
                name="MyServices"
                component={MyServices}
            />
             <HomeStackNavigator.Screen
                name="Setting"
                component={Setting}
            />
            <HomeStackNavigator.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerBackTitleVisible: false,                    
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}
function MySetting() {
  return (
      <HomeStackNavigator.Navigator
      screenOptions ={{
          headerShown: false,
      }}
          initialRouteName="Home"
      >
          <HomeStackNavigator.Screen
              name="Home"
              component={Home}
          />
            <HomeStackNavigator.Screen
              name="Servicios"
              component={Servicios}
          />
            <HomeStackNavigator.Screen
              name="MyServices"
              component={MyServices}
          />
           <HomeStackNavigator.Screen
              name="Setting"
              component={Setting}
          />
          <HomeStackNavigator.Screen
              name="Perfil"
              component={Perfil}
              options={{
                  headerBackTitleVisible: false,                    
              }}
          />
      </HomeStackNavigator.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (

    <Tab.Navigator 
    screenOptions ={{
      headerStyle: {
        backgroundColor: "#000000",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
        //headerShown: false,
    }}>
      
      <Tab.Screen name="Home"
        component={MyHome}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Servicios"
        component={Servicios}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="home-work" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen name="MyServices"
        component={MyServices}
        options={{
          tabBarLabel: 'Servicios',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="contacts" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Configuracion',
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="settings" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Perfil"
      component={Perfil}
      options={{
        
        tabBarIcon: ({ color, size }) => (
          <Icon2 name="settings" color={color} size={size} />
        ),
      }}
    />
    
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}