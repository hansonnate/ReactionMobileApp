/**
 * Main Container for the app
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from '@rneui/themed';
import IonIcons from 'react-native-vector-icons/Ionicons';
// IonIcons.loadFont();
//Internal imports

//Screens
import { CreateScreen } from './screens/CreateScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { OrgDetailsScreen } from './screens/OrgDetailsScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { DeliverScreen } from './screens/DeliverScreen';
import { View } from 'react-native';

//Screen Names
const createScreenName = 'Create';
const resultsScreenName = 'Results';
const orgDetailsScreenName = 'OrgDetails';
const settingsScreenName = 'Settings';
const deliverScreenName = 'Deliver';

const Tab = createBottomTabNavigator();


export const MainContainer = () => {


    return (
        <NavigationContainer >
            <View style={{marginTop: 40}}></View>
            <Tab.Navigator
                initialRouteName={createScreenName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === createScreenName) {
                            iconName = focused ? 'create' : 'create-outline'
                        } else if (rn === resultsScreenName) {
                            iconName = focused ? 'bar-chart' : 'bar-chart-outline'
                        } else if (rn === orgDetailsScreenName) {
                            iconName = focused ? 'business' : 'business-outline'
                        } else if (rn === settingsScreenName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        } else if (rn === deliverScreenName) {
                            iconName = focused ? 'paper-plane' : 'paper-plane-outline'
                        }

                        return <IonIcons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: '#2A627C',
                    inactiveTintColor: 'grey',
                    tabBarLabelStyle: { fontSize: 13},
                    tabBarStyle: { padding: 5, height: 90},
                    headerShown: false,
                })}
                
                // screenOptions={{
                //     tabBarActiveTintColor: '#2A627C',
                //     inactiveTintColor: 'grey',
                //     tabBarLabelStyle: { fontSize: 13},
                //     tabBarStyle: { padding:10, height: 80},
                //     tabBarIcon: 
                // }}
                
                >
                <Tab.Screen name={createScreenName} component={CreateScreen}/>
                <Tab.Screen name={deliverScreenName} component={DeliverScreen}/>
                <Tab.Screen name={orgDetailsScreenName} component={OrgDetailsScreen}/>
                <Tab.Screen name={resultsScreenName} component={ResultsScreen}/>
                <Tab.Screen name={settingsScreenName} component={SettingsScreen}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    );

};
