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

import styles from './styles';

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

function FundraiserDonateScreen({ route, navigation }) {
  const { fundraiser, image} = route.params;
  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text style={{ fontSize: 30 }}>{JSON.stringify(fundraiser.Description)}</Text>
    //   <Button onPress={() => navigation.goBack()} title="Dismiss" />
    // </View>
    <View>
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
          {/* <View style={styles.FundraiserImageContainer}>
            <Image
              style={styles.FundraiserHeaderImage}
              source={require("../../../assets/slbaseballteam.jpeg")}
            />
          </View> */}
          {image.length > 0 ? (
          <View style={styles.FundraiserImageContainer}>
            <Image
              source={{ uri: image }}
              style={styles.FundraiserHeaderImage}
            />
          </View>
        ) : null}
          <View style={styles.DescriptionFundraiserContainer}>
            <Text style={styles.FundraiserDescriptionText}>
              {fundraiser.title}
            </Text>
            <View style={styles.ProgressBar}>
            <Progress.Bar
              progress={fundraiser.dollarsRaised / fundraiser.dollarsGoal}
              width={325}
              height={10}
              color={"green"}
              borderColor={"black"}
            />
            </View>
            <Text style={styles.FundraiserFundedText}>
              {"$" +
                fundraiser.dollarsRaised +
                " raised of the $" +
                fundraiser.dollarsGoal +
                " goal"}
            </Text>
            <View style={styles.DonateContainer}>
              <Pressable style={styles.DonateButton}>
                <Text style={styles.DonateText}>Donate</Text>
              </Pressable>
            </View>
            <Text style={styles.FundraiserFundedText}>
              {fundraiser.fundee + " - " + fundraiser.raiseByDate}
            </Text>
            <View style={styles.separator} />
            <View style={styles.SponsorContainer}>
              <Text style={styles.SponsorHeaderText}>Sponsor Promotion</Text>
              <View style={styles.SponsorFundraiserContainer}>
                <View style={styles.SponsorFundraiserImageContainer}>
                  <Image
                    style={styles.SponsorImage}
                    source={require("../../../assets/devtechnologygroup.jpeg")}
                  />
                </View>
                <View style={styles.SponsorFundraiserTextContainer}>
                  <Text style={styles.SponsorFundraiserText}>
                    {fundraiser.businessPromo}
                  </Text>
                </View>
              </View>
              <View style={styles.SponsorAboutContainer}>
                <Text style={styles.SponsorAboutText}>Dev Technology provides IT solutions to meet the mission-critical needs of government by exceeding our clients’ expectations through partnership, a commitment to team work, collaboration, and valuing our employees.</Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
          <View style={styles.DonationsContainer}>
            <Text style={styles.SponsorHeaderText}>
              Donors ({10})
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

export default FundraiserDonateScreen;
