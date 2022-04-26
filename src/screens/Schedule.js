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
  Date,
  Item,
} from "react-native";
import { API } from "aws-amplify";
import {
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from "../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { AmplifyS3Image, IconBluetooth } from "@aws-amplify/ui-react";
import { Business, Coupon } from "../models";
import { Storage } from "@aws-amplify/storage";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

const dates = ["04/12/22", "04/13/22", "04/14/22"];

const games1 = [
  {
    title: "Tuesday, April 12",
    data: [
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
    ],
  },
  {
    title: "Wednesday, April 13",
    data: [
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
    ],
  },
  {
    title: "Thursday, April 14",
    data: [
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
    ],
  },
  {
    title: "Friday, April 15",
    data: [
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Away",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
    ],
  },
  {
    title: "Saturday, April 16",
    data: [
      {
        Sport: "Boys Varsity Soccer",
        Teams: "McLean",
        Location: "McLean High School",
        HomeOrAway: "Home",
        Time: "6:00 pm",
        Date: "04/12/22",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
        Date: "04/12/22",
      },
    ],
  },
];

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Seahawk Athletics</Text>
  </View>
);

const ListofGames = () => {
  const dateview = (item) => {
    return (
      <View style={styles.ScheduleDates}>
        <Text style={styles.ScheduleDatesText}>{item}</Text>
      </View>
    );
  };
  const gameview = (item) => {
    return (
      <View style={styles.GameContainer}>
        <Image
          style={styles.HomeLogo}
          source={require("../../assets/southlakes.png")}
        />
        <View style={styles.GameContainerInfo}>
          <Text style={styles.GameContainerGameText}>
            {item.Sport} ({item.HomeOrAway})
          </Text>
          <Text style={styles.GameContainerLocationText}>
            @ {item.Location}
          </Text>
          <Text style={styles.GameContainerTimeText}>{item.Time}</Text>
        </View>
        <Image
          style={styles.AwayLogo}
          source={require("../../assets/herndon.png")}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={{ paddingBottom: 55 }}
        sections={games1}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => gameview(item)}
        renderSectionHeader={({ section }) => dateview(section.title)}
      />
    </SafeAreaView>
    // <ScrollView stickyHeaderIndices={[1]} style={styles.ScheduleContainer}>

    //   {dates.map((date) => (
    //     <View style={styles.GameContainer}>
    //         <Text >{date}</Text>

    //       <View style={styles.GameContainer}>
    //         {games.filter((item) => item.Date==date).map(({ Sport, Teams, Time, Date }, index) => (
    //           <View style={styles.GameContainer} key={index}>
    //             <Text >{Sport}</Text>
    //             <Text numberOfLines={2}>
    //               {Teams}
    //             </Text>
    //             <Text>{Time}</Text>
    //           </View>
    //         ))}
    //       </View>
    //     </View>
    //   ))}

    // </ScrollView>
    // <View style={styles.ScheduleContainer}>

    //   {dates.map((date) => (
    //     <ScrollView stickyHeaderIndices={[0]}>
    //       <View style={styles.GameContainer}>
    //         <Text >{date}</Text>
    //       </View>
    //       {items.filter((item) => item.Date==date).map(({ Sport, Teams, Time, Date }, index) => (
    //           <View style={styles.GameContainer} key={index}>
    //             <Text >{Sport}</Text>
    //             <Text>
    //               {Teams}
    //             </Text>
    //             <Text>{Time}</Text>
    //           </View>
    //         ))}
    //     </ScrollView>
    //   ))}

    // </View>
  );
};

const Schedule = () => {
  return (
    <>
      <Header />
      <ListofGames />
      {/* <BusinessList /> */}
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
    color: "#2E5DB5",
    fontSize: 27,
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
  ScheduleContainer: {
    flex: 1,
    flexDirection: "column",
    // flexWrap: "wrap",
    // marginTop: 8,
    // marginHorizontal: 20,
    backgroundColor: "white",
  },
  ScheduleDates: {
    backgroundColor: "#fff",
    flexDirection: "row",
    // marginHorizontal: 12,
    // marginVertical: 8,
    // borderBottomColor: "gray",
    // borderTopWidth: 1,
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  ScheduleDatesText: {
    fontSize: 18,
    fontWeight: "400",
    alignSelf: "center",
    justifyContent: "center",
  },

  GameContainer: {
    backgroundColor: "#fff",
    // borderRadius: 2,
    // elevation: 4,
    flexDirection: "row",
    alignContent: "space-between",
    // marginHorizontal: 12,
    // marginVertical: 8,
    // borderBottomColor: "gray",
    // borderBottomWidth: 1,
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  GameContainerInfo: {
    fontSize: 16,
    flex: 4,
    alignSelf: "center",
    justifyContent: "center",
  },
  GameContainerGameText: {
    fontSize: 20,
    fontWeight: "300",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 3,
    marginBottom: 4,
  },
  GameContainerLocationText: {
    fontSize: 16,
    fontWeight: "300",
    alignSelf: "center",
    justifyContent: "center",
  },
  GameContainerTimeText: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center",
    justifyContent: "center",
  },
  HomeLogo: {
    flex: 1,
    width: 45,
    height: 55,
  },
  AwayLogo: {
    flex: 1,
    width: 45,
    height: 55,
  },

  TopSectionBusinessContainer: {
    flexDirection: "row",
    padding: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  TopSectionBusinessContainerText: {
    padding: 12,
  },
  CouponsContainer: {
    // flexDirection: "column",
    // flex: 1,
    // flexDirection: "column",
    // backgroundColor: "blue",
  },
  CouponItemContainer: {
    // flex: 1,
    flexDirection: "row",
    borderTopColor: "black",
    borderTopWidth: 1,
    // flexDirection: 'column',
    // alignContent: 'center',
    // backgroundColor: "red",
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: "space-between",
  },
  CouponItemContainerDescription: {
    flex: 4,
    margin: 15,
    // backgroundColor: "blue",
  },
  CouponItemContainerExpiration: {
    flex: 1,
    // backgroundColor: "blue",
    margin: 5,
    justifyContent: "center",
  },
  BusinessHeadingText: {
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
  BusinessLocationText: {
    fontSize: 15,
    fontWeight: "600",
  },
  BusinessLogo: {
    // marginHorizontal: 6,
    // marginVertical: 6,
    width: 70,
    height: 70,
  },
  categoryText: {
    color: "#2E5DB5",
    fontWeight: "800",
    alignSelf: "center",
  },
  categoryTextPressed: {
    color: "#fff",
    fontWeight: "800",
    alignSelf: "center",
  },
  categoryContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    opacity: 1,
    flex: 0.3,
    borderWidth: 2,
    borderColor: "#2E5DB5",
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  categoryContainerPressed: {
    backgroundColor: "#2E5DB5",
    borderRadius: 50,
    flex: 0.3,
    borderWidth: 2,
    borderColor: "#2E5DB5",
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },

  categoriesContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // justifyContent: 'center',
    paddingVertical: 7,
  },
});

export default Schedule;
