import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import Header from './Header';
import OrderDetails from './OrderDetails';

export type RootStackParamList = {
    Home: undefined;
    Orders: undefined;
    OrderDetails: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Orders"
                component={Orders}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
            />
        </Stack.Navigator>
    );
};

function Routes() {  
    return (
        <NavigationContainer>
            <Header />
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFF'
                    },
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                <Stack.Screen name="OrderDetails" component={OrderDetails}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;