/**
 * A switch component that enables a label
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

export const ReactionSwitch = ({ label, onChange, value }) => {


    return (
        <View style={styles.sectionContainer}>
            
            <Switch
                trackColor={{ false: "#767577", true: "#15BCC7" }}
                thumbColor={value ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={value}
            />
            {label && <Text style={styles.label}>{label}</Text>}
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        // width: '100%',
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
    },
});