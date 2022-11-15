/**
 * Color Picking Component
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
// import { white } from 'react-native-paper/lib/typescript/styles/colors';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ReactionColorPicker = (initColor) => {
    const [color, setColor] = useState(initColor ? initColor : '#000');

    return (
        <View style={styles.sectionContainer}>
            <ColorPicker
                onColorSelected={color => alert(`Color selected: ${color}`)}
                // color={color}
                // defaultColor={'#000'}
                // onColorChange={setColor}
                style={{ height: 200}}
            />
        </View> 
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        // flex: 1,
        borderColor: '#E9E9E9',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        zIndex: 20,
    },
});