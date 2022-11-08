/**
 * Modal Popup to create a new question
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonGeneric } from '../Buttons/ButtonGeneric';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { ButtonPill } from '../Buttons/ButtonPill';
import { MultipleChoiceOption } from './TypeOptions/MultipleChoiceOptions';
import { ReactionSelectInput } from '../SelectInput/ReactionSelectInput';
import { NumberScaleOptions } from './TypeOptions/NumberScaleOptions';
import { TextOptions } from './TypeOptions/TextOptions';

//Internal imports
// import styles from 'Navbar.module.scss'

export const QuestionOptionsModal = ({ show, setShow, currQuestion, saveQuestion, changeType, deleteQuestion }) => {

    // const [question, setQuestion] = useState(currQuestion);
    const questionTypes = [
        { id: 0, name: "Number Scale" },
        { id: 1, name: "Multiple Choice" },
        { id: 2, name: "Text" },
    ]

    // const [chosenType, setChosenType] = useState(currQuestion.type === 'MultipleChoice' ? "Multiple Choice" : currQuestion.type === 'NumberScale' ? "Number Scale" : currQuestion.type === 'Text' ? "Text" : 'No Type');



    return (
        <>
            {show && <View style={styles.absoluteContainer}>
                <View style={styles.sectionContainer}>
                    <Pressable onPress={() => setShow(false)} style={styles.closeIcon}><IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
                    <Text style={styles.heading}>Question Options</Text>
                    {currQuestion.type === 'MultipleChoice' && <MultipleChoiceOption question={currQuestion} setQuestion={saveQuestion}></MultipleChoiceOption>}
                    {currQuestion.type === 'NumberScale' && <NumberScaleOptions question={currQuestion} setQuestion={saveQuestion}></NumberScaleOptions>}
                    {currQuestion.type === 'Text' && <TextOptions question={currQuestion} setQuestion={saveQuestion}></TextOptions>}
                    <ReactionSelectInput chooseList={questionTypes} chosenSingle={currQuestion.type === 'MultipleChoice' ? "Multiple Choice" : currQuestion.type === 'NumberScale' ? "Number Scale" : currQuestion.type === 'Text' ? "Text" : 'No Type'} setChosenSingle={changeType} label='Change Question Type'></ReactionSelectInput>
                    <View style={{paddingTop: 10}}><ButtonGeneric title={'Save Changes'} onPress={() => handleCreateQuestion()}></ButtonGeneric></View>
                    <View style={styles.bottomButtons}><ButtonPill title={'Copy Question'}></ButtonPill><ButtonPill title={'Delete Question'} onPress={deleteQuestion}></ButtonPill></View>
                </View>
            </View>}
        </>
    );

};

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        // backgroundColor: 'black',
    },
    sectionContainer: {
        marginHorizontal: 10,
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
    switchContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 40
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