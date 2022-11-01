/**
 * Basic Nav Bar for bottom of page
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const Navbar = () => {


    return (
        <View style={styles.sectionContainer}><Text>Hey</Text></View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
    //   marginTop: 32,
    //   paddingHorizontal: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 100,
        backgroundColor: "blue",
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
