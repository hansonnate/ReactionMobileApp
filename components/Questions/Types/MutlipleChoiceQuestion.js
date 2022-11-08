/**
 * Settings Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ButtonAddMinus } from '../../Buttons/ButtonAddMinus';
import { ReactionTextInput } from '../../TextInput/ReactionTextInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

//Internal imports
// import styles from 'Navbar.module.scss'

export const MultipleChoiceQuestion = ({ active, choiceQuestion, updateQuestion }) => {

    const [choice, setChoice] = useState(choiceQuestion);

    function addChoice() {
        let temp = choiceQuestion;
        temp.choices.push("");
        updateQuestion(temp);
    }

    function deleteChoice(index) {
        let temp = {...choice};
        temp.choices.splice(index, 1);
        setChoice(temp);
        updateQuestion(temp);
    }

    function changeChoice(newvalue, index) {
        let temp = {...choice};
        temp.choices[index] = newvalue;
        setChoice(temp);
        updateQuestion(temp);
    }

    return (
        <View style={{ paddingTop: 5 }}>
            {active && <Text style={styles.label}>CHOICES</Text>}
            {active && choice.choices.map((value, index) => <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{width: '94%'}}><ReactionTextInput key={index} value={value} onChange={changeChoice} index={index}></ReactionTextInput></View>
                <Pressable onPress={() => deleteChoice(index, value)} style={styles.closeIcon}>
                    <IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons>
                </Pressable>
            </View>)}
            {!active && choice.choices.map((value, index) => <Text key={index} style={styles.textNotActive}>{value}</Text>)}
            {active && <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 5 }}><ButtonAddMinus title={'add choice'} plus onPress={() => addChoice()}></ButtonAddMinus></View>}
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        // fontSize: 26,
        // fontWeight: 'bold'
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
    textStaticStyle: {
        // fontSize: 26,
        // fontWeight: 'bold'
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        height: 90,
        padding: 10,
        fontFamily: 'Gill Sans',
        color: '#E3E3E3',
        fontSize: 17,
    },
    label: {
        paddingLeft: 10,
        paddingBottom: 4,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        fontSize: 10,
        color: '#738C91',
    },
    textNotActive: {
        marginLeft: 30,
        paddingVertical: 4,
        // fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        color: '#616565',
        fontSize: 17,
    },
    closeIcon: {
        padding: 5
    }
});