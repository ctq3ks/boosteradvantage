import React, { useState, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableWithoutFeedback, Pressable , StatusBar} from "react-native";

import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";

import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "@expo/vector-icons/Ionicons";
// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import BottomTabNav from "./BottomTabNav";
import BottomTabNavBusiness from "./Misc/BottomTabNavBusiness";
import BusinessHome from "../screens/Misc/Coupons_Business";


const Root = createNativeStackNavigator();

const Router = () => {
  const [userData, setUserData] = useState("");
  const [stack, setStack] = useState();

  // const fetchUserData = async () => {
  //   const user_data = await Auth.currentAuthenticatedUser();
  //   console.log(user_data.username);
  //   setUserData(user_data.username);
  // };

  

  const RootScreen = () => {
    if (userData == "glory_days_admin") {
      return  <Root.Screen component={BottomTabNav} name="HomeTabs" />;
    } 
    else {
      return  <Root.Screen component={BottomTabNav} name="HomeTabs" />;
    }
  }

    const [isLoaded, setLoaded] = React.useState(false)

    //figure out why this works
    useEffect(() => {
        const getData = async () => {
            try {
                const token = await Auth.currentAuthenticatedUser().then(data => (data.signInUserSession.accessToken.payload['cognito:groups']));
                if(token !== null) {
                    setUserData(token);
                }
            }
            catch(e) {
            // error reading value
            };
            setLoaded(true);
        }

        getData();

        return () => null;
    },[]);

    if(!isLoaded){
      return null;
    };

    return (
      <NavigationContainer>
          <Root.Navigator screenOptions={{headerShown: false}}>
            <Root.Screen component={BottomTabNav} name="HomeTabs" />
            {/* <Root.Screen component={userData == "Business" ? BottomTabNavBusiness : BottomTabNav} name="HomeTabs" /> */}
          </Root.Navigator>
          </NavigationContainer>
  //      userData != "glory_days_admin" ?  (
  //        <NavigationContainer>
  //         <Root.Navigator screenOptions={{headerShown: true}}>
  //           <Root.Screen component={BottomTabNav} name="BusinessTabs" />
  //         </Root.Navigator>
  //         </NavigationContainer>) :
  //         (<NavigationContainer>
  //         <Root.Navigator screenOptions={{headerShown: true}}>
  //             <Root.Screen component={BottomTabNavBusiness} name="HomeTabs" />
  //           </Root.Navigator>
            
  //       </NavigationContainer>)
  );
};

export default Router;