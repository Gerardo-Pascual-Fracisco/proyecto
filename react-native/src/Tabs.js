import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './stack/HomeStackScreen';
import SettingStackNavigator from './stack/SettingStackScreen';
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from 'react-native-vector-icons/MaterialIcons';


const Tabs = () => {

    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#000000",
                    },
                    headerTintColor: "white",
                    headerBackTitle: "Back",
                    //headerShown: false,
                    tabBarActiveTintColor: 'purple',
                }}>

                <Tab.Screen name="Inicio"
                    component={HomeStackNavigator}
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />                
                <Tab.Screen name="Busqueda"
                    component={HomeStackNavigator}
                    options={{
                        tabBarLabel: 'Busqueda',
                        tabBarIcon: ({ color, size }) => (
                            <Icon2 name="home-work" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Gestor de Servicios"
                    component={HomeStackNavigator}
                    options={{
                        tabBarLabel: 'Servicios',
                        tabBarIcon: ({ color, size }) => (
                            <Icon2 name="contacts" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Configuraciones"
                    component={SettingStackNavigator}
                    options={{
                        tabBarLabel: 'Configuracion',
                        tabBarIcon: ({ color, size }) => (
                            <Icon2 name="settings" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Tabs;






