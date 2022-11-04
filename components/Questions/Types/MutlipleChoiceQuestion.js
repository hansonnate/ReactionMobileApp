/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ReactionTextInput } from '../../TextInput/ReactionTextInput';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const MultipleChoiceQuestion = ({active, choiceQuestion, textQuestion}) => {


    return (
        <View style={{paddingTop: 5}}>
            {active && <Text style={styles.label}>CHOICES</Text>}
            {active && choiceQuestion.choices.map((value, index) => <ReactionTextInput key={index} value={value}></ReactionTextInput>)}
            {!active && choiceQuestion.choices.map((value, index) => <Text key={index} style={styles.textNotActive}>{value}</Text>)}
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
        color: '#616565',
        fontSize: 17,
    },
    textStaticStyle: {
        // fontSize: 26,
        // fontWeight: 'bold'
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#E3E3E3',
        fontSize: 17,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        fontSize: 10,
        color: '#738C91',
    },
    textNotActive: {
        marginLeft: 30,
        paddingVertical: 4,
        // fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
});