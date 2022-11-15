/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const TextQuestion = ({active, textQuestion}) => {
    const [focus, setFocus] = useState(false);


    return (
        <View style={{paddingTop: 5}}>
           {active && <TextInput
                multiline
                editable
                numberOfLines={7}
                maxLength={textQuestion.maxLength}
                placeholder={textQuestion.placeholder ? textQuestion.placeholder : 'Answer Here...'}
                onFocus={() => setFocus(true)}
                onEndEditing={() => setFocus(false)}
                style={focus ? styles.textStyleFocus : styles.textStyle}>
            </TextInput> }
            {!active && <Text style={styles.textStaticStyle}>{textQuestion.placeholder ? textQuestion.placeholder : 'Answer Here...'}</Text> }
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
    textStyleFocus: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#2A627C",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
    textStaticStyle: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#E3E3E3',
        fontSize: 17,
    },
});