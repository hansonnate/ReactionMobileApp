/**
 * A switch component that enables a label
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { ReactionSwitch } from '../../ReactionSwitch/ReactionSwitch';
import { ReactionTextInput } from '../../TextInput/ReactionTextInput';


export const MultipleChoiceOption = ({question, setQuestion}) => {

    const [includeOther, setIncludeOther] = useState(question.choiceQuestion ? question.choiceQuestion.hasOtherOption : false);
    const [otherLabel, setOtherLabel] = useState(question.choiceQuestion ? question.choiceQuestion.otherOptionLabel : 'Other')
    const [randomizeChoices, setRandomizeChoices] = useState(question.choiceQuestion ? question.choiceQuestion.isRandomized : false);
    const [isMultipleChoice, setIsMultipleChoice] = useState(question.choiceQuestion ? question.choiceQuestion.isMultiSelect : false);

    function handleIsMultiChange(value) {
        let temp = {...question};
        temp.choiceQuestion.isMultiSelect = value;
        setQuestion(temp);
        setIsMultipleChoice(value);
    }
    function handleOtherLabel(value) {
        let temp = {...question};
        temp.choiceQuestion.otherOptionLabel = value;
        setQuestion(temp);
        setOtherLabel(value);
    }
    function handleHasOtherLabel(value) {
        let temp = {...question};
        temp.choiceQuestion.hasOtherOption = value;
        setQuestion(temp);
        setIncludeOther(value);
    }
    function handleRandomize(value) {
        let temp = {...question};
        temp.choiceQuestion.isRandomized = value;
        setQuestion(temp);
        setRandomizeChoices(value);
    }

    return (
        <View style={{ paddingBottom: 10 }}>
            <View style={styles.switchContainer}>
                <ReactionSwitch label={'Multiple Choice Many'} value={isMultipleChoice} onChange={handleIsMultiChange}></ReactionSwitch>
                <ReactionSwitch label={'Enable \"Other\" Option'} value={includeOther} onChange={handleHasOtherLabel}></ReactionSwitch>
                {includeOther && <View style={{width: "100%", paddingBottom: 8}}><ReactionTextInput value={otherLabel} onChange={handleOtherLabel} label='Other Option Label'></ReactionTextInput></View>}
                <ReactionSwitch label={'Randomize Choices'} value={randomizeChoices} onChange={handleRandomize}></ReactionSwitch>
            </View>
            
        </View>
    );

};

const styles = StyleSheet.create({
    switchContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 40,
    },
});