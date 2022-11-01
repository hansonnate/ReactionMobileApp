/**
 *  Project settings view 
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { ReactionTextInput } from '../TextInput/ReactionTextInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { Text } from 'react-native';

//Internal imports
// import styles from 'Navbar.module.scss'

export const ProjectSettings = ({setShowSettings}) => {


    return (
        <View style={styles.sectionContainer}>
            <Pressable onPress={() => setShowSettings(false)} style={styles.closeIcon}><IonIcons name='close' size={20} style={{color: '#A3A4A8'}}></IonIcons></Pressable>
            {/* <Text>Hello Cruel World</Text> */}
            <ReactionTextInput label={"Survey Name"}></ReactionTextInput>
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        position: 'absolute',
        top: 30,
        // zIndex: 10,
        flex: 1,
        width: '103%',
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 10,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#E9E9E9'
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        top: 5,
        zIndex: 10,
    }
  });
