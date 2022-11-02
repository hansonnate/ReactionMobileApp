/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { ReactionTextInput } from '../TextInput/ReactionTextInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { ButtonGeneric } from '../Buttons/ButtonGeneric';
import { ButtonPill } from '../Buttons/ButtonPill';
import { ReactionSelectInput } from '../SelectInput/ReactionSelectInput';
// import MultiSelect from 'react-native-multiple-select';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ProjectSettings = ({ setShowSettings, project }) => {


    const newtags = [
        { id: 0, name: "may-BYU-2022" },
        { id: 1, name: "jun-BYU-2022" },
        { id: 2, name: "aug-BYU-2022" },
        { id: 3, name: "jul-BYU-2022" },
    ]

    const selectedItems = [
        { id: 0, name: "jan-BYU-2022" },
    ]

    

    const [selectedTags, onSelectedItemsChange] = useState(selectedItems);
    const [tags, setTags] = useState(newtags)
    return (
        <View style={styles.sectionContainer}>
            <Pressable onPress={() => setShowSettings(false)} style={styles.closeIcon}><IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
            <ReactionTextInput label={"Survey Name"} placeholder={"Survey Name"} value={project?.name}></ReactionTextInput>
            <ReactionTextInput label={"Description"} placeholder={"Description"} value={project?.description}></ReactionTextInput>
            <ReactionSelectInput chosenList={selectedTags} chooseList={tags} label={"Tags"} placeholder={"No Tags Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
            <ReactionSelectInput chosenList={selectedTags} chooseList={tags} label={"Access Groups"} placeholder={"No Access Groups Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
            <ReactionSelectInput chosenList={selectedTags} chooseList={tags} label={"Audiences"} placeholder={"No Access Groups Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
            <ReactionSelectInput chosenList={selectedTags} chooseList={tags} label={"Default Languages"} placeholder={"No Access Groups Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
            <ReactionSelectInput chosenList={selectedTags} chooseList={tags} label={"Supported Languages"} placeholder={"No Access Groups Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
            <View style={{paddingHorizontal: 60}}><ButtonGeneric onPress={() => { Alert.alert('Changes Saved!'); setShowSettings(false); }} title='Save Changes'></ButtonGeneric></View>
            <View style={styles.bottomButtons}>
                <ButtonPill onPress={() => Alert.prompt('Are you sure you want to delete this survey?\n(Enter \'Delete\' to confirm)')} title='Delete Survey'></ButtonPill>
                <ButtonPill onPress={() => Alert.prompt('Are you sure you want to copy this survey?\n(Enter \'Copy\' to confirm)')} title='Copy Survey'></ButtonPill>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        position: 'absolute',
        top: 30,
        flex: 1,
        width: '95%',
        marginHorizontal: 20,
        backgroundColor: "white",
        padding: 10,
        // marginHorizontal: 20,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#E9E9E9', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 10,
    },
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        paddingTop: 10,
    },
});
