import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { createBusiness, updateBusiness, deleteBusiness } from './src/graphql/mutations';
import { withAuthenticator } from 'aws-amplify-react-native'

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CouponHome from './src/screens/CouponHome';
import BoosterPass from './src/screens/BoosterPass';

import {AmplifyProvider} from "@aws-amplify/ui-react";



Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Booster Pass') {
              iconName = focused ? 'barcode' : 'barcode-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E5DB5',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" options={{headerShown: true}}  component={CouponHome} />
        <Tab.Screen name="Booster Pass" component={BoosterPass} />
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