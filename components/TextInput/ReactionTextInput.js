/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ReactionTextInput = ({ placeholder, label }) => {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder ? placeholder : "Enter..."}
                keyboardType="number-pad"
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    input: {
        height: 40,
        // margin: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        padding: 10,
    },
});
