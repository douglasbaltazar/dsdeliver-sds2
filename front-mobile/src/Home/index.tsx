import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Routes';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<homeScreenProp>();


    return (
        <>
            <View style={styles.container}>
                <Image source={require('../assets/deliveryman.png')} />
                <Text style={styles.title}>
                    Acompanhe os pedidos e {'\n'} entregue no prazo!
                </Text>
                <Text style={styles.subTitle}>
                    Receba todos os pedidos do seu {'\n'}  restaurante na palma da sua mão
                </Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Orders')}>
                        VER PEDIDOS
                    </Text>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        alignItems: 'center'
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: 'bold',
        marginTop: 31,
        textAlign: 'center'
    },
    subTitle: {
        color: '#9E9E9E',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: '5%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
}
);
