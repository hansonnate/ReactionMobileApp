/**
 * Modal Popup to create a new question
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonGeneric } from '../Buttons/ButtonGeneric';
import { ReactionSelectInput } from '../SelectInput/ReactionSelectInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { shortId } from '../../HelperFunctions';
// import { TextQuestion } from './Types/TextQuestion';
// import { ScaleQuestion } from './Types/ScaleQuestion';
import { MultipleChoiceQuestion } from './Types/MutlipleChoiceQuestion';
import { ReactionActiveTextInput } from '../TextInput/ReactionActiveTextInput';
import { NumberScaleOptions } from './TypeOptions/NumberScaleOptions';
import { MultipleChoiceOption } from './TypeOptions/MultipleChoiceOptions';
import { TextOptions } from './TypeOptions/TextOptions';
import { ScaleQuestion } from './Types/ScaleQuestion';
import { TextQuestion } from './Types/TextQuestion';

//Internal imports
// import styles from 'Navbar.module.scss'

export const AddQuestionModal = ({ show, setShow, createQuestion, keyboardOpen }) => {
    const questionTypes = [
        { id: 0, name: "Number Scale" },
        { id: 1, name: "Multiple Choice" },
        { id: 2, name: "Text" },
    ]

    const [chosenType, setChosenType] = useState('Number Scale');
    const [noName, setNoName] = useState(false);
    const [question, setQuestion] = useState({
        id: shortId(),
        projectId: 0,
        name: "",
        description: '',
        type: "NumberScale",
        choiceQuestion: {
            isMultiSelect: false,
            isRandomized: false,
            hasOtherOption: false,
            otherOptionLabel: "Other",
            choices: [""],
        },
        textQuestion: {
            placeholder: "",
            maxLength: 500,
        },
        scaleQuestion: {
            min: 0,
            minDescription: "",
            max: 5,
            maxDescription: "",
            step: 1,
        },
    });

    function handleCreateQuestion() {

        if (question.name === '') {
            setNoName(true);
            return;
        }
        setShow(false);
        let newQuestion = { ...question }
        if (chosenType === "Number Scale") {
            newQuestion.choiceQuestion = null;
            newQuestion.textQuestion = null;
            newQuestion.type = "NumberScale";
            createQuestion(newQuestion);
        } else if (chosenType === "Multiple Choice") {
            newQuestion.scaleQuestion = null;
            newQuestion.textQuestion = null;
            newQuestion.type = "MultipleChoice";
            createQuestion(newQuestion);
        } else if (chosenType === "Text") {
            newQuestion.choiceQuestion = null;
            newQuestion.scaleQuestion = null;
            newQuestion.type = "Text";
            createQuestion(newQuestion);
        }
        //reset question
        setQuestion({
            id: shortId(),
            projectId: 0,
            name: "",
            description: '',
            type: "NumberScale",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: [""],
            },
            textQuestion: {
                placeholder: "",
                maxLength: 500,
            },
            scaleQuestion: {
                min: 0,
                minDescription: "",
                max: 5,
                maxDescription: "",
                step: 1,
            },
        });
    };

    function handleUpdateName(name) {
        let temp = { ...question };
        temp.name = name;
        setQuestion(temp);
    };
    function handleUpdateInstructions(instructions) {
        let temp = { ...question };
        temp.description = instructions;
        setQuestion(temp);
    };
    function handleUpdateChoices(subQuestion) {
        let temp = { ...question };
        if (temp.type === "MultipleChoice") {
            temp.choiceQuestion = subQuestion;
        } else if (temp.type === "NumberScale") {
            temp.scaleQuestion = subQuestion;
        } else if (temp.type === "Text") {
            temp.textQuestion = subQuestion;
        }
        setQuestion(temp);
    };

    function handleUpdateOptions(options) {
        console.log(options);
    }

    function handleChangeType(type) {
        console.log(type);
        setChosenType(type);
        let temp = { ...question };
        if (type === "Multiple Choice") {
            temp.type = "MultipleChoice";
            temp.choiceQuestion = {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: [""],
            };
        } else if (type === "Number Scale") {
            temp.type = "NumberScale";
            temp.scaleQuestion = {
                min: 0,
                minDescription: "",
                max: 5,
                maxDescription: "",
                step: 1,
            };
        } else if (type === "Text") {
            temp.type = "Text";
            temp.textQuestion = {
                placeholder: "",
                maxLength: 500,
            };
        }
        setQuestion(temp);
    }

    return (
        <>
            {show && <ScrollView style={keyboardOpen ? styles.keyboardContainer : styles.absoluteContainer}>
                <View style={styles.sectionContainer}>
                    <Pressable onPress={() => setShow(false)} style={styles.closeIcon}><IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
                    <Text style={styles.heading}>Create New Question</Text>
                    <View style={{ paddingBottom: 10 }}>
                        <ReactionSelectInput chooseList={questionTypes} chosenSingle={chosenType} setChosenSingle={handleChangeType} label='Choose Question Type'></ReactionSelectInput>
                        <ReactionActiveTextInput value={question.name} active={true} label={'Question Name'} error={noName} errorMessage='Type Question Name' onChange={handleUpdateName}>{question.name}</ReactionActiveTextInput>
                        <ReactionActiveTextInput italics value={question.description} active={true} label={'Instructions'} onChange={handleUpdateInstructions}>{question.name}</ReactionActiveTextInput>
                        {chosenType == "Text" && <TextQuestion new active={true} textQuestion={question.textQuestion}></TextQuestion>}
                        {chosenType == "Number Scale" && <ScaleQuestion active={true} scaleQuestion={question.scaleQuestion}></ScaleQuestion>}
                        {chosenType == "Multiple Choice" && <MultipleChoiceQuestion active={true} choiceQuestion={question.choiceQuestion} updateQuestion={handleUpdateChoices}></MultipleChoiceQuestion>}

                        <View style={{ height: 10 }}></View>
                        {question.type === 'MultipleChoice' && <MultipleChoiceOption question={question} setQuestion={handleUpdateOptions}></MultipleChoiceOption>}
                        {question.type === 'NumberScale' && <NumberScaleOptions question={question} setQuestion={handleUpdateOptions}></NumberScaleOptions>}
                        {question.type === 'Text' && <TextOptions question={question} setQuestion={handleUpdateOptions}></TextOptions>}

                        {/* <View style={{ paddingTop: 10 }}><ButtonGeneric title={'Save Changes'} onPress={() => setActive('')}></ButtonGeneric></View> */}
                        {/* <View style={styles.bottomButtons}><ButtonPil title={'Copy Question'}></ButtonPill><ButtonPill title={'Delete Question'} onPress={deleteQuestion}></ButtonPill></View> */}
                    </View>
                    <ButtonGeneric title={'Create Question'} onPress={() => handleCreateQuestion()}></ButtonGeneric>
                </View>
            </ScrollView>}
        </>
    );

};

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        height: 715,
        // borderWidth: 3,

        // backgroundColor: 'black',
    },
    keyboardContainer: {
        position: 'absolute',
        top: 10,
        width: '100%',
        zIndex: 1,
        height: 440,
        // borderWidth: 3,
        // backgroundColor: 'black',
    },
    sectionContainer: {
        margin: 10,
        // height: 100,
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#E9E9E9",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        color: '#616565',
        marginBottom: 10,
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 10,
    },
});