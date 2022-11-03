/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const TextQuestion = ({active}) => {


    return (
        <View style={{paddingTop: 5}}>
           {active && <TextInput
                onPress={() => alert('This is the Settings Screen.')}
                multiline
                editable
                numberOfLines={7}
                maxLength={400}
                placeholder='Answer Here...'
                style={styles.textStyle}>

            </TextInput> }
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        // fontSize: 26,
        // fontWeight: 'bold'
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: 'black',
        fontSize: 17,
    },
});