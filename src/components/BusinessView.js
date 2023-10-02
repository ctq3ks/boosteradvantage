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
} from "react-native";
import { API } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { S3Image } from "aws-amplify-react-native";
import { Business, Coupon } from "../models";
import { Storage } from "@aws-amplify/storage";

import { format } from "date-fns";

const BusinessView = (props) => {
  const [logoimage, setLogoImage] = useState("");

  useEffect(() => {
    fetchLogoImage();
  }, []);

  async function fetchLogoImage() {
    //only fetch if the coupon has an image
    // console.log(business.logo)
    if (!!props.business.logo) {
      let imageKey = await Storage.get(props.business.logo);
      // console.log("********Business logo:", imageKey)
      // const signedUrl = await Storage.get(imageKey.key);
      // console.log("signedKeys:", signedUrl);
      setLogoImage(imageKey);
    }
  }
  return (
    <View style={styles.BusinessContainer}>
      <View style={styles.TopSectionBusinessContainer}>
      { logoimage.length > 0 ?
          <View style={styles.BusinessLogoContainer}>
            <Image
              source={{uri: logoimage}}
              style={styles.BusinessLogo}
            />
          </View>
          : null
          }
        <View style={styles.TopSectionBusinessTextContainer}>
              <Text style={styles.BusinessLocationText}>
                <Text style={styles.BusinessHeadingText}>
                  {props.business.name}
                </Text>
                {`\n${props.business.location}`}
                {`\n${props.business.contact}`}
              </Text>
            </View>
      </View>

      <View>
        {props.coupon_items.map((coupon) => {
          return (
            <Pressable
              key={coupon.id}
              onPress={() =>
                props.navigation.navigate("CouponsDisplay", {
                  coupon: coupon,
                  business: props.business,
                })
              }
              style={styles.CouponItemContainer}
            >
              <View style={styles.CouponItemContainerDescription}>
                <Text>{coupon.itemDescription}</Text>
              </View>
              <View style={styles.CouponItemContainerExpiration}>
                <Text>{format(new Date(coupon.expirationDate), "M/d/yy")}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#fff",
        // opacity: .90,
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
      BusinessContainer: {
        backgroundColor: "#fff",
        borderRadius: 2,
        elevation: 4,
        flexDirection: "column",
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 8,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
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
      TopSectionBusinessTextContainer: {
        padding: 12,
        // backgroundColor: "red",
        justifyContent: "center",
        // flexDirection: "space-between",
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
        flex: 8,
        margin: 15,
        // backgroundColor: "red",
      },
      CouponItemContainerExpiration: {
        flex: 3,
        // backgroundColor: "blue",
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
      },
      BusinessHeadingText: {
        fontSize: 23,
        fontWeight: "400",
      },
      BusinessLocationText: {
        fontSize: 14,
        fontWeight: "400",
      },
      BusinessLogoContainer: {
        // flex: 3,
        margin: 5,
        width: 120,
        height: 120,
        // border: 5,
        // borderColor: "black",
        // backgroundColor: "red",
        // shadowOffset: {
        //   height: 1,
        //   width: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1,
      },
      BusinessLogo: {
        // marginHorizontal: 6,
        // marginVertical: 6,
        // borderRadius: 100,
        // width: "auto",
        // height: 100,
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        // backgroundColor: "cover",
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

export default BusinessView;
