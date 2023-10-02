// import EditCampaignModal from "./EditCampaignModal";
// import CreateCampaignModal from "./CreateCampaignModal";
// import DeleteCampaignModal from "./DeleteCampaignModal";
import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import Amplify, { Auth, Storage } from "aws-amplify";
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
import * as Progress from "react-native-progress";
// import * as queries from "../../graphql/queries";
// import { S3Image } from "aws-amplify-react-native";

// import { Link as ReachLink } from '@reach/router';

// IMPORTING BOOTSRAP AND OTHER UI COMPONENETS
// import Button from 'react-bootstrap/Button';
import { format } from "date-fns";
// import greencheck from "../../assets/greencheck.png";
// import redcheck from "../../assets/redcheck.png";

const FundraiserItem = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchFundraiserImage();
  }, []);

  async function fetchFundraiserImage() {
    //only fetch if the coupon has an image
    // console.log(business.logo)
    if (!!props.fundraiseritem.image) {
      let imageKey = await Storage.get(props.fundraiseritem.image);
      // console.log("********Business logo:", imageKey)
      // const signedUrl = await Storage.get(imageKey.key);
      // console.log("signedKeys:", signedUrl);
      setImage(imageKey);
    }
  }

  return (
    <Pressable
      key={props.fundraiseritem.title}
      onPress={() =>
        props.navigation.navigate("fundraiserModal", { fundraiser: props.fundraiseritem, image: image})
      }
    >
      <View style={styles.FundraiserContainer}>
        {/* <View style={styles.FundraiserImageContainer}>
          <Image
            style={styles.FundraiserHeaderImage}
            source={require("../../assets/slbaseballteam.jpeg")}
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
            {props.fundraiseritem.title}
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
                {props.fundraiseritem.businessPromo}
              </Text>
            </View>
          </View>
          
          <View style={styles.ProgressBar}>
            <Progress.Bar
              progress={
                props.fundraiseritem.dollarsRaised / props.fundraiseritem.dollarsGoal
              }
              width={325}
              height={10}
              color={"green"}
              borderColor={"black"}
            />
          </View>
          <Text style={styles.FundraiserFundedText}>
            {"$" +
              props.fundraiseritem.dollarsRaised +
              " raised of the $" +
              props.fundraiseritem.dollarsGoal +
              " goal"}
          </Text>
          {/* <Progress.Circle progress={0.4} size={50} showsText={true} fill={"none"}/> */}
          {/* <Text style={styles.FundraiserDescriptionText}>
                  {(item.CurrentAmount / item.GoalAmount) * 100 + "%"}
                </Text> */}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
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
  ProgressBar: {
    margin: 10,
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

export default FundraiserItem;
