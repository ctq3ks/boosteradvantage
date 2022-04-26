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
import { Business, Coupon } from "../models";
import { Storage } from "@aws-amplify/storage";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Seahawk Sponsors</Text>
  </View>
);

const FilterBoosterPassModalswithList = () => {
  // const [restaurant, setRestaurant] = useState(true);
  // const [salon, setSalon] = useState(true);
  // const [services, setServices] = useState(true);
  const [isRedeemBoosterVisible, setIsRedeemBoosterVisible] =
    React.useState(false);

  const [isBoosterPassRedeemed, setIsBoosterPassRedeemed] =
    React.useState(styles.BoosterPassContainerModal);

  const handleBoosterModal = () =>
    setIsRedeemBoosterVisible(() => !isRedeemBoosterVisible);

  const BoosterPasses = () => {
    const [BoosterPasses, setBoosterPasses] = useState([]);
    const [Coupons, setCoupons] = useState([]);

    useEffect(async () => {
      //query the initial Coupon list and subscribe to data updates
      const subscriptioncoupon = await DataStore.observeQuery(
        Business
      ).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.BoosterPass.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
        //BoosterPass, c => ifFiltered ? c.category("eq", queryvalue) : c
        const { items, isSynced } = snapshot;
        setBoosterPasses(items);
      });

      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
      return function cleanup() {
        subscriptioncoupon.unsubscribe();
      };
    }, []);

    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isRedeemBoosterVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIsRedeemBoosterVisible(!isRedeemBoosterVisible);
          }}
        >
          <ScrollView
            style={styles.scrollviewcontainer}
            contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
            bounces={true}
          >
            <Ionicons
              name={"close-outline"}
              size={40}
              color={"black"}
              onPress={() => setIsRedeemBoosterVisible(!isRedeemBoosterVisible)}
            ></Ionicons>
            <View style={styles.BoosterPassesContainerModal}>
              {BoosterPasses.map((item) => {
                const data = Coupons.filter(
                  (coup) => coup.BoosterPass.id == item.id
                );
                return (
                  <View key={item.id} style={styles.BoosterPassContainerModalSelected}>
                    <ImageBackground
                      source={require("../../assets/boosterpassbackground1.jpeg")}
                      imageStyle={{ borderRadius: 20, opacity: 0.3 }}
                      resizeMode="cover"
                      style={styles.backgroundimage}
                    >
                      <View style={styles.BoosterPassHeader}>
                        <Text style={styles.BoosterPassHeaderText1}>
                          All Sports - Adult
                        </Text>
                        <Text style={styles.BoosterPassHeaderText2}>
                          Spring Season Pass
                        </Text>
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
                          source={require("../../assets/glorydaysgrill_logo.png")}
                        />
                      </View>
                    </ImageBackground>
                  </View>
                );
              })}
              <View style={styles.redeemContainer}>
                <Text style={styles.redeemText}>Redeem</Text>
              </View>
            </View>

              
            {/* <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                
              </View>
            </View> */}
          </ScrollView>
        </Modal>
        {/* <ScrollView 
        onScroll={event => { scrollY = event.nativeEvent.contentOffset.y; }} 
        scrollEventThrottle={16} 
        contentContainerStyle={{ paddingBottom: 165 }}
        bounces={false}> */}
        <TouchableOpacity
          onPress={() => setIsRedeemBoosterVisible(true)}
          style={styles.BoosterPassesContainer}
        >
          {BoosterPasses.map((item) => {
            const data = Coupons.filter(
              (coup) => coup.BoosterPass.id == item.id
            );
            return (
              <View key={item.id} style={styles.BoosterPassContainer}>
                <ImageBackground
                  source={require("../../assets/boosterpassbackground1.jpeg")}
                  imageStyle={{ borderRadius: 20, opacity: 0.3 }}
                  resizeMode="cover"
                  style={styles.backgroundimage}
                >
                  <View style={styles.BoosterPassHeader}>
                    <Text style={styles.BoosterPassHeaderText1}>
                      All Sports - Adult
                    </Text>
                    <Text style={styles.BoosterPassHeaderText2}>
                      Spring Season Pass
                    </Text>
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
                      source={require("../../assets/glorydaysgrill_logo.png")}
                    />
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <BoosterPasses />
    </View>
  );
};

const Admission = () => {
  return (
    <>
      {/* <Header /> */}
      <FilterBoosterPassModalswithList />
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
    fontSize: 27,
    fontWeight: "700",
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
    backgroundColor: "white",
  },
  BoosterPassesContainer: {
    flex: 1,
    flexDirection: "column",
    // flexWrap: "wrap",
    marginTop: 8,
    marginHorizontal: 20,
    backgroundColor: "black",
  },

  BoosterPassesContainerModal: {
    flex: 1,
    flexDirection: "column",
    // flexWrap: "wrap",
    marginHorizontal: 20,
  },

  BoosterPassContainer: {
    backgroundColor: "white",
    borderRadius: 20,
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
  BoosterPassContainerModalSelected: {
    backgroundColor: "white",
    borderRadius: 20,
    // borderBottomRightRadius: 20,
    // borderBottomLeftRadius: 20,
    opacity: .4,
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
});

export default Admission;
