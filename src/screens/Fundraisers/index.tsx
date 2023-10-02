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
} from "../../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { Business, Coupon, BoosterPass, Fundraiser } from "../../models";
import { Storage } from "@aws-amplify/storage";
import * as Progress from "react-native-progress";
import { reloadAsync } from "expo-updates";
import FundraiserItem from "../../components/FundraiserItem.js";

import styles from './styles';

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
// const fundraisers = [
//   {
//     CorporateSponsor: "Dev Technology Group",
//     Team: "South Lakes Baseball",
//     Description:
//       "Support the SL Baseball team purchase new uniforms for the 2022/2023 season.",
//     About: "Dev Technology provides IT solutions to meet the mission-critical needs of government by exceeding our clients’ expectations through partnership, a commitment to team work, collaboration, and valuing our employees.",
//     Promotion:
//       "Dev Technology Group will match 25% of fundraised amount up to $250.",
//     GoalAmount: 1000,
//     CurrentAmount: 479,
//     Donations: "10",
//     Date: "May 1, 2022",
//   }
// ];

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Seahawk Support</Text>
  </View>
);

// const formatText = () => (

// );


const FundraiserList = ({ nav }) => {

  const [Fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    //query the initial Coupon list and subscribe to data updates
    async function fetchFundraisers() {
      const subscriptionfundraisers = await DataStore.observeQuery(
        Fundraiser
      ).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
        //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
        const { items } = snapshot;
        setFundraisers(items);
      });
      return function cleanup() {
        subscriptionfundraisers.unsubscribe();
      };
    }
    fetchFundraisers();
    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
  }, []);

  return (
    <SafeAreaView style={styles.scrollviewcontainer}>
      <ScrollView contentContainerStyle={{ paddingBottom: 45 }}>
        {Fundraisers.map((item) => {
          // const comp = compLogoUrl(item.name);
          // const data = Coupons.filter((coup) => coup.business.id == item.id);
          return (
            <FundraiserItem key={item.id} fundraiseritem={item} navigation={nav}/>
            );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const Fundraisers = ({ navigation }) => {
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


export default Fundraisers;
