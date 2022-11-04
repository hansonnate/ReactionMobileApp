/**
 * Question Editor with current project questions
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonAddMinus } from '../../components/Buttons/ButtonAddMinus';
// import { ButtonPill } from '../../components/Buttons/ButtonPill';
import { ButtonPillBack } from '../../components/Buttons/ButtonPillBack';
import { Question } from '../../components/Questions/Question';
import IonIcons from 'react-native-vector-icons/Ionicons';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const QuestionsScreen = ({survey, setPage}) => {
    const questions = [
        {
            id: 0,
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: 1,
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: 2,
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
    ]

    const [activeQuestionId, setActiveQuestionId] = useState();

    return (
        <View style={styles.sectionContainer}>
            <View style={styles.topButtons}>
                <ButtonPillBack title={'Surveys'} left onPress={() => setPage('Surveys')}></ButtonPillBack>
                <ButtonPillBack title={'Design'} right onPress={() => setPage('Design')}></ButtonPillBack>
            </View>
            <ScrollView>
                {questions.map((question) => <Question question={question} active={question.id === activeQuestionId} setActive={setActiveQuestionId}></Question>)}    
            </ScrollView> 
            <View style={styles.bottomButtons}>
                <ButtonAddMinus title={'question'} plus onPress={() => alert('Added Question')}></ButtonAddMinus>
                <Pressable style={styles.actionButton}><View style={styles.bottomButtons}><Text style={styles.text}>actions</Text><IonIcons name='chevron-down' size={20} style={{ color: '#A3A4A8' }}></IonIcons></View></Pressable>
            </View>
            <View style={styles.bottomButtons}>
                {/* <ButtonAddMinus title={'question'} plus onPress={() => alert('Added Question')}></ButtonAddMinus> */}
                <ButtonAddMinus title={'page'} minus onPress={() => alert('Added Question')}></ButtonAddMinus>
                <ButtonAddMinus title={'page'} plus onPress={() => alert('Added Question')}></ButtonAddMinus>
                <Pressable style={styles.buttonStyle}><IonIcons name='chevron-back' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
                <Pressable style={styles.buttonStyle}><Text style={{color: '#A3A4A8', fontWeight: 'bold'}}>1</Text></Pressable>
                <Pressable style={styles.buttonStyle}><IonIcons name='chevron-forward' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#EFEFEF'
    },
    topButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#E9E9E9',
        backgroundColor: 'white',
        width: 35,
    },
    actionButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#E9E9E9',
        backgroundColor: 'white',
        width: 110,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A3A4A8',
        marginRight: 5,
    },
});