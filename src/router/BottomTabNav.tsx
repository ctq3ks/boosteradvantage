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

import BusinessHome from "../screens/BusinessHome";
import Schedule from "../screens/Schedule";

import FundraiserStack from "./FundraiserStack";
import AdmissionStack from "./AdmissionStack";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                size = 28;

                if (route.name === "Coupons") {
                  iconName = focused ? "pricetag" : "pricetag-outline";
                } else if (route.name === "Admission") {
                  iconName = focused ? "barcode" : "barcode";
                } else if (route.name === "Schedule") {
                  iconName = focused ? "calendar" : "calendar-outline";
                } else if (route.name === "Fundraisers") {
                  iconName = focused ? "gift" : "gift-outline";
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
                name="Schedule"
                options={{ headerShown: false }}
                component={Schedule}
              />
              <Tab.Screen
                name="Coupons"
                options={{ headerShown: false }}
                component={BusinessHome}
              />
              <Tab.Screen
                name="Fundraisers"
                options={{ headerShown: false }}
                component={FundraiserStack}
              />
              <Tab.Screen
                name="Admission"
                options={{ headerShown: false }}
                component={AdmissionStack}
              />
          </Tab.Navigator>
  );
};

export default BottomTabNav;