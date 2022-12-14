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

export const ReactionTextInput = ({ placeholder, label, value, onChange, index, textContentType, error, errorMessage, setOnFocus, keyboardType }) => {
    // const [text, onChangeText] = useState(value);
    // const [changed, setChanged] = useState(false);
    const [focus, setFocus] = useState(false);
    // const [focus, setFocus] = useState(false);


    function handleChange(newvalue) {
        onChange(newvalue, index);
    }

    function handlefocus() {
        setFocus(true);
        if (setOnFocus) {
            setOnFocus(true);
        }
    }
    function handleLeaveFocus() {
        setFocus(false)
        if (setOnFocus) {
            setOnFocus(false);
        }
    }


    // function onBlur(newvalue) {
    //     if (onChange) {
    //         onChange(newvalue, index);
    //     }
    // }
    return (
        <View style={styles.container}>
            {label && <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.label}>{label.toUpperCase()}</Text>
                {error && <Text style={styles.errorMessage}>{errorMessage ? errorMessage : "Error..."}</Text>}
            </View>}
            <TextInput
                style={focus ? styles.inputFocus : styles.input}
                onChangeText={handleChange}
                value={value}
                placeholder={placeholder ? placeholder : "Enter..."}
                textContentType={textContentType ? textContentType : 'none'}
                onFocus={handlefocus}
                onEndEditing={handleLeaveFocus}
                keyboardType={keyboardType ? keyboardType : ''}
                placeholderTextColor={'#d8d9d9'}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 2.5,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    inputFocus: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#A627C",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    inputChanged: {
        // height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F4E3C2",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        fontSize: 10,
        color: '#738C91',
    },
    changedAlert: {
        color: '#F4E3C2',
    },
    errorMessage: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: 'red',
        fontFamily: 'Gill Sans',
    },
});
