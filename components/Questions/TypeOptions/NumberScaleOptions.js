/**
 * A switch component that enables a label
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { ReactionTextInput } from '../../TextInput/ReactionTextInput';


export const NumberScaleOptions = ({question, setQuestion}) => {

    console.log(question);
    const [max, setMax] = useState(question.scaleQuestion.max);
    const [min, setMin] = useState(question.scaleQuestion ? question.scaleQuestion.min : 0);
    const [step, setStep] = useState(question.scaleQuestion ? question.scaleQuestion.step : 1);

    function handleSetMin(value) {
        let number = Number(value);
        // let temp = {...question};
        if (number) {
            setMin(Number(value));
            question.scaleQuestion.min = Number(value);
        } else {
            setMin(0);
            question.scaleQuestion.min = 0;
        }
        setQuestion(question);
        
    }
    function handleSetMax(value) {
        let number = Number(value);
        if (number) {
            setMax(Number(value));
            question.scaleQuestion.max = Number(value);
        } else {
            setMax(0);
            question.scaleQuestion.max = 0;
        }
        setQuestion(question);
    }
    function handleSetStep(value) {
        let number = Number(value);
        if (number) {
            setStep(Number(value))
            question.scaleQuestion.step = Number(value);
        } else {
            setStep(0);
            question.scaleQuestion.step = 0;
        }
        setQuestion(question);
    }

    return (
        <View style={{ paddingBottom: 10 }}>
            <View style={styles.switchContainer}>
            <View style={styles.container}><ReactionTextInput label={'Min'} textContentType={'oneTimeCode'} value={min.toString()} onChange={handleSetMin}></ReactionTextInput></View>
                <View style={styles.container}><ReactionTextInput label={'Max'} textContentType={'oneTimeCode'} value={max.toString()} onChange={handleSetMax}></ReactionTextInput></View>
                <View style={styles.container}><ReactionTextInput label={'Step'} textContentType={'oneTimeCode'} value={step.toString()} onChange={handleSetStep}></ReactionTextInput></View>
            </View>
            
        </View>
    );

};

const styles = StyleSheet.create({
    switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    container: {
        width: 90,
    },
});