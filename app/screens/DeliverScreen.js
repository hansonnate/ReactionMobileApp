/**
 * Deliver Surveys Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
//Internal imports
// import styles from 'Navbar.module.scss'

export const DeliverScreen = () => {


    return (
        <View style={styles.sectionContainer}>
            <Text
                onPress={() => alert('This is the Deliver Survey Screen.')}
                style={styles.textStyle}>Deliver Surveys Screen</Text>
                <AntDesign name="windows" style={{fontSize: 54}}></AntDesign>
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
});