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

import CouponHome from "../screens/CouponHome";
import CouponsDisplay from "../screens/CouponsDisplay";
//import FundraiserModalScreen from "../screens/FundraiserDonateScreen";

import { StripeProvider } from "@stripe/stripe-react-native";

import { DataStore } from "@aws-amplify/datastore";

import { AmplifyProvider } from "@aws-amplify/ui-react";

// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// });

const CouponStack = createNativeStackNavigator();

function CouponStackScreen() {
  return (
    <CouponStack.Navigator>
      <CouponStack.Screen
        options={{ headerShown: false }}
        name="CouponHome"
        component={CouponHome}
      />
      <CouponStack.Screen
        options={{ headerShown: false }}
        name="CouponsDisplay"
        component={CouponsDisplay}
      />
    </CouponStack.Navigator>
  );
}

export default CouponStackScreen;