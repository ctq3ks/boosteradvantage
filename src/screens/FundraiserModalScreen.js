import React from "react";
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
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "@expo/vector-icons/Ionicons";
import { reloadAsync } from "expo-updates";
import { IconBluetooth } from "@aws-amplify/ui-react";
// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const donors = [
  {
    name: "John Smith",
    donation: "$50",
    date: "5/5",
  },
  {
    name: "Anne Smith",
    donation: "$70",
    date: "5/5",
  },
  {
    name: "Anonymous",
    donation: "$100",
    date: "5/10",
  },
  {
    name: "John Irons",
    donation: "$500",
    date: "5/5",
  },
  {
    name: "Anne-Lise Quinn",
    donation: "$70",
    date: "5/5",
  },
  {
    name: "Anonymous",
    donation: "$100",
    date: "5/10",
  },
  {
    name: "Carter Mitchell",
    donation: "$100",
    date: "5/10",
  },
  {
    name: "Anonymous",
    donation: "$500",
    date: "5/5",
  },
  {
    name: "Carter Johnson",
    donation: "$70",
    date: "5/5",
  },
  {
    name: "Anonymous",
    donation: "$100",
    date: "5/10",
  },
];

function FundraiserModalScreen({ route, navigation }) {
  const { fundraiser } = route.params;
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text style={{ fontSize: 30 }}>{JSON.stringify(fundraiser.Description)}</Text>
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
        <View style={styles.FundraiserContainer}>
          <View style={styles.FundraiserImageContainer}>
            <Image
              style={styles.FundraiserHeaderImage}
              source={require("../../assets/slbaseballteam.jpeg")}
            />
          </View>
          <View style={styles.DescriptionFundraiserContainer}>
            <Text style={styles.FundraiserDescriptionText}>
              {fundraiser.Description}
            </Text>
            <Progress.Bar
              progress={fundraiser.CurrentAmount / fundraiser.GoalAmount}
              width={325}
              height={10}
              color={"green"}
              borderColor={"black"}
              alignSelf={"center"}
              margin={10}
            />
            <Text style={styles.FundraiserFundedText}>
              {"$" +
                fundraiser.CurrentAmount +
                " raised of the $" +
                fundraiser.GoalAmount +
                " goal"}
            </Text>
            <View style={styles.DonateContainer}>
              <Pressable style={styles.DonateButton}>
                <Text style={styles.DonateText}>Donate</Text>
              </Pressable>
            </View>
            <Text style={styles.FundraiserFundedText}>
              {fundraiser.Team + " - " + fundraiser.Date}
            </Text>
            <View style={styles.separator} />
            <View style={styles.SponsorContainer}>
              <Text style={styles.SponsorHeaderText}>Sponsor Promotion</Text>
              <View style={styles.SponsorFundraiserContainer}>
                <View style={styles.SponsorFundraiserImageContainer}>
                  <Image
                    style={styles.SponsorImage}
                    source={require("../../assets/devtechnologygroup.jpeg")}
                  />
                </View>
                <View style={styles.SponsorFundraiserTextContainer}>
                  <Text style={styles.SponsorFundraiserText}>
                    {fundraiser.Promotion}
                  </Text>
                </View>
              </View>
              <View style={styles.SponsorAboutContainer}>
                <Text style={styles.SponsorAboutText}>{fundraiser.About}</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
          <View style={styles.DonationsContainer}>
            <Text style={styles.SponsorHeaderText}>
              Donors ({fundraiser.Donations})
            </Text>
            {donors.splice(0,3).map((donor) => {
              // const comp = compLogoUrl(item.name);
              // const data = Coupons.filter((coup) => coup.business.id == item.id);
              return (
                <View
                  key={donor.name + donor.donation}
                  style={styles.DonorContainer}
                >
                  <View style={styles.DonorIconContainer}>
                    <Icon
                      justifySelf={"center"}
                      name={"person-add-outline"}
                      size={25}
                      color={"green"}
                    />
                  </View>
                  <View style={styles.DonorTextContainer}>
                    <Text style={styles.DonorNameText}>{donor.name}</Text>
                    <Text style={styles.DonorAmountText}>
                      {donor.donation} - {donor.date}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
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
  FundraiserContainer: {
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
  FundraiserImageContainer: {
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
  DescriptionFundraiserContainer: {
    // flex: 1,
    flexDirection: "column",
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  FundraiserDescriptionText: {
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
  SponsorFundraiserContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  SponsorFundraiserImageContainer: {
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
  SponsorFundraiserTextContainer: {
    flex: 10,
    // backgroundColor: "red",
    margin: 4,
  },
  SponsorFundraiserText: {
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
  FundraiserFundedText: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center",
  },
  FundraiserHeaderImage: {
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

export default FundraiserModalScreen;
