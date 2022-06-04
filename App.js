import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableWithoutFeedback, Pressable } from "react-native";

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import {
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from "./src/graphql/mutations";
import { withAuthenticator } from "aws-amplify-react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "@expo/vector-icons/Ionicons";
// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import BusinessHome from "./src/screens/BusinessHome";
import Admission from "./src/screens/Admission";
import AdmissionProductsScreen from "./src/screens/AdmissionProductsScreen";
import AdmissionShoppingCartScreen from "./src/screens/AdmissionShoppingCartScreen";
import AdmissionCheckoutScreen from "./src/screens/AdmissionCheckoutScreen";
import Schedule from "./src/screens/Schedule";
import Fundraiser from "./src/screens/Fundraiser";
import FundraiserModalScreen from "./src/screens/FundraiserModalScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

import { StripeProvider } from "@stripe/stripe-react-native";

import { DataStore } from "@aws-amplify/datastore";

import { AmplifyProvider } from "@aws-amplify/ui-react";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
const Tab = createBottomTabNavigator();

const FundraiserStack = createNativeStackNavigator();

function FundraiserStackScreen() {
  return (
    <FundraiserStack.Navigator>
      <FundraiserStack.Screen
        options={{ headerShown: false }}
        name="Fundraiser"
        component={Fundraiser}
      />
      <FundraiserStack.Screen
        options={{ headerShown: false }}
        screenOptions={{ presentation: "modal" }}
        name="fundraiserModal"
        component={FundraiserModalScreen}
      />
    </FundraiserStack.Navigator>
  );
}

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
        // options={({ navigation, route }) => ({
        //   headerTitle: Admission />,
        // })}
          // headerRight: () => ( props => <LogoTitle {...props}
          //   <Icon
          //     justifySelf={"center"}
          //     name={"cart-outline"}
          //     size={30}
          //     color={"#2E5DB5"}
          //     onPress={navigate("Shopping Cart")}
          //   />
          // ),]
        // screenOptions={{ presentation: "modal" }}
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
        screenOptions={{ presentation: "modal" }}
        name="Check Out"
        component={AdmissionCheckoutScreen}
      />
    </AdmissionStack.Navigator>
  );
}

const App = () => {
  DataStore.start();
  // useEffect(() => {
  //   initStripe({
  //     publishableKey: publishableKey,
  //     merchantIdentifier: 'merchant.identifier',
  //   });
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StripeProvider publishableKey="pk_test_51KwtY8JWWO2bb9v1qgcvnINieHpf7aMHZSBjPo3OYxLbZqSByroxKCju3gGoqYXL5pwNjqWsJZKWojrC47RpTpr800DyX89NH6">
        <NavigationContainer>
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
            <Tab.Group>
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
                component={FundraiserStackScreen}
              />
              <Tab.Screen
                name="Admission"
                options={{ headerShown: false }}
                component={AdmissionStackScreen}
              />
            </Tab.Group>
            {/* <Tab.Group>
          <Tab.Screen
              name="modal"
              options={{ headerShown: false }}
              component={FundraiserModalScreen}
            />
          </Tab.Group> */}
          </Tab.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
