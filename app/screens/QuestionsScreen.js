/**
 * Question Editor with current project questions
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonAddMinus } from '../../components/Buttons/ButtonAddMinus';
// import { ButtonPill } from '../../components/Buttons/ButtonPill';
import { ButtonPillBack } from '../../components/Buttons/ButtonPillBack';
import { Question } from '../../components/Questions/Question';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { AddQuestionModal } from '../../components/Questions/AddQuestionModal';
import { QuestionOptionsModal } from '../../components/Questions/QuestionOptionsModal';
import { ProjectSettings } from '../../components/ProjectSettings/ProjectSettings';
import { DesignSettings } from '../../components/DesignSettings/DesignSettings';
import { BlurView } from '@react-native-community/blur';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const QuestionsScreen = ({ initQuestions, setPage, project, saveProjectSettings }) => {


    const [activeQuestionId, setActiveQuestionId] = useState();
    const [questions, setQuestions] = useState(initQuestions);
    const [showNewQuestion, setShowNewQuestion] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showProjectSettings, setShowProjectSettings] = useState(false);
    const [showDesignSettings, setShowDesignSettings] = useState(false);
    const [disableButtons, setDisableButtons] = useState(false);
    const [focusedQuestion, setFocusedQuestion] = useState(false);

    function handleNewQuestion(question) {
        let array = [...questions];
        array.push(question);
        setQuestions(array);
    }

    function handleUpdateQuestion(question, index) {
        let array = [...questions];
        array[index] = question;
        setQuestions(array);
    }

    function activeQuestion() {
        return questions.find((q) => q.id === activeQuestionId);
    }

    function handleSaveQuestion(updatedQuestion) {
        console.log(updatedQuestion);
        let array = [...questions];
        let index = questions.findIndex((q) => q.id === activeQuestionId);
        array[index] = updatedQuestion;
        setQuestions(array);
    }

    function handleChangeType(type) {
        let array = [...questions];
        let index = questions.findIndex(q => q.id === activeQuestionId);
        if (type === "Number Scale") {
            array[index].type = "NumberScale";
            array[index].choiceQuestion = null;
            array[index].textQuestion = null;
            array[index].scaleQuestion = {
                min: 0,
                minDescription: "",
                max: 5,
                maxDescription: "",
                step: 1,
            };
            setQuestions(array);
        } else if (type === "Multiple Choice") {
            array[index].type = "MultipleChoice";
            array[index].choiceQuestion = {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: [""],
            };
            array[index].textQuestion = null;
            array[index].scaleQuestion = null;
            setQuestions(array);
        } else if (type === "Text") {
            array[index].type = "Text";
            array[index].choiceQuestion = null;
            array[index].textQuestion = {
                placeholder: "Answer this...",
                maxLength: 500,
            };
            array[index].scaleQuestion = null
            setQuestions(array);
        }
    }

    function displayActiveQuestion() {
        let index = questions.findIndex((q) => q.id === activeQuestionId);
        let question = questions[index];

        return (
            <Question onUpdateQuestion={handleUpdateQuestion} question={question} questionIndex={index} active={question.id === activeQuestionId} setActive={setActiveQuestionId}></Question>
        );
    }

    function handleDeleteQuestion() {
        setShowOptions(false);
        console.log('Yup');
        let array = [...questions];
        let index = questions.findIndex((q) => q.id === activeQuestionId);
        array.splice(index, 1);
        setQuestions(array);
    }

    function deleteQuestionAlert() {
        Alert.alert(
            "Delete Chosen Question?",
            "(non-recoverable)",
            [
                {
                    text: "Cancel",
                    // onPress: () => ,
                    style: "cancel"
                },
                { text: "Yes", onPress: () => handleDeleteQuestion() }
            ]
        );
    }

    return (
        <View style={styles.sectionContainer}>
            {/* <View style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingTop : 5}}><Text style={styles.heading}>{projectName}</Text></View> */}
            <View style={styles.topButtons}>
                <ButtonPillBack title={'Surveys'} left onPress={() => setPage('Surveys')}></ButtonPillBack>
                <Pressable style={styles.actionButton} onPress={() => { setShowProjectSettings(!showProjectSettings); setDisableButtons(true) }}><View style={styles.bottomButtons}><Text style={styles.text}>survey settings</Text><IonIcons name='chevron-down' size={20} style={{ color: '#15BCC7', }}></IonIcons></View></Pressable>
            </View>

            {!showOptions && <ScrollView style={focusedQuestion ? styles.questionContainerFocus : styles.questionContainer}>
                {questions.map((question, index) => <Question key={index} setOnFocus={setFocusedQuestion} focused={focusedQuestion} onUpdateQuestion={handleUpdateQuestion} question={question} questionIndex={index} active={question.id === activeQuestionId} setActive={setActiveQuestionId} setShowSettings={setShowOptions} showSettings={showOptions}></Question>)}
            </ScrollView>}
            {showOptions && <View style={styles.optionsActive}><ScrollView >{displayActiveQuestion()}</ScrollView></View>}
            {!showOptions && <><View style={styles.bottomButtons}>
                <ButtonAddMinus disable={disableButtons} title={'question'} plus onPress={() => setShowNewQuestion(true)} shadow></ButtonAddMinus>
                <Pressable disabled={disableButtons} style={styles.actionButton} onPress={() => setShowDesignSettings(!showDesignSettings)}><View style={styles.bottomButtons}><Text style={styles.text}>design settings</Text><IonIcons name='chevron-down' size={20} style={{ color: '#15BCC7', }}></IonIcons></View></Pressable>
            </View>
                {/* <View style={styles.bottomButtons}>
                    <ButtonAddMinus disable={disableButtons} title={'page'} minus onPress={() => alert('Removed Page')} shadow></ButtonAddMinus>
                    <ButtonAddMinus disable={disableButtons} title={'page'} plus onPress={() => alert('Added page')} shadow></ButtonAddMinus>
                    <Pressable style={styles.buttonStyle} disabled={disableButtons}><IonIcons name='chevron-back' size={20} style={{ color: '#15BCC7', }}></IonIcons></Pressable>
                    <Pressable style={styles.buttonStyle} disabled={disableButtons}><Text style={{ color: '#15BCC7', fontWeight: 'bold' }}>1</Text></Pressable>
                    <Pressable style={styles.buttonStyle} disabled={disableButtons}><IonIcons name='chevron-forward' size={20} style={{ color: '#15BCC7', }}></IonIcons></Pressable>
                </View> */}
            </>}
            <AddQuestionModal show={showNewQuestion} setShow={setShowNewQuestion} createQuestion={handleNewQuestion}></AddQuestionModal>
            {activeQuestionId && <QuestionOptionsModal show={showOptions} setShow={setShowOptions} currQuestion={activeQuestion()} saveQuestion={handleSaveQuestion} changeType={handleChangeType} deleteQuestion={deleteQuestionAlert}></QuestionOptionsModal>}
            {showProjectSettings && <View style={styles.settingsContainer}><ProjectSettings setShowSettings={setShowProjectSettings} project={project} saveChanges={saveProjectSettings} setDisable={setDisableButtons}></ProjectSettings></View>}
            {showDesignSettings && <View style={styles.settingsContainer}><DesignSettings setShowSettings={setShowDesignSettings} project={project} saveChanges={saveProjectSettings} setDisable={setDisableButtons}></DesignSettings></View>}
            {(showProjectSettings || showDesignSettings || showNewQuestion || focusedQuestion) && <BlurView
                // viewRef={viewRef}
                style={styles.blurViewStyle}
                blurRadius={2}
                blurAmount={1}
                onTouchEnd={(() => setFocusedQuestion(false))}
                // onTouchEndCapture={(() => setFocusedQuestion(false))}
            // blurType={blurType}
            // Additional available on Android
            // blurRadius={20}
            // downsampleFactor={10}
            // overlayColor={'rgba(0, 0, 255, .6)'}
            />}
        </View>
    );

};

const styles = StyleSheet.create({
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 900,
        width: 500,
        zIndex: 0,
    },
    sectionContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // backgroundColor: '#EFEFEF',
        backgroundColor: '#B5E1DF',
        paddingBottom: 5
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
        paddingTop: 10,
        paddingBottom: 5,
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
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
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
        width: 170,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        maxHeight: 600,
        elevation: 9,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#15BCC7',
        marginRight: 5,
    },
    optionsActive: {
        // borderWidth: 2,
        height: 300,
    },
    heading: {
        fontSize: 20,
        // fontWeight: 'bold',
        fontFamily: 'Gill Sans',
        color: '#616565',
    },
    settingsContainer: {
        position: 'absolute',
        backgroundColor: '#EFEFEF',
        width: 370,
        zIndex: 1
    },
    questionContainerFocus: {
        maxHeight: 390,
        // minHeight: 200,
        zIndex: 1,
        // borderWidth: 3,
    },
    questionContainer: {
        zIndex: 1,
    }
});