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
import { MultipleChoiceQuestion } from './Types/MutlipleChoiceQuestion';
import { ScaleQuestion } from './Types/ScaleQuestion';
import { TextQuestion } from './Types/TextQuestion';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const Question = ({question, questionIndex, active, setActive, onUpdateQuestion, setShowSettings, showSettings}) => {

    function handleUpdateQuestion(subQuestion) {
        let temp = {...question};
        if(temp.type === "MultipleChoice") {
            temp.choiceQuestion = subQuestion;
        } else if (temp.type === "NumberScale") {
            temp.scaleQuestion = subQuestion;
        } else if (temp.type === "Text") {
            temp.textQuestion = subQuestion;
        }
        onUpdateQuestion(temp, questionIndex);
    }
    function handleSetActive() {
        setActive(question.id);
    }
    function handleUpdateName(value) {
        let temp = {...question};
        temp.name = value;
        onUpdateQuestion(temp, questionIndex);
    }
    function handleUpdateInstructions(value) {
        let temp = {...question};
        temp.description = value;
        onUpdateQuestion(temp, questionIndex);
    }



    return (
        <Pressable onPress={() => handleSetActive()}>
        <View style={active ? styles.sectionContainerActive : styles.sectionContainer}>
            <ReactionActiveTextInput value={question.name} onChange={handleUpdateName} active={active} label={'Question'}>{question.name}</ReactionActiveTextInput>
            <ReactionActiveTextInput italics value={question.description} onChange={handleUpdateInstructions} active={active} label={'Instructions'}>{question.name}</ReactionActiveTextInput>
            {question.type == "Text" && <TextQuestion active={active} textQuestion={question.textQuestion}></TextQuestion>}
            {question.type == "NumberScale" && <ScaleQuestion active={active} scaleQuestion={question.scaleQuestion}></ScaleQuestion>}
            {question.type == "MultipleChoice" && <MultipleChoiceQuestion active={active} updateQuestion={handleUpdateQuestion} choiceQuestion={question.choiceQuestion}></MultipleChoiceQuestion>}
            <Pressable style={styles.settingIcon} onPress={() => {setActive(question.id); setShowSettings(!showSettings);}} title='Create Survey'><IonIcons name='cog' color={'#616565'} size={20}></IonIcons></Pressable>
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
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
        
    },
    sectionContainerActive: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        borderWidth: 3,
        borderColor: '#15BCC7',
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    settingIcon: {
        position: 'absolute',
        top: 2,
        right: 2,
    }
});