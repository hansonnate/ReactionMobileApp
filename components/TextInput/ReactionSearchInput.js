/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ReactionSearchInput = ({ placeholder, label, value, onChange, index, textContentType, error, errorMessage }) => {
    // const [text, onChangeText] = useState(value);


    function handleChange(newvalue) {
        onChange(newvalue, index);
    }


    return (
        <View style={styles.container}>
            {label && <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Text style={styles.label}>{label.toUpperCase()}</Text>
                {error && <Text style={styles.errorMessage}>{errorMessage ? errorMessage : "Error..."}</Text>}
            </View>}
            <IonIcons name={'search'} size={20} style={{ color: "#A3A4A8", paddingRight: 5}} />
            <TextInput
                style={styles.input}
                onChangeText={handleChange}
                value={value}
                placeholder={placeholder ? placeholder : "Enter..."}
                textContentType={textContentType ? textContentType : 'none'}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 2.5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        paddingHorizontal: 5,
        paddingVertical: 7, 
    },
    input: {
        // height: 45,

        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    inputChanged: {
        // height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#F4E3C2",
        paddingHorizontal: 5,
        paddingVertical: 7,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 18,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        fontSize: 10,
        color: '#738C91',
    },
    changedAlert: {
        color: '#F4E3C2',
    },
    errorMessage: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontSize: 10,
        color: 'red',
        fontFamily: 'Gill Sans',
    },
});
