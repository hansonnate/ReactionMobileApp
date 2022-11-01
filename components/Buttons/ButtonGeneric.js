/**
 * A custom button component
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
// import { Text } from 'react-native';


//Internal imports
// import styles from 'Navbar.module.scss'

export const ButtonGeneric = ({ title, onPress }) => {


    return (
        <Pressable
            style={({ pressed }) => pressed ? styles.buttonPressed : styles.button}
            onPress={onPress}>

            {({ pressed }) => (
                <Text style={pressed ? styles.textPressed : styles.text}>
                    {title}
                </Text>
            )}
        </Pressable>
    );

};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#15BCC7',
        borderWidth: 3,
        borderColor: '#15BCC7',
    },
    buttonPressed: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#15BCC7',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textPressed: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#15BCC7',
    },
});