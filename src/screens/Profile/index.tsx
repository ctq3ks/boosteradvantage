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
  Button,
} from "react-native";
import { Auth, Hub } from "aws-amplify";
import {
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from "../../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { Business, Coupon } from "../../models";
import { Storage } from "@aws-amplify/storage";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
// Some component file
import images from "../../components/schoolLogos.js";

import styles from './styles';
// import Button from "../../components/Button";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

const games1 = [
  {
    title: "Thursday, April 28",
    data: [
      {
        Sport: "Girls Varsity Tennis",
        Teams: "Westfield",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
      },
      {
        Sport: "Boys Varsity Tennis",
        Teams: "Westfield",
        Location: "Westfield High School",
        HomeOrAway: "Away",
        Time: "4:00 pm",
      },
      {
        Sport: "Girls Varsity Lacrosse",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "5:30 pm",
      },
      {
        Sport: "Boys JV Lacrosse",
        Teams: "Madison",
        Location: "Nottoway Park",
        HomeOrAway: "Home",
        Time: "5:45 pm",
      },
      {
        Sport: "Girls Varsity Softball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls JV Softball",
        Teams: "Madison",
        Location: "Madison High School",
        HomeOrAway: "Away",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls JV Lacrosse",
        Teams: "Madison",
        Location: "Nottoway Park",
        HomeOrAway: "Away",
        Time: "7:30 pm",
      },
      {
        Sport: "Boys Varsity Lacrosse",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "7:30 pm",
      },
    ],
  },
  {
    title: "Friday, April 29",
    data: [
      {
        Sport: "Boys Varsity Tennis",
        Teams: "Chantilly",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "4:00 pm",
      },
      {
        Sport: "Girls JV Soccer",
        Teams: "Oakton",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "5:45 pm",
      },
      {
        Sport: "Boys JV Soccer",
        Teams: "Oakton",
        Location: "Oakton High School",
        HomeOrAway: "Away",
        Time: "5:45 pm",
      },
      {
        Sport: "Boys Varsity Baseball",
        Teams: "Chantilly",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "6:30 pm",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls Varsity Softball",
        Teams: "Chantilly",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls JV Baseball",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls Varsity Soccer",
        Teams: "Oakton",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "7:15 pm",
      },
      {
        Sport: "Boys Varsity Soccer",
        Teams: "Oakton",
        Location: "Oakton High School",
        HomeOrAway: "Away",
        Time: "7:15 pm",
      },
    ],
  },
  {
    title: "Saturday, April 30",
    data: [
      {
        Sport: "Girls Varsity Track",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "9:00 am",
      },
      {
        Sport: "Boys Varsity Track",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "9:00 am",
      },
      {
        Sport: "Girls Varsity Softball",
        Teams: "Yorktown",
        Location: "Yorktown High School",
        HomeOrAway: "Away",
        Time: "11:00 am",
        Status: "Cancelled",
      },
    ],
  },
  {
    title: "Sunday, May 1",
    data: [],
  },
  {
    title: "Monday, May 2",
    data: [],
  },
  {
    title: "Tuesday, May 3",
    data: [
      {
        Sport: "Girls JV Soccer",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "5:45 pm",
      },
      {
        Sport: "Boys JV Soccer",
        Teams: "Chantilly",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "5:45 pm",
      },
      {
        Sport: "Boys JV Baseball",
        Teams: "Madison",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "6:30 pm",
      },
      {
        Sport: "Girls Varsity Soccer",
        Teams: "Chantilly",
        Location: "Chantilly High School",
        HomeOrAway: "Away",
        Time: "7:15 pm",
      },
      {
        Sport: "Boys Varsity Soccer",
        Teams: "Chantilly",
        Location: "South Lakes High School",
        HomeOrAway: "Home",
        Time: "7:15 pm",
      },
    ],
  },
];

// const SignOutMethod = async () => (
//   await DataStore.clear()
//   .then(await Auth.signOut())
// );

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Profile</Text>
  </View>
);

const SignOut = () => (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => Auth.signOut()}><Text>Sign Out!</Text></Pressable>
    </View>
  );

const ListofGames = () => {
  const teamLogoUrl = (team) => {
    switch (team) {
      case "Chantilly":
        return images.Chantilly;
        break;

      case "Madison":
        return images.Madison;
        break;

      case "Oakton":
        return images.Oakton;
        break;

      case "Westfield":
        return images.Westfield;
        break;

      case "Yorktown":
        return images.Yorktown;
        break;

      case "Herndon":
        return images.Herndon;
        break;
    }
  };
  const dateview = (item) => {
    return (
      <View style={styles.ScheduleDates}>
        <Text style={styles.ScheduleDatesText}>{item}</Text>
      </View>
    );
  };
  const gameview = (item) => {
    // console.log(item.Teams)
    const opposingSchool = teamLogoUrl(item.Teams);
    const homeSchool = require("../../../assets/southlakes.png");
    var isHome = true;
    if (item.HomeOrAway == "Home") {
      isHome = true;
    } else {
      isHome = false;
    }
    return (
      <View style={styles.GameContainer}>
        <View style={styles.GameHomeContainer}>
          <Image
            style={styles.HomeLogo}
            source={isHome ? homeSchool : opposingSchool}
          />
          <Text style={styles.HomeAwayText}>
          {isHome ? "South Lakes" : item.Teams}
          </Text>
        </View>
        <View style={styles.GameContainerInfo}>
          <Text style={styles.GameContainerGameText}>
            {item.Sport} ({item.HomeOrAway})
          </Text>
          <Text style={styles.GameContainerLocationText}>
            @ {item.Location}
          </Text>
          <Text style={styles.GameContainerTimeText}>{item.Time}</Text>
        </View>
        <View style={styles.GameAwayContainer}>
          <Image
            style={styles.AwayLogo}
            source={isHome ? opposingSchool : homeSchool}
          />
          <Text style={styles.HomeAwayText}>
          {isHome ? item.Teams : "South Lakes"}
          </Text>
        </View>
      </View>
    );
  };
  // " + item.Teams + "
  return (
    <SafeAreaView>
      <SectionList
        contentContainerStyle={{ paddingBottom: 50 }}
        sections={games1}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => gameview(item)} //{({ item }) => gameview(item)}
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

const Profile = () => {
  // Hub.listen('auth', async (data) => {
  //   if (data.payload.event === 'signOut') {
  //     await DataStore.clear();
  //   }
  // });

  return (
    <>
      <Header />
      <SignOut />
      {/* <BusinessList /> */}
    </>
  );
};

export default Profile;
