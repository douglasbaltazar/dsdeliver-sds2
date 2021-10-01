import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OrdersCard from '../OrderCard';

export default function Orders() {
    return (
        <>
            <ScrollView style={styles.container}>
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
                <OrdersCard />
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
