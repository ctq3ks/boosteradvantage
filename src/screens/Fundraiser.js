import React, { useState, useEffect } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  SectionList,
  SafeAreaView,
  Animated,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { API, withSSRContext } from "aws-amplify";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createBoosterPass,
  updateBoosterPass,
  deleteBoosterPass,
} from "../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { AmplifyS3Image, IconBluetooth } from "@aws-amplify/ui-react";
import { Business, Coupon, BoosterPass } from "../models";
import { Storage } from "@aws-amplify/storage";
import * as Progress from "react-native-progress";
import { reloadAsync } from "expo-updates";
import compLogos from "../components/compLogos.js";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
const fundraisers = [
  {
    CorporateSponsor: "Dev Technology Group",
    Team: "South Lakes Baseball",
    Description:
      "Support the SL Baseball team purchase new uniforms for the 2022/2023 season.",
    About: "Dev Technology provides IT solutions to meet the mission-critical needs of government by exceeding our clients’ expectations through partnership, a commitment to team work, collaboration, and valuing our employees.",
    Promotion:
      "Dev Technology Group will match 25% of fundraised amount up to $250.",
    GoalAmount: "1000",
    CurrentAmount: "479",
    Donations: "10",
    Date: "May 1, 2022",
  }
];

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Seahawk Support</Text>
  </View>
);

// const formatText = () => (

// );

const FundraiserList = ({ nav }) => {
  return (
    <SafeAreaView style={styles.scrollviewcontainer}>
      <ScrollView contentContainerStyle={{ paddingBottom: 45 }}>
        {fundraisers.map((item) => {
          // const comp = compLogoUrl(item.name);
          // const data = Coupons.filter((coup) => coup.business.id == item.id);
          return (
            <TouchableWithoutFeedback
              key={item.Description}
              onPress={() => nav.navigate("modal", { fundraiser: item })}
            >
              <View style={styles.FundraiserContainer}>
                <View style={styles.FundraiserImageContainer}>
                  <Image
                    style={styles.FundraiserHeaderImage}
                    source={require("../../assets/slbaseballteam.jpeg")}
                  />
                </View>
                <View style={styles.DescriptionFundraiserContainer}>
                  <Text style={styles.FundraiserDescriptionText}>
                    {item.Description}
                  </Text>
                  <View style={styles.SponsorFundraiserContainer}>
                    <View style={styles.SponsorFundraiserImageContainer}>
                      <Image
                        style={styles.SponsorImage}
                        source={require("../../assets/devtechnologygroup.jpeg")}
                      />
                    </View>
                    <View style={styles.SponsorFundraiserTextContainer}>
                      <Text style={styles.SponsorFundraiserText}>
                        {item.Promotion}
                      </Text>
                    </View>
                  </View>
                  {/* <Text style={styles.FundraiserFundedText}>
                  {"$" +
                    item.CurrentAmount +
                    " raised of the $" +
                    item.GoalAmount +
                    " goal"}
                </Text> */}
                  <Progress.Bar
                    progress={item.CurrentAmount / item.GoalAmount}
                    width={325}
                    height={10}
                    color={"green"}
                    borderColor={"black"}
                    alignSelf={"center"}
                    margin={10}
                  />
                  <Text style={styles.FundraiserFundedText}>
                    {"$" +
                      item.CurrentAmount +
                      " raised of the $" +
                      item.GoalAmount +
                      " goal"}
                  </Text>
                  {/* <Progress.Circle progress={0.4} size={50} showsText={true} fill={"none"}/> */}
                  {/* <Text style={styles.FundraiserDescriptionText}>
                  {(item.CurrentAmount / item.GoalAmount) * 100 + "%"}
                </Text> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const Fundraiser = ({ navigation }) => {
  return (
    <>
      <Header />
      <FundraiserList nav={navigation} />
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("modal")}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    // opacity: .90,
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
    borderRadius: 2,
    elevation: 4,
    flexDirection: "column",
    // marginHorizontal: 12,
    marginVertical: 3,
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
  TopSectionFundraiserContainerText: {
    padding: 5,
    alignSelf: "center",
  },

  FundraiserDescriptionText: {
    fontSize: 16,
    fontWeight: "300",
    margin: 5,
    // alignSelf: "center",
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
    fontWeight: "300",
    margin: 4,
  },
  FundraiserFundedText: {
    fontSize: 16,
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
});

export default Fundraiser;
