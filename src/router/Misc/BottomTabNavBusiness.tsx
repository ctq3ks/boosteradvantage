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

import Coupons_Business from "../../screens/Misc/Coupons_Business";
import Schedule from "../../screens/Schedule";
import Profile from "../../screens/Profile";

import FundraiserStack from "../FundraiserStack";
import AdmissionStack from "../AdmissionStack";

const Tab = createBottomTabNavigator();

const BottomTabNavBusiness = () => {
  return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                size = 28;

                if (route.name === "Coupons") {
                  iconName = focused ? "pricetag" : "pricetag-outline";
                } else if (route.name === "Fundraisers") {
                  iconName = focused ? "gift" : "gift-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }

                // You can return any component that you like here!
                // return <img src='assets/ionicons.designerpack/accessibility.svg'></img>;
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "#2E5DB5",
              tabBarInactiveTintColor: "gray",
            })}
          >
              <Tab.Screen
                name="Coupons"
                options={{ headerShown: false }}
                component={Coupons_Business}
              />
              <Tab.Screen
                name="Fundraisers"
                options={{ headerShown: false }}
                component={FundraiserStack}
              />
              <Tab.Screen
                name="Profile"
                options={{ headerShown: false }}
                component={Profile}
              />
          </Tab.Navigator>
  );
};

export default BottomTabNavBusiness;