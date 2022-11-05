/**
 * Create Survey Screen with current surveys
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
import { QuestionsScreen } from './QuestionsScreen';

export const CreateScreen = ({ navigation }) => {
  //onPress={() => navigation.navigate('Details')}
  const initQuestions = [
    {
        id: 0,
        projectId: 0,
        name: "How would you rate our service?",
        description: '1 out of 5',
        type: "NumberScale", 
        choiceQuestion: null,
          textQuestion: null,
          scaleQuestion: {
            min: 0,
            minDescription: "Icky",
            max: 5,
            maxDescription: "Great",
            step: 1,
          },
    },
    {
        id: 1,
        projectId: 0,
        name: "Why did you rate us that way?",
        description: 'Be descriptive',
        type: "Text",
        choiceQuestion: null,
          textQuestion: {
            placeholder: "Answer this...",
            maxLength: 500,
          },
          scaleQuestion: null
    },
    {
        id: 2,
        projectId: 0,
        name: "Which most accurately describes your emotion?",
        description: 'Choose one',
        type: "MultipleChoice",
        choiceQuestion: {
            isMultiSelect: false,
            isRandomized: false,
            hasOtherOption: false,
            otherOptionLabel: "Other",
            choices: ["Angry", "Happy", "Furious", "Excited"],
          },
          textQuestion: null,
          scaleQuestion: null
    },
]


  const projects = [
    {
      id: "0",
      organizationId: "0684348415",
      name: "Project 1",
      description: "This is project 1",
      type: "Survey",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      scheduledToStartAt: "2020-01-01",
      scheduledToCloseAt: "2020-01-01",
      startedAt: "2020-01-01",
      closedAt: "2020-01-01",
      isDeleted: false,
      status: "Open",
      responseCount: 3,
      owner: "Mark Wagner",
      defaultLocale: "en",
      supportedLocales: ["en", "sp"],
      acceessgroupIds: ["552224"],
      numPages: 2,
      Question: [
        {
            id: '0',
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: '1',
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: '2',
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
      ],
    },
    {
      id: "1",
      organizationId: "0684348415",
      name: "BYU independant research",
      description: "This is project 2",
      type: "Survey",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      scheduledToStartAt: "2020-01-01",
      scheduledToCloseAt: "2020-01-01",
      startedAt: "2020-01-01",
      closedAt: "2020-01-01",
      isDeleted: false,
      status: "Open",
      responseCount: 200,
      owner: "Mark Wagner",
      defaultLocale: "en",
      supportedLocales: ["en", "sp"],
      acceessgroupIds: ["552224"],
      numPages: 1,
      Question: [
        {
            id: '0',
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: '1',
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: '2',
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
      ],
    },
    {
      id: "2",
      organizationId: "0684348415",
      name: "NPS survey",
      description: "This is project 3",
      type: "Survey",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      isDeleted: false,
      scheduledToStartAt: "2020-01-01",
      scheduledToCloseAt: "2020-01-01",
      startedAt: "2020-01-01",
      closedAt: "2020-01-01",
      status: "Closed",
      responseCount: 200,
      owner: "Mark Wagner",
      defaultLocale: "en",
      supportedLocales: ["en", "sp"],
      acceessgroupIds: ["552224"],
      numPages: 1,
      Question: [
        {
            id: '0',
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: '1',
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: '2',
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
      ],
    },
    {
      id: "3",
      organizationId: "0684348415",
      name: "Who are Doctors?",
      description: "This is project 4",
      type: "Survey",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      isDeleted: false,
      scheduledToStartAt: "2020-01-01",
      scheduledToCloseAt: "2020-01-01",
      startedAt: "2020-01-01",
      closedAt: "2020-01-01",
      status: "Open",
      responseCount: 200,
      owner: "Mark Wagner",
      defaultLocale: "en",
      supportedLocales: ["en", "sp"],
      acceessgroupIds: ["552224"],
      numPages: 1,
      Question: [
        {
            id: '0',
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: '1',
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: '2',
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
      ],
    },
    {
      id: "4",
      organizationId: "0684348415",
      name: "Take on me",
      description: "This is project 5",
      type: "Survey",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      scheduledToStartAt: "2020-01-01",
      scheduledToCloseAt: "2020-01-01",
      startedAt: "2020-01-01",
      closedAt: "2020-01-01",
      isDeleted: false,
      status: "Draft",
      responseCount: 100,
      owner: "Mark Wagner",
      defaultLocale: "en",
      supportedLocales: ["en", "sp"],
      acceessgroupIds: ["552224"],
      numPages: 1,
      Question: [
        {
            id: '0',
            projectId: 0,
            name: "How would you rate our service?",
            description: '1 out of 5',
            type: "NumberScale", 
            choiceQuestion: null,
              textQuestion: null,
              scaleQuestion: {
                min: 0,
                minDescription: "Icky",
                max: 5,
                maxDescription: "Great",
                step: 1,
              },
        },
        {
            id: '1',
            projectId: 0,
            name: "Why did you rate us that way?",
            description: 'Be descriptive',
            type: "Text",
            choiceQuestion: null,
              textQuestion: {
                placeholder: "Answer this...",
                maxLength: 500,
              },
              scaleQuestion: null
        },
        {
            id: '2',
            projectId: 0,
            name: "Which most accurately describes your emotion?",
            description: 'Choose one',
            type: "MultipleChoice",
            choiceQuestion: {
                isMultiSelect: false,
                isRandomized: false,
                hasOtherOption: false,
                otherOptionLabel: "Other",
                choices: ["Angry", "Happy", "Furious", "Excited"],
              },
              textQuestion: null,
              scaleQuestion: null
        },
      ],
    },
  ]

  const headers = [
    {
      id: 0,
      index: 0,
      name: "Survey",
      accessor: "name",
      enabled: true,
      cell_style: null,
    },
    {
      id: 1,
      index: 1,
      name: "Status",
      accessor: "status",
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
  const [page, setPage] = useState('Surveys');

  function handleSurveyClick(surveyId) {
    // navigation.navigate('Questions');
    //let index = items.findIndex(obj => obj.id === item.id);
    let surveyIndex = projects.findIndex(obj => obj.id === surveyId);
    setActiveProject(projects[surveyIndex]);
    setPage('Questions');
  }

  return (
    <View style={page === 'Questions' || page === 'Design' ? styles.sectionContainer : styles.sectionContainer2}>
      {page === 'Surveys' && <>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={({ pressed }) => pressed ? styles.actionButtonPressed : styles.actionButton}
            onPress={() => alert('Actions Dropdown Pressed')}>
            {({ pressed }) => (
              <View style={styles.actionTextContainer}>
                <Text style={pressed ? styles.actionTextPressed : styles.actionText}>Actions {' '}</Text>
                <View><IonIcons name='chevron-down' size={20} style={{ color: '#A3A4A8' }}></IonIcons></View>
              </View>
            )}
          </Pressable>
          {/* <AntDesign name='windows'></AntDesign> */}
          <ButtonGeneric onPress={() => alert('This is the Create Survey Screen.')} title='Create Survey'></ButtonGeneric>

        </View>
        <ReactionTable rowClick={handleSurveyClick} headers={headers} items={projects} showSettings={showSettings} setShowSettings={setShowSettings} setActive={setActiveProject} activeItem={activeProject}></ReactionTable>
        {showSettings && <ProjectSettings setShowSettings={setShowSettings} project={activeProject}></ProjectSettings>}
      </>}
      {page === 'Questions' && <QuestionsScreen initQuestions={activeProject.Question} setPage={setPage}></QuestionsScreen>}

    </View>
  );

};



const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  sectionContainer2: {
    flex: 1,
    padding: 10,
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
    fontFamily: 'Gill Sans',
  },
  actionTextPressed: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    // letterSpacing: 0.25,
    color: "white",
    fontFamily: 'Gill Sans',
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