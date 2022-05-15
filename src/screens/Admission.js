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
} from "react-native";
import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
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
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Let's Go Seahawks!</Text>
  </View>
);

const FilterBoosterPassModalswithList = ({ nav }) => {
  // const [restaurant, setRestaurant] = useState(true);
  // const [salon, setSalon] = useState(true);
  // const [services, setServices] = useState(true);

  const [isBoosterPassRedeemed, setIsBoosterPassRedeemed] =
    React.useState(false);

  const handleBoosterModal = () =>
    setIsRedeemBoosterVisible(() => !isRedeemBoosterVisible);

  const BoosterPasses = () => {
    const [BoosterPasses, setBoosterPasses] = useState([]);

    const [isPassRedeemed, setIsPassRedeemed] = React.useState(false);
    const [isRedeemDropdownVisible, setIsRedeemDropdownVisible] =
      React.useState(false);

    useEffect(() => {
      //query the initial Coupon list and subscribe to data updates (Business, (c) => ifFiltered ? c.category("eq", queryvalue) : c) , (c) => c.isUsed("eq", false)
      async function fetchPasses() {
        const subscription = await DataStore.observeQuery(
          BoosterPass
        ).subscribe((snapshot) => {
          //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.BoosterPass.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
          //BoosterPass, c => ifFiltered ? c.category("eq", queryvalue) : c
          const { items, isSynced } = snapshot;
          setBoosterPasses(items);
        });
        return function cleanup() {
          subscription.unsubscribe();
          // setIsRedeemBoosterVisible(false);
        };
      }
      fetchPasses();
      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    }, []);

    function RenderPass(pass) {
      if (pass.isUsed) {
        return <RenderRedeemedPass type={pass.type} isUsed={pass.isUsed} />;
      }
      return <RenderUnredeemedPass type={pass.type} isUsed={pass.isUsed} />;
    }

    const RenderRedeemedPass = (pass) => (
      <ImageBackground
        source={require("../../assets/boosterpassbackground1.jpeg")}
        imageStyle={{ borderRadius: 20, opacity: 0.3 }}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <ImageBackground
          source={require("../../assets/redeemed.png")}
          imageStyle={{ borderRadius: 20, opacity: 0.7 }}
          resizeMode="cover"
          style={styles.backgroundimage}
        >
          <View style={styles.BoosterPassHeaderRedeemed}>
            <Text style={styles.BoosterPassHeaderText1Redeemed}>
              All Sports - {pass.type}
            </Text>
            <Text style={styles.BoosterPassHeaderText2}>
              Spring Season Pass
            </Text>
          </View>
          <View style={styles.BoosterPassSLContainerRedeemed}>
            <Image
              style={styles.BoosterPassLogo}
              source={require("../../assets/southlakes.png")}
            />
            <View style={styles.BoosterPassTextIconsContainer}>
              <Text style={styles.BoosterPassLogosContainerText}>
                South Lakes Seahawks
              </Text>
              <View style={styles.BoosterPassIconsContainer}>
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../assets/baseball-ball.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../assets/field.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../assets/soccer-ball-variant.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../assets/lacrosse.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.BoosterPassFooterContainerRedeemed}>
            <Text style={styles.BoosterPassFooterText}>
              {/* Featured Sponsor: */}
            </Text>
            <Image
              style={styles.BoosterPassFooterImage}
              source={require("../../assets/boostersponsor.png")}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
    );
    const RenderUnredeemedPass = (pass) => (
      <ImageBackground
        source={require("../../assets/boosterpassbackground1.jpeg")}
        imageStyle={{ borderRadius: 20, opacity: 0.3 }}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <View style={styles.BoosterPassHeader}>
          <Text style={styles.BoosterPassHeaderText1}>
            All Sports - {pass.type}
          </Text>
          <Text style={styles.BoosterPassHeaderText2}>Spring Season Pass</Text>
        </View>
        <View style={styles.BoosterPassSLContainer}>
          <Image
            style={styles.BoosterPassLogo}
            source={require("../../assets/southlakes.png")}
          />
          <View style={styles.BoosterPassTextIconsContainer}>
            <Text style={styles.BoosterPassLogosContainerText}>
              South Lakes Seahawks
            </Text>
            <View style={styles.BoosterPassIconsContainer}>
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../assets/baseball-ball.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../assets/field.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../assets/soccer-ball-variant.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../assets/lacrosse.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.BoosterPassFooterContainer}>
          <Text style={styles.BoosterPassFooterText}>
            {/* Featured Sponsor: */}
          </Text>
          <Image
            style={styles.BoosterPassFooterImage}
            source={require("../../assets/boostersponsor.png")}
          />
        </View>
      </ImageBackground>
    );

    return (
      // <SafeAreaView >
      // <TouchableOpacity
      //   //onPress={() => setIsRedeemBoosterVisible(true)}
      //   onLongPress={() => setIsRedeemBoosterVisible(!isRedeemBoosterVisible)}
      //   style={ styles.BoosterPassesContainer }
      // >
      // {/* <View style={ styles.BoosterPassesContainerScroll }> */}
      <ScrollView
        style={styles.BoosterPassesContainerScroll}
        contentContainerStyle={{ paddingBottom: 25 }}
      >
        <View
          //onPress={() => setIsRedeemBoosterVisible(true)}
          // onLongPress={() => setIsRedeemBoosterVisible(!isRedeemBoosterVisible)}
          style={styles.BoosterPassesContainer}
        >
          {BoosterPasses.map((item) => {
            const redeem = async (pass) => {
              await DataStore.save(
                BoosterPass.copyOf(pass, (updated) => {
                  updated.isUsed = !pass.isUsed;
                })
              );
            };

            return (
              <TouchableWithoutFeedback
                //onPress={() => setIsRedeemBoosterVisible(true)}
                key={item.id}
                onPress={() =>
                  setIsRedeemDropdownVisible(!isRedeemDropdownVisible)
                }
                onLongPress={() => redeem(item)}
              >
                <View
                  style={
                    item.isUsed && isRedeemDropdownVisible
                      ? styles.BoosterPassContainerModal
                      : isRedeemDropdownVisible
                      ? styles.BoosterPassContainerModalUnselected
                      : styles.BoosterPassContainer
                  }
                >
                  <RenderPass type={item.type} isUsed={item.isUsed} />
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    );
  };
  // onPress={() => nav.navigate("admissionModal") Auth. signOut()
  return (
    <View>
      <BoosterPasses />
      <View style={styles.PurchaseContainer}>
        <Pressable style={styles.PurchaseButton} onPress={() => nav.navigate("admissionModal")}>
          <Text style={styles.PurchaseText}>Purchase Passes</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Admission = ({ navigation }) => {
  return (
    <>
      <Header />
      <FilterBoosterPassModalswithList nav={navigation} />
      {/* <BoosterPassList /> */}
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
  BoosterPassesContainerScroll: {
    // flex: 5,
    // // flexDirection: "column",
    // marginTop: 8,
    // marginHorizontal: 20,
    // backgroundColor: "black",
  },
  BoosterPassesContainer: {
    flex: 1,
    minHeight: 460,
    flexDirection: "column",
    // flexWrap: "wrap",
    marginTop: 8,
    marginHorizontal: 20,
    // backgroundColor: "black",
  },

  // BoosterPassesContainerModal: {
  //   flex: 1,
  //   flexDirection: "column",
  //   // flexWrap: "wrap",
  //   marginTop: 8,
  //   marginHorizontal: 20,
  // },

  BoosterPassContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    opacity: 1,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
    elevation: 4,
    height: 370,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: -344,

    marginHorizontal: 12,
    marginVertical: 8,
    justifyContent: "center",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  BoosterPassContainerModal: {
    backgroundColor: "white",
    borderRadius: 20,
    opacity: 1,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
    elevation: 4,
    height: 370,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 12,
    marginVertical: 8,
    justifyContent: "center",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  BoosterPassContainerModalUnselected: {
    backgroundColor: "white",
    borderRadius: 20,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // opacity: 0.4,
    elevation: 4,
    height: 370,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 12,
    marginVertical: 8,
    justifyContent: "center",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "gray",
  },
  backgroundimage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  // backgroundimageredeemed: {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 50,
  // },
  BoosterPassHeader: {
    flexDirection: "column",
    padding: 0,

    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
  },
  BoosterPassHeaderRedeemed: {
    flexDirection: "column",
    padding: 0,
    opacity: 0.3,

    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
  },
  BoosterPassHeaderText1: {
    fontSize: 27,
    fontWeight: "500",
    textAlign: "center",
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  BoosterPassHeaderText1Redeemed: {
    fontSize: 27,
    fontWeight: "500",
    textAlign: "center",
    opacity: 1.3,
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  BoosterPassHeaderText2: {
    fontSize: 18,
    fontWeight: "700",
    alignSelf: "center",
  },
  // CouponItemContainer: {
  //   // flex: 1,
  //   flexDirection: "row",

  //   borderTopColor: "black",
  //   borderTopWidth: 1,
  //   // flexDirection: 'column',
  //   // alignContent: 'center',
  //   // backgroundColor: "red",
  //   flex: 1,
  //   // flexDirection: 'row',
  //   // justifyContent: 'center',
  //   justifyContent: "space-between",
  // },
  // CouponItemContainerDescription: {
  //   flex: 4,
  //   margin: 15,
  //   // backgroundColor: "blue",
  // },
  // CouponItemContainerExpiration: {
  //   flex: 1,
  //   backgroundColor: "blue",
  //   margin: 5,
  //   justifyContent: "center",
  // },
  BoosterPassSLContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 0,
    alignContent: "center",
  },
  BoosterPassSLContainerRedeemed: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 0,
    alignContent: "center",
    opacity: 0.3,
  },
  BoosterPassTextIconsContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    marginLeft: 10,
    justifyContent: "center",
  },
  BoosterPassIconsContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 0,
  },
  BoosterPassLogosContainerText: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
    color: "green",
  },
  BoosterPassLogo: {
    width: 80,
    height: 70,
  },
  BoosterPassSLContainerIcons: {
    marginHorizontal: 10,
    marginTop: 5,
    width: 30,
    height: 30,
  },
  BoosterPassFooterContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 125,
    padding: 0,
  },
  BoosterPassFooterContainerRedeemed: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 125,
    padding: 0,
    opacity: 0.3,
  },
  BoosterPassFooterText: {
    fontSize: 20,
    fontWeight: "600",
  },
  BoosterPassFooterImage: {
    marginHorizontal: 10,
    marginTop: 5,
    width: 180,
    height: 90,
  },
  redeemText: {
    color: "#fff",
    fontWeight: "800",
    alignSelf: "center",
  },
  redeemContainer: {
    backgroundColor: "#2E5DB5",
    borderRadius: 50,
    width: 100,
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
  PurchaseContainer: {
    flexDirection: "column",
    alignItems: "center",
    // marginTop: 125,
    padding: 0,
  },
  PurchaseButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    width: 190,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#F2A842",
  },
  PurchaseText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Admission;
