/**
 * A custom button component
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
// import { Text } from 'react-native';


//Internal imports
// import styles from 'Navbar.module.scss'

export const ButtonGeneric = ({ title, onPress, shadow }) => {


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
        paddingHorizontal: 15,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#15BCC7',
        borderWidth: 1,
        borderColor: '#15BCC7',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
        // zIndex: 1,
    },
    buttonPressed: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#15BCC7',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'Gill Sans',
    },
    textPressed: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#15BCC7',
        fontFamily: 'Gill Sans',
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
    }
});