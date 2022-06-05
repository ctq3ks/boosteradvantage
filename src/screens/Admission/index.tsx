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
} from "../../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { Business, Coupon, BoosterPass } from "../../models";
import { Storage } from "@aws-amplify/storage";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";


import styles from './styles';

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

  // const handleBoosterModal = () =>
  //   setIsRedeemBoosterVisible(() => !isRedeemBoosterVisible);

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
        source={require("../../../assets/boosterpassbackground1.jpeg")}
        imageStyle={{ borderRadius: 20, opacity: 0.3 }}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <ImageBackground
          source={require("../../../assets/redeemed.png")}
          imageStyle={{ borderRadius: 20, opacity: 0.7 }}
          resizeMode="cover"
          style={styles.backgroundimage}
        >
          <View style={styles.BoosterPassHeaderRedeemed}>
            <Text style={styles.BoosterPassHeaderText1Redeemed}>
              {pass.type}
            </Text>
            {/* <Text style={styles.BoosterPassHeaderText2}>
              Spring Season Pass
            </Text> */}
          </View>
          <View style={styles.BoosterPassSLContainerRedeemed}>
            <Image
              style={styles.BoosterPassLogo}
              source={require("../../../assets/southlakes.png")}
            />
            <View style={styles.BoosterPassTextIconsContainer}>
              <Text style={styles.BoosterPassLogosContainerText}>
                South Lakes Seahawks
              </Text>
              <View style={styles.BoosterPassIconsContainer}>
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../../assets/baseball-ball.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../../assets/field.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../../assets/soccer-ball-variant.png")}
                />
                <Image
                  style={styles.BoosterPassSLContainerIcons}
                  source={require("../../../assets/lacrosse.png")}
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
              source={require("../../../assets/boostersponsor.png")}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
    );
    const RenderUnredeemedPass = (pass) => (
      <ImageBackground
        source={require("../../../assets/boosterpassbackground1.jpeg")}
        imageStyle={{ borderRadius: 20, opacity: 0.3 }}
        resizeMode="cover"
        style={styles.backgroundimage}
      >
        <View style={styles.BoosterPassHeader}>
          <Text style={styles.BoosterPassHeaderText1}>{pass.type}</Text>
          {/* <Text style={styles.BoosterPassHeaderText2}>Spring Season Pass</Text> */}
        </View>
        <View style={styles.BoosterPassSLContainer}>
          <Image
            style={styles.BoosterPassLogo}
            source={require("../../../assets/southlakes.png")}
          />
          <View style={styles.BoosterPassTextIconsContainer}>
            <Text style={styles.BoosterPassLogosContainerText}>
              South Lakes Seahawks
            </Text>
            <View style={styles.BoosterPassIconsContainer}>
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../../assets/baseball-ball.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../../assets/field.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../../assets/soccer-ball-variant.png")}
              />
              <Image
                style={styles.BoosterPassSLContainerIcons}
                source={require("../../../assets/lacrosse.png")}
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
            source={require("../../../assets/boostersponsor.png")}
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
        contentContainerStyle={{ paddingBottom: 50 }}
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
        <Pressable
          style={styles.PurchaseButton}
          onPress={() => nav.navigate("Booster Passes")}
        >
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

export default Admission;
