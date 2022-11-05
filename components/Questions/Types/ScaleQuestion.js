/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import _ from 'lodash';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ScaleQuestion = ({active, scaleQuestion}) => {
    const range = _.range(scaleQuestion.min, scaleQuestion.max + 1, scaleQuestion.step);
    const [selected, setSelected] = useState();

    const handleChange = (value) => {
        value === selected ? setSelected(null) : setSelected(value);
    };

    return (
        <View style={{paddingTop: 5, display: 'flex',flexDirection: 'row', justifyContent: 'center',}}>
           {active && <View style={styles.container}>
            {range.map((value, index) => (<Pressable key={index} onPress={() => handleChange(value)} style={selected === value ? styles.textContainerSelected : styles.textContainer}><Text key={index} style={selected === value ? styles.textStyleSelected : styles.textStyle}>{value}</Text></Pressable>))}
           </View> }
           {!active && <View style={styles.container}>
            {range.map((value, index) => (<View style={styles.textContainer} key={index}><Text style={styles.textStyle}>{value}</Text></View>))}
           </View> }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row', 
    },
    textStyle: {
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
    textStyleSelected: {
        fontFamily: 'Gill Sans',
        color: 'white',
        fontSize: 17,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#E9E9E9",
        borderRadius: 22,
        width: 44,
        height: 44,
        marginHorizontal: 3,
    },
    textContainerSelected: {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#738C91",
        backgroundColor: "#738C91", 
        borderRadius: 22,
        width: 44,
        height: 44,
        marginHorizontal: 3,
    }
});