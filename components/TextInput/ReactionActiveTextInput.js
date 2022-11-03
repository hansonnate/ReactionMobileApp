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

export const ReactionActiveTextInput = ({ placeholder, label, value, active, italics }) => {
    const [text, onChangeText] = useState(value);
    // const [changed, setChanged] = useState(false);


    function handleChange(newvalue) {
        onChangeText(newvalue);
        // if (newvalue === value) {
        //     setChanged(false);
        // } else if (!changed) {
        //     setChanged(true);
        // }
        
    }
    return (
        <View style={styles.container}>
            {label && active && <Text style={styles.label}>{label.toUpperCase()}</Text>}
            {active && <TextInput
                style={styles.inputActive}
                onChangeText={handleChange}
                value={text}
                placeholder={placeholder ? placeholder : "Enter..."}
                // keyboardType="number-pad"
            />}
            {!active && <Text
                style={italics ? styles.italics : styles.input}
                // style={{fontFamily: 'futura'}}
                // onChangeText={handleChange}
                // value={text}
                // placeholder={placeholder ? placeholder : "Enter..."}
                // keyboardType="number-pad"
            > {text}</Text>}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 5,
    },
    inputActive: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    input: {
        height: 20,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 20,
        // fontStyle: 'italic'
        // borderWidth: 2,
        // borderRadius: 5,
        // borderColor: "#E9E9E9",
        // padding: 10,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: '#738C91',
        fontFamily: 'Gill Sans',
    },
    changedAlert: {
        color: '#F4E3C2',
    },
    italics: {
        fontStyle: 'italic',
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 15,
    }
});
