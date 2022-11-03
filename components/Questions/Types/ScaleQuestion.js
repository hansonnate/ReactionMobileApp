/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import _ from 'lodash';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ScaleQuestion = ({active, scaleQuestion}) => {
    const range = _.range(scaleQuestion.min, scaleQuestion.max + 1, scaleQuestion.step);

    return (
        <View style={{paddingTop: 5}}>
           <View style={styles.container}>
            {range.map((value, index) => (<Text key={index}>{value}</Text>))}
           </View> 
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row', 
    },
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