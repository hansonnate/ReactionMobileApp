/**
 * Results Of Survey Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ResultsScreen = () => {


    return (
        <View style={styles.sectionContainer}>
            <Text
                onPress={() => alert('This is the Results Screen.')}
                style={styles.textStyle}>Results Screen</Text>
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