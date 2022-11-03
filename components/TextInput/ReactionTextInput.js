/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ReactionTextInput = ({ placeholder, label, value }) => {
    const [text, onChangeText] = useState(value);
    const [changed, setChanged] = useState(false);


    function handleChange(newvalue) {
        onChangeText(newvalue);
        if (newvalue === value) {
            setChanged(false);
        } else if (!changed) {
            setChanged(true);
        }
        
    }
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label.toUpperCase()} {changed && <Text style={styles.changedAlert}>changed</Text>}</Text>}
            <TextInput
                style={!changed ? styles.input : styles.inputChanged}
                onChangeText={handleChange}
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
        paddingBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    inputChanged: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F4E3C2",
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: '#738C91',
    },
    changedAlert: {
        color: '#F4E3C2',
    },
});
