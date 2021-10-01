import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text, Touchable } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import OrdersCard from '../OrderCard';
import { RootStackParamList } from '../Routes';
import { Order } from '../types';


type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;


export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const isFocused = useIsFocused();
    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos"))
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        if(isFocused) {
            fetchData();
        }
    }, [isFocused])

    const navigation = useNavigation<homeScreenProp>();

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order })
    }
    return (
        <>
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text> Buscando pedidos...</Text>
                ) : (
                    orders.map(order => {
                        return (
                            <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                                <OrdersCard order={order} />
                            </TouchableWithoutFeedback>
                            
                        )
                    })
                )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});
