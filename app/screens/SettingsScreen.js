/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const SettingsScreen = () => {


    return (
        <View style={styles.sectionContainer}>
            {/* <Text
                onPress={() => alert('This is the Settings Screen.')}
                style={styles.textStyle}>Settings Screen</Text> */}
            <AnimatedLottieView
                autoPlay
                loop
                source={require('../../assets/construction.json')}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
});