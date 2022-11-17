/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
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

export const ProjectSettings = ({ setShowSettings, project, saveChanges, setDisable }) => {


    const newtags = [
        { id: 0, name: "may-BYU-2022" },
        { id: 1, name: "jun-BYU-2022" },
        { id: 2, name: "aug-BYU-2022" },
        { id: 3, name: "jul-BYU-2022" },
    ]
    const chosenTags = [
        { id: 4, name: "jan-BYU-2022" },
    ]
    const newAccessGroups = [
        { id: 0, name: "No Jeremy" },
        { id: 1, name: "All Employees" },
        { id: 2, name: "Admins Only" },
        { id: 3, name: "Ur Mom" },
    ]
    const chosenAccessGroups = [
        { id: 4, name: "All Staff" },
    ]
    const statuss = [
        { id: 0, name: "Draft" },
        { id: 1, name: "Open" },
        { id: 2, name: "Closed" },
    ]
    const newLanguages = [
        { id: 0, name: "Español" },
        { id: 1, name: "Turkish" },
        { id: 2, name: "German" },
        { id: 3, name: "French" },
    ]
    const chosenLanguages = [
        { id: 4, name: "English" },
    ]

    function handleSaveChanges() {
        project.tags = selectedTags;
        project.acceessgroupIds = selectedAccessGroups;
        project.defaultLocale = selectedDefLang;
        project.supportedLocales = selectedSupLang;
        project.name = name;
        project.description = description;
        project.status = status;
        saveChanges(project);
        handleClose();
    }

    function handleClose() {
        if (setDisable) {
            setDisable(false);
        }
        setShowSettings(false);
    }


    const [selectedTags, onSelectedItemsChange] = useState(chosenTags);
    const [tags, setTags] = useState(newtags);
    const [selectedAccessGroups, onSelectedAGChange] = useState(chosenAccessGroups);
    const [accessGroups, setAccessGroups] = useState(newAccessGroups);
    const [selectedDefLang, onSelectedDefLangChange] = useState(chosenLanguages);
    const [defaultLanguages, setDefaultLanguages] = useState(newLanguages);
    const [selectedSupLang, onSelectedSupLangChange] = useState(chosenLanguages);
    const [supportedLanguages, setSupportedLanguages] = useState(newLanguages);
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState(project.status);
  
    return (
        <View style={styles.sectionContainer}>
            <Pressable onPress={() => handleClose()} style={styles.closeIcon}><IonIcons name='close' size={20} style={{ color: '#A3A4A8' }}></IonIcons></Pressable>
            <ScrollView style={{paddingTop: 5}}>
                <ReactionTextInput label={"Survey Name"} placeholder={"Survey Name"} value={name} onChange={setName}></ReactionTextInput>
                <ReactionTextInput label={"Description"} placeholder={"Description"} value={description} onChange={setDescription}></ReactionTextInput>
                {/* <ReactionSelectInput isMultiple chosenList={selectedTags} chooseList={tags} label={"Tags"} placeholder={"No Tags Chosen"} value={project?.description} setChosen={onSelectedItemsChange} setChooseList={setTags}></ReactionSelectInput>
                <ReactionSelectInput isMultiple chosenList={selectedAccessGroups} chooseList={accessGroups} label={"Access Groups"} placeholder={"No Access Groups Chosen"} value={project?.description} setChosen={onSelectedAGChange} setChooseList={setAccessGroups}></ReactionSelectInput>
                <ReactionSelectInput isMultiple chosenList={selectedDefLang} chooseList={defaultLanguages} label={"Default Languages"} placeholder={"No Default Languages Chosen"} value={project?.description} setChosen={onSelectedDefLangChange} setChooseList={setDefaultLanguages}></ReactionSelectInput>
                <ReactionSelectInput isMultiple chosenList={selectedSupLang} chooseList={supportedLanguages} label={"Supported Languages"} placeholder={"No Supported Languages Chosen"} value={project?.description} setChosen={onSelectedSupLangChange} setChooseList={setSupportedLanguages}></ReactionSelectInput> */}
                <ReactionSelectInput chosenSingle={status} label='Status' setChosenSingle={setStatus} chooseList={statuss}></ReactionSelectInput> 
                <View style={{ paddingHorizontal: 60, paddingTop: 10 }}><ButtonGeneric onPress={() => { handleSaveChanges(); setShowSettings(false); }} title='Save Changes'></ButtonGeneric></View>
                <View style={styles.bottomButtons}>
                    <ButtonPill onPress={() => Alert.prompt('Are you sure you want to delete this survey?\n(Enter \'Delete\' to confirm)')} title='Delete Survey'></ButtonPill>
                    <ButtonPill onPress={() => Alert.prompt('Are you sure you want to copy this survey?\n(Enter \'Copy\' to confirm)')} title='Copy Survey'></ButtonPill>
                </View>
            </ScrollView>
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        zIndex: 1,
        position: 'absolute',
        top: 30,
        width: '100%',
        marginHorizontal: 10,
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
        maxHeight: 600,
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
