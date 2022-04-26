import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { createBusiness, updateBusiness, deleteBusiness } from './src/graphql/mutations';
import { withAuthenticator} from 'aws-amplify-react-native'

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Icon from '@expo/vector-icons/Ionicons';
// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import BusinessHome from './src/screens/BusinessHome';
import BoosterPass from './src/screens/Admission';
import Schedule from './src/screens/Schedule';

import { DataStore } from "@aws-amplify/datastore";

import {AmplifyProvider} from "@aws-amplify/ui-react";



Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
const Tab = createBottomTabNavigator();

const App = () => {
  DataStore.start();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Sponsors') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Admission') {
              iconName = focused ? "barcode" : "barcode";
            } else if (route.name === 'Schedule') {
              iconName = focused ? "today" : "today-outline";
            }

            // You can return any component that you like here! 
            // return <img src='assets/ionicons.designerpack/accessibility.svg'></img>;
            return <Icon name={iconName} size={size} color={color}/>;
          },
          tabBarActiveTintColor: '#2E5DB5',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Schedule" options={{headerShown: false}}  component={Schedule} />
        <Tab.Screen name="Sponsors" options={{headerShown: false}}  component={BusinessHome} />
        {/* <Tab.Screen name="Booster" options={{headerShown: false}}  component={BusinessHome} /> */}
        <Tab.Screen name="Admission" component={BoosterPass} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App, {
  includeGreetings: false, 
  // signUpConfig: {
  //   signUpFields: [
  //     {
  //       label: 'First Name',
  //       key: 'given_name',
  //       required: true,
  //       displayOrder: 3,
  //       type: 'string',
  //     },
  //     {
  //       label: 'Last Name',
  //       key: 'family_name',
  //       required: true,
  //       displayOrder: 4,
  //       type: 'string',
  //       }
  //   ]
  // }
});