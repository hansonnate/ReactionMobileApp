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

export const ReactionActiveTextInput = ({ placeholder, label, value, onChange, active, italics, error, errorMessage, setOnFocus }) => {
    // const [text, onChangeText] = useState(value);
    // const [changed, setChanged] = useState(false);
    const [focus, setFocus] = useState(false);


    // function handleChange(newvalue) {
    //     onChangeText(newvalue);
    //     // if (newvalue === value) {
    //     //     setChanged(false);
    //     // } else if (!changed) {
    //     //     setChanged(true);
    //     // }
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

    // }
    return (
        <View style={styles.container}>
            {label && active && <View style={{display: 'flex', flexDirection:'row'}}>
                <Text style={styles.label}>{label.toUpperCase()}</Text>
                {error && <Text style={styles.errorMessage}>{errorMessage ? errorMessage : "Error..."}</Text>}
            </View>}
            {active && <TextInput
                style={focus ? styles.inputActiveFocus : styles.inputActive}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder ? placeholder : "Enter..."}
                onFocus={handlefocus}
                onEndEditing={handleLeaveFocus}
            // keyboardType="number-pad"
            />}
            {!active && <Text
                style={italics ? styles.italics : styles.input}
            // style={{fontFamily: 'futura'}}
            // onChangeText={handleChange}
            // value={text}
            // placeholder={placeholder ? placeholder : "Enter..."}
            // keyboardType="number-pad"
            >{value}</Text>}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 2.5,
    },
    inputActive: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    inputActiveFocus: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#2A627C",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    input: {
        // height: 20,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 20,
        // overflow: 'visible',
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
    errorMessage: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: 'red',
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
