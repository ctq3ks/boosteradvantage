import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableWithoutFeedback, Pressable } from "react-native";

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "@expo/vector-icons/Ionicons";
// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import Admission from "../screens/Admission";
import AdmissionProductsScreen from "../screens/AdmissionProductsScreen";
import AdmissionShoppingCartScreen from "../screens/AdmissionShoppingCartScreen";
import AdmissionCheckoutScreen from "../screens/AdmissionCheckoutScreen";

import { StripeProvider } from "@stripe/stripe-react-native";

import { DataStore } from "@aws-amplify/datastore";

import { AmplifyProvider } from "@aws-amplify/ui-react";

const AdmissionStack = createNativeStackNavigator();

function AdmissionStackScreen() {
  return (
    <AdmissionStack.Navigator>
      <AdmissionStack.Screen
        options={{ headerShown: false }}
        name="AdmissionHome"
        component={Admission}
      />
      <AdmissionStack.Screen
        name="Booster Passes"
        component={AdmissionProductsScreen}
      />
      <AdmissionStack.Screen
        options={{
          headerShown: true,
        }}
        // screenOptions={{ presentation: "modal" }}
        name="Shopping Cart"
        component={AdmissionShoppingCartScreen}
      />
      <AdmissionStack.Screen
        options={{
          headerShown: true,
        }}
        name="Check Out"
        component={AdmissionCheckoutScreen}
      />
    </AdmissionStack.Navigator>
  );
}

export default AdmissionStackScreen;