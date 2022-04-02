import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home/Home";

const HomeStackNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <HomeStack.Screen
                name="Home"
                component={Home}
            />
        </HomeStack.Navigator>
    );
}
export default HomeStackNavigator;