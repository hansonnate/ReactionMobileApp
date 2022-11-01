/**
 * Organization Details Screen
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const OrgDetailsScreen = () => {


    return (
        <View style={styles.sectionContainer}>
            <Text
                onPress={() => alert('This is the Org Details Screen.')}
                style={styles.textStyle}>Organization Details Screen</Text>
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