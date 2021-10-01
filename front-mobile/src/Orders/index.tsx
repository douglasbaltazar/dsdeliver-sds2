import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import OrdersCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert("Houve um erro ao buscar os pedidos"))
            .finally(() => setIsLoading(false));

    }, [])

    return (
        <>
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <Text> Buscando pedidos...</Text>
                ) : (
                    orders.map(order => {
                        return (
                            <OrdersCard order={order} />
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
