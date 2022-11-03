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

export const ButtonPillBack = ({ title, onPress, left, right }) => {


    return (
        <Pressable
            style={({ pressed }) => pressed ? styles.buttonPressed : styles.button}
            onPress={onPress}>

            {
                left && <View style={styles.container}>
                    <IonIcons name='chevron-back' size={20} style={{ color: '#A3A4A8' }}></IonIcons>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            }
            {
                right && <View style={styles.container}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <IonIcons name='chevron-forward' size={20} style={{ color: '#A3A4A8' }}></IonIcons>
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
        borderRadius: 40,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'white',
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