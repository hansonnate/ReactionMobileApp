/**
 * A custom button component
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import { Text } from 'react-native';


//Internal imports
// import styles from 'Navbar.module.scss'

export const ButtonAddMinus = ({ title, onPress, plus, minus }) => {


    return (
        <Pressable
            style={({ pressed }) => pressed ? styles.buttonPressed : styles.button}
            onPress={onPress}>
            {
                plus && <View style={styles.container}>
                    <IonIcons name='add' size={20} style={{ color: '#A3A4A8' }}></IonIcons>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            }
            {
                minus && <View style={styles.container}>
                    <IonIcons name='remove' size={20} style={{ color: '#A3A4A8' }}></IonIcons>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            }
        </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#E9E9E9',
    },
    buttonPressed: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#A3A4A8',
    },
    textPressed: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#A3A4A8',
    },
});