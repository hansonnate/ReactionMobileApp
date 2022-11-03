/**
 * Question Editor with current project questions
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// import { ButtonPill } from '../../components/Buttons/ButtonPill';
import { ButtonPillBack } from '../../components/Buttons/ButtonPillBack';
import { Question } from '../../components/Questions/Question';
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
            <View></View>
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
});