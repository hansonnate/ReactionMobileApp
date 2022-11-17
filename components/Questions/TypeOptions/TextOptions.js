/**
 * A switch component that enables a label
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { ReactionTextInput } from '../../TextInput/ReactionTextInput';


export const TextOptions = ({question, setQuestion}) => {

    console.log(question);
    const [placeholder, setPlaceholder] = useState(question.textQuestion.placeholder);
    const [maxCharacters, setMaxCharacters] = useState(question.textQuestion.maxLength);

    function handleSetLength(value) {
        let number = Number(value);
        // let temp = {...question};
        if (number) {
            setMaxCharacters(Number(value));
            question.textQuestion.maxLength = Number(value);
        } else {
            setMaxCharacters(0);
            question.scaleQuestion.maxLength = 0;
        }
        setQuestion(question);
        
    }
    function handleSetPlaceholder(value) {
        setPlaceholder(value);
        question.textQuestion.placeholder = value
        setQuestion(question);
    }

    return (
        <View style={{ paddingBottom: 10 }}>
            <View style={styles.switchContainer}>
                <View style={styles.container}><ReactionTextInput label={'Placeholder'} textContentType={'oneTimeCode'} value={placeholder} onChange={handleSetPlaceholder}></ReactionTextInput></View>
                <View style={styles.container}><ReactionTextInput keyboardType={'numeric'} label={'Max Character Length'} textContentType={'oneTimeCode'} value={maxCharacters.toString()} onChange={handleSetLength}></ReactionTextInput></View>
            </View>
            
        </View>
    );

};

const styles = StyleSheet.create({
    switchContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    container: {
        width: "100%",
    },
});