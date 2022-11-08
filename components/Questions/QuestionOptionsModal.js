/**
 * Modal Popup to create a new question
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonGeneric } from '../Buttons/ButtonGeneric';
import { ReactionSelectInput } from '../SelectInput/ReactionSelectInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { shortId } from '../../HelperFunctions';
import { TextQuestion } from './Types/TextQuestion';
import { ScaleQuestion } from './Types/ScaleQuestion';
import { MultipleChoiceQuestion } from './Types/MutlipleChoiceQuestion';
import { ReactionActiveTextInput } from '../TextInput/ReactionActiveTextInput';

//Internal imports
// import styles from 'Navbar.module.scss'

export const QuestionOptionsModal = ({ show, setShow, currQuestion, saveQuestion }) => {
    const questionTypes = [
        { id: 0, name: "Number Scale" },
        { id: 1, name: "Multiple Choice" },
        { id: 2, name: "Text" },
    ]

    const [chosenType, setChosenType] = useState('Number Scale');
    const [includeOther, setIncludeOther] = useState(false);
    const [question, setQuestion] = useState(currQuestion);

    function handleIncludeOther(value) {
        setIncludeOther(value);
    }

    return (
        <>
            {show && <View style={styles.absoluteContainer}>
                <View style={styles.sectionContainer}>
                    <Pressable onPress={() => setShow(false)} style={styles.closeIcon}><IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
                    <Text style={styles.heading}>Question Options</Text>
                    <View style={{ paddingBottom: 10 }}>
                        <View style={styles.switchContainer}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={includeOther ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={handleIncludeOther}
                                value={includeOther}
                            />
                        </View>
                        <ReactionSelectInput chooseList={questionTypes} chosenSingle={chosenType} setChosenSingle={setChosenType} label='Change Question Type'></ReactionSelectInput>
                    </View>
                    <ButtonGeneric title={'Save Changes'} onPress={() => handleCreateQuestion()}></ButtonGeneric>
                </View>
            </View>}
        </>
    );

};

const styles = StyleSheet.create({
    absoluteContainer: {
        position: 'absolute',
        bottom: 50,
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
        alignItems: 'center',
        witdth: '100%',
    },
});