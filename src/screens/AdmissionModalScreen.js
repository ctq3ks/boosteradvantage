import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  ScrollView,
  SectionList,
  SafeAreaView,
  Date,
  Item,
  Alert,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Amplify, API, Auth, DataStore, graphqlOperation } from "aws-amplify";
import { createPaymentIntent } from "../graphql/mutations";

import Icon from "@expo/vector-icons/Ionicons";
import { reloadAsync } from "expo-updates";
import { IconBluetooth } from "@aws-amplify/ui-react";
import { useStripe } from "@stripe/stripe-react-native";

// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function AdmissionModalScreen({ navigation }) {
  // const { Admission } = route.params;
  const amount = 1000;
  const [clientSecret, setClientSecret] = useState(null); //<String | null> (null);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    fetchPaymentIntent();
  }, []);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentIntent = async () => {
    const response = await API.graphql(
      graphqlOperation(createPaymentIntent, { amount })
    );
    console.log(response.data.createPaymentIntent.clientSecret);
    setClientSecret(response.data.createPaymentIntent.clientSecret);
  };

  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });
    console.log("success");
    if (error) {
      Alert.alert(error);
    }
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await presentPaymentSheet({clientSecret});
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text style={{ fontSize: 30 }}>{JSON.stringify(Admission.Description)}</Text>
    //   <Button onPress={() => navigation.goBack()} title="Dismiss" />
    // </View>
    <View style={styles.ModalContainer}>
      <View style={styles.HeaderContainer}>
        <Icon
          name={"close"}
          size={30}
          color={"black"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 45 }}>
        <View style={styles.AdmissionContainer}>
          <View style={styles.AdmissionImageContainer}>
            <Image
              style={styles.AdmissionHeaderImage}
              source={require("../../assets/slbaseballteam.jpeg")}
            />
          </View>
          <View style={styles.DescriptionAdmissionContainer}>
            {/* onPress={Auth.signOut()} */}
            <View style={styles.DonateContainer}>
              <Pressable style={styles.DonateButton} onPress={() => openPaymentSheet()}>
                <Text style={styles.DonateText}>Donate</Text>
              </Pressable>
            </View>
            <View style={styles.separator} />
            <View style={styles.SponsorContainer}>
              <Text style={styles.SponsorHeaderText}>Sponsor Promotion</Text>
              <View style={styles.SponsorAdmissionContainer}>
                <View style={styles.SponsorAdmissionImageContainer}>
                  <Image
                    style={styles.SponsorImage}
                    source={require("../../assets/devtechnologygroup.jpeg")}
                  />
                </View>
                <View style={styles.SponsorAdmissionTextContainer}></View>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
          <View style={styles.DonationsContainer}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: "#fff",
    // opacity: .90,
    alignItems: "flex-end",
    paddingRight: 10,
    justifyContent: "flex-end",
    paddingTop: Platform.OS === "ios" ? 8 : 0,
  },
  headerTitle: {
    color: "#2E5DB5", //marginTop: 3,
    // marginBottom: 4,
    fontSize: 22,
    fontWeight: "500",
    paddingVertical: 6,
    textAlign: "center",
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  scrollviewcontainer: {
    // flex: 1,
  },
  AdmissionContainer: {
    backgroundColor: "#fff",
    // borderRadius: 2,
    // elevation: 4,
    flexDirection: "column",
    // marginHorizontal: 12,
    // marginVertical: 3,
    padding: 8,
    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
  },
  AdmissionImageContainer: {
    // flex: 3,
    padding: 5,
    // backgroundColor: "red",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  DescriptionAdmissionContainer: {
    // flex: 1,
    flexDirection: "column",
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  AdmissionDescriptionText: {
    fontSize: 16,
    fontWeight: "300",
    margin: 5,
    // alignSelf: "center",
  },
  DonateContainer: {
    flexDirection: "column",
    // backgroundColor: "blue",
    alignItems: "center",
    margin: 10,
  },
  DonateButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    width: 190,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#F2A842",
  },
  DonateText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
  SponsorContainer: {
    // flexDirection: "row",
    // alignContent: "space-between",
  },
  SponsorHeaderText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    // alignSelf: "center",
    letterSpacing: 0.25,
  },
  SponsorAdmissionContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  SponsorAdmissionImageContainer: {
    flex: 2,
    alignSelf: "center",
    // backgroundColor: "blue",
  },
  SponsorImage: {
    // borderRadius:
    // borderRadius: 10,
    width: 55,
    height: 55,
    alignSelf: "center",
  },
  SponsorAdmissionTextContainer: {
    flex: 10,
    // backgroundColor: "red",
    margin: 4,
  },
  SponsorAdmissionText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "400",
    margin: 4,
  },
  SponsorAboutContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",
    alignContent: "space-between",
    marginHorizontal: 10,
  },
  SponsorAboutText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "300",
    margin: 4,
  },
  AdmissionFundedText: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center",
  },
  AdmissionHeaderImage: {
    // marginHorizontal: 6,
    // marginVertical: 6,
    borderRadius: 10,
    width: "auto",
    height: 150,
  },
  DonationsContainer: {
    flexDirection: "column",
    // backgroundColor: "blue",
    // alignContent: "space-between",
    marginHorizontal: 10,
  },
  DonorContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",
    // alignContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  DonorIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
    backgroundColor: "#CDFFDD",
    width: 40,
    borderRadius: 110,
  },
  DonorTextContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    // backgroundColor: "red",
  },
  DonorNameText: {
    fontSize: 16,
    fontWeight: "200",
    alignSelf: "flex-start",
  },
  DonorAmountText: {
    fontSize: 16,
    fontWeight: "300",
    alignSelf: "flex-start",
  },

  separator: {
    borderBottomColor: "gray",
    marginVertical: 8,
    borderBottomWidth: 1,
  },
});

export default AdmissionModalScreen;
