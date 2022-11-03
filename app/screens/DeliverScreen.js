/**
 * Deliver Surveys Screen with current surveys
 *
 * @author Nate Hanson
 */

//External imports
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { Text } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Internal imports
import { ButtonGeneric } from '../../components/Buttons/ButtonGeneric';
import { ReactionTable } from '../../components/Table/ReactionTable';
import { ProjectSettings } from '../../components/ProjectSettings/ProjectSettings';

export const DeliverScreen = ({navigation}) => {
    //onPress={() => navigation.navigate('Details')}


    const projects = [
        {
            id: 0,
            subject: "Opinion",
            audience: "Doctors",
            from: "jbikman@reaction.com",
            status: "Delivered",
            date: 1653340059929,
            strength: "Bad",
            type: "Email",
            survey: "Project 1"
          },
          {
            id: 1,
            subject: "Opinion",
            audience: "Doctors",
            from: "jbikman@reaction.com",
            status: "Delivered",
            date: 1653340059929,
            strength: "Bad",
            type: "Email",
            survey: "NPS survey"
          },
          {
            id: 2,
            subject: "Opinion",
            audience: "Doctors",
            from: "jbikman@reaction.com",
            status: "Delivered",
            date: 1653340059929,
            strength: "Bad",
            type: "Link",
            survey: "Who are Doctors?"
          },
      ]
      
      const headers = [
        {
          id: 0,
          index: 0,
          name: "Survey",
          accessor: "survey",
          enabled: true,
          cell_style: null,
        },
        {
          id: 1,
          index: 1,
          name: "Type",
          accessor: "type",
          enabled: true,
          cell_style: (value) => (
            <span
              className={`${styles.status} ${isOpen(value) ? `${styles.isopen}` : `${styles.isclosed}`
                }`}
            >
              {/* {console.log(e)} */}
              {value}{" "}
            </span>
          ),
        },
      ];
      const [showSettings, setShowSettings] = useState(false);
      const [activeProject, setActiveProject] = useState();
    
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.buttonsContainer}>
                <Text style={{fontSize: 30, color: '#616565'}}>Distributions</Text>
                <ButtonGeneric onPress={() => alert('This is the Create Survey Screen.')} title='Create Distribution'></ButtonGeneric>
            </View>
            <ReactionTable noSettings headers={headers} items={projects} showSettings={showSettings} setShowSettings={setShowSettings} setActive={setActiveProject} activeItem={activeProject}></ReactionTable>
            {showSettings && <ProjectSettings setShowSettings={setShowSettings} project={activeProject}></ProjectSettings>}
        </View>
    );

};



const styles = StyleSheet.create({
    sectionContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white'
    },
    surveysContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#E9E9E9",
        borderRadius: 5,
        backgroundColor: 'white',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,

    },
    scrollViewContainer: {
        height: 80,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    actionButton: {
        flex: .8,
        borderColor: "#E9E9E9",
        backgroundColor: "white",
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 3,
    },
    actionButtonPressed: {
      flex: .8,
        borderColor: "#E9E9E9",
        borderRadius: 5,
        backgroundColor: '#E9E9E9',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 3,
    },
    actionText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        // letterSpacing: 0.25,
        color: "#A3A4A8",
    },
    actionTextPressed: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        // letterSpacing: 0.25,
        color: "white",
    },
    actionTextContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
        // borderColor: 'blue',
    },
});