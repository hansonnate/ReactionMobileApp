/**
 * A question component to display whatever question you give
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ReactionActiveTextInput } from '../TextInput/ReactionActiveTextInput';
import { MultipleChoiceQuestion } from './Types/MutlipleChoiceQuestion';
import { ScaleQuestion } from './Types/ScaleQuestion';
import { TextQuestion } from './Types/TextQuestion';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@react-native-community/blur';
import { ButtonGeneric } from '../Buttons/ButtonGeneric';
import { ButtonPill } from '../Buttons/ButtonPill';
import { TextOptions } from './TypeOptions/TextOptions';
import { MultipleChoiceOption } from './TypeOptions/MultipleChoiceOptions';
import { NumberScaleOptions } from './TypeOptions/NumberScaleOptions';
import { ReactionSelectInput } from '../SelectInput/ReactionSelectInput';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const Question = ({ question, questionIndex, active, setActive, onUpdateQuestion, saveQuestion, changeType, deleteQuestion }) => {

    // const [focused, setOnFocus] = useState(false);
    function handleUpdateQuestion(subQuestion) {
        let temp = { ...question };
        if (temp.type === "MultipleChoice") {
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
        let temp = { ...question };
        temp.name = value;
        onUpdateQuestion(temp, questionIndex);
    }
    function handleUpdateInstructions(value) {
        let temp = { ...question };
        temp.description = value;
        onUpdateQuestion(temp, questionIndex);
    }

    const questionTypes = [
        { id: 0, name: "Number Scale" },
        { id: 1, name: "Multiple Choice" },
        { id: 2, name: "Text" },
    ]

    return (
        <>

            {active &&
                <View style={styles.sectionContainerActive}>
                    <Text style={styles.heading}>Edit Question</Text>
                    <ReactionSelectInput chooseList={questionTypes} chosenSingle={question.type === 'MultipleChoice' ? "Multiple Choice" : question.type === 'NumberScale' ? "Number Scale" : question.type === 'Text' ? "Text" : 'No Type'} setChosenSingle={changeType} label='Question Type'></ReactionSelectInput>
                    <ReactionActiveTextInput multiline value={question.name} onChange={handleUpdateName} active={active} label={'Question Name'}>{question.name}</ReactionActiveTextInput>
                    <ReactionActiveTextInput multiline italics value={question.description} onChange={handleUpdateInstructions} active={active} label={'Instructions'}>{question.name}</ReactionActiveTextInput>
                    {question.type == "Text" && <TextQuestion active={active} textQuestion={question.textQuestion}></TextQuestion>}
                    {question.type == "NumberScale" && <ScaleQuestion active={active} scaleQuestion={question.scaleQuestion}></ScaleQuestion>}
                    {question.type == "MultipleChoice" && <MultipleChoiceQuestion active={active} updateQuestion={handleUpdateQuestion} choiceQuestion={question.choiceQuestion}></MultipleChoiceQuestion>}
                    <Pressable style={styles.settingIcon} onPress={() => setActive('')}><IonIcons name='close' color={'#616565'} size={20}></IonIcons></Pressable>

                    {/* <Text style={styles.heading}>Question Options</Text> */}
                    <View style={{height: 10}}></View>
                    {question.type === 'MultipleChoice' && <MultipleChoiceOption question={question} setQuestion={saveQuestion}></MultipleChoiceOption>}
                    {question.type === 'NumberScale' && <NumberScaleOptions question={question} setQuestion={saveQuestion}></NumberScaleOptions>}
                    {question.type === 'Text' && <TextOptions question={question} setQuestion={saveQuestion}></TextOptions>}
                    
                    <View style={{ paddingTop: 10 }}><ButtonGeneric title={'Save Changes'} onPress={() => setActive('')}></ButtonGeneric></View>
                    <View style={styles.bottomButtons}><ButtonPill title={'Copy Question'}></ButtonPill><ButtonPill title={'Delete Question'} onPress={deleteQuestion}></ButtonPill></View>
                </View>
            }
            {!active && <Pressable onPress={() => handleSetActive()} >
                <View style={styles.sectionContainer}>
                    <ReactionActiveTextInput value={question.name} onChange={handleUpdateName} active={active} label={'Question'}>{question.name}</ReactionActiveTextInput>
                    <ReactionActiveTextInput italics value={question.description} onChange={handleUpdateInstructions} active={active} label={'Instructions'}>{question.name}</ReactionActiveTextInput>
                    {question.type == "Text" && <TextQuestion active={active} textQuestion={question.textQuestion}></TextQuestion>}
                    {question.type == "NumberScale" && <ScaleQuestion active={active} scaleQuestion={question.scaleQuestion}></ScaleQuestion>}
                    {question.type == "MultipleChoice" && <MultipleChoiceQuestion active={active} updateQuestion={handleUpdateQuestion} choiceQuestion={question.choiceQuestion}></MultipleChoiceQuestion>}
                    {/* <Pressable style={styles.settingIcon} onPress={() => { setActive(question.id); setShowSettings(!showSettings); }} title='Create Survey'><IonIcons name='cog' color={'#616565'} size={20}></IonIcons></Pressable> */}

                </View>
            </Pressable>}
            {/* {focused && <BlurView
                style={styles.blurViewStyle}
                blurRadius={2}
                blurAmount={1}
            />} */}
        </>
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
        padding: 10,
        borderWidth: 3,
        borderColor: '#15BCC7',
        borderRadius: 5,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    settingIcon: {
        position: 'absolute',
        top: 2,
        right: 2,
    },
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 900,
        width: 500,
        zIndex: 0,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        color: '#616565',
        marginBottom: 10,
    },
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingHorizontal: 10,
    }
});