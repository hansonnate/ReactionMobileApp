/**
 * A question component to display whatever question you give
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ReactionActiveTextInput } from '../TextInput/ReactionActiveTextInput';
import { ScaleQuestion } from './Types/ScaleQuestion';
import { TextQuestion } from './Types/TextQuestion';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const Question = ({question, active, setActive}) => {


    return (
        <Pressable onPress={() => setActive(question.id)}>
        <View style={active ? styles.sectionContainerActive : styles.sectionContainer}>
            <ReactionActiveTextInput value={question.name} active={active} label={'Question'}>{question.name}</ReactionActiveTextInput>
            <ReactionActiveTextInput italics value={question.description} active={active} label={'Instructions'}>{question.name}</ReactionActiveTextInput>
            {question.type == "Text" && <TextQuestion active={active} textQuestion={question.textQuestion}></TextQuestion>}
            {question.type == "NumberScale" && <ScaleQuestion active={active} scaleQuestion={question.scaleQuestion}></ScaleQuestion>}
        </View>
        </Pressable>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#E9E9E9',
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10
    },
    sectionContainerActive: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#B5E1DF',
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
});