import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Setting from "../screens/setting/Setting";
import Profile_C from "../screens/setting/Profile_C";
import Mode from '../screens/setting/mode';
import Attention from '../screens/setting/attention';
import Report from '../screens/setting/report ';

const SettingStackNavigator = () => {
    const SettingStack = createNativeStackNavigator();
    return (
        <SettingStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Setting"
        >
            <SettingStack.Screen
                name="Setting"
                component={Setting}
            />
              <SettingStack.Screen
                name="Profile_C"
                component={Profile_C}
            />
              <SettingStack.Screen
                name="Mode"
                component={Mode}
            />
              <SettingStack.Screen
                name="Attention"
                component={Attention}
            />
              <SettingStack.Screen
                name="Report"
                component={Report}
            />
        </SettingStack.Navigator>
    );
}
export default SettingStackNavigator;