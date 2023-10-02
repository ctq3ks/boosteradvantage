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
import {
  createBusiness,
  updateBusiness,
  deleteBusiness,
} from "../../../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import * as queries from "../../../graphql/queries";
import { S3Image } from "aws-amplify-react-native";
import { Business, Coupon } from "../../../models";
import { Storage } from "@aws-amplify/storage";
import images from "../../../components/compLogos.js";

import styles from './styles';

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>Business Profile</Text>
  </View>
);

// const FilterBusinessModalswithList = () => {
//   const [restaurant, setRestaurant] = useState(true);
//   const [wellness, setWellness] = useState(true);
//   const [services, setServices] = useState(true);

//   function setRestaurantCategory() {
//     setRestaurant(!restaurant);
//     setWellness(true);
//     setServices(true);
//   }
//   function setWellnessCategory() {
//     setWellness(!wellness);
//     setRestaurant(true);
//     setServices(true);
//   }
//   function setServiceCategory() {
//     setServices(!services);
//     setWellness(true);
//     setRestaurant(true);
//   }

  const ListofBusinesses = () => {
    const [Businesses, setBusinesses] = useState([]);
    const [Coupons, setCoupons] = useState([]);
    // const [BusinessCoupons, setBusinessCoupons] = useState([]);
    // const querycoup = DataStore.query(Business, (c) => c.id("eq", "b1818402-db95-450e-b1e3-c1d5759db6f2"));
    // console.log(querycoup.id)

    // const run = async () => {
    //   try {
    //     const results = await DataStore.query(Business); //.filter(c => c.business.id === "b1818402-db95-450e-b1e3-c1d5759db6f2")[0]
    //     setBusinessesCoupons(results);
    //     console.log(results)
    //   } catch (err) {
    //     //console.error(err);
    //   }
    //   return function cleanup() {
    //     subscription.unsubscribe();
    //   };
    // };

    useEffect(() => {
      //query the initial Coupon list and subscribe to data updates
      async function fetchCoupons() {
        const subscriptioncoupon = await DataStore.observeQuery(
          Coupon
        ).subscribe((snapshot) => {
          //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
          //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
          const { items, isSynced } = snapshot;
          setCoupons(items);
        });
        return function cleanup() {
          subscriptioncoupon.unsubscribe();
        };
      }
      fetchCoupons();
      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    }, []);

    useEffect(() => {
      async function fetchBusiness() {
        const subscription = await DataStore.observeQuery(Business, (c) =>
          c.name("eq", "Glory Days")
        ).subscribe((snapshot) => {
          //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
          //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
          const { items, isSynced } = snapshot;
          setBusinesses(items);
          // console.log(items)
        });
        return function cleanup() {
          subscription.unsubscribe();
        };
      }
      fetchBusiness();
      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
      // return function cleanup() {
      //   subscription.unsubscribe();
      // };
    }, []);

    // const getProfilePicture = () => {
    //   Storage.get(imagename)
    //     .then(url => {
    //       var myRequest = new Request(url);
    //       fetch(myRequest).then(function(response) {
    //         if (response.status === 200) {
    //           setImage(url);
    //         }
    //       });
    //     })
    //     .catch(err => console.log(err));
    // };

    const compLogoUrl = (comp) => {
      switch (comp) {
        case "Weird Brothers Coffee":
          return images.weirdbrotherscoffee;
          break;

        case "Reds Table":
          return images.redstable;
          break;

        case "Chick-fil-a":
          return images.chickfila;
          break;

        case "Glory Days":
          return images.glorydaysgrill;
          break;

        case "Pupatella":
          return images.pupatella;
          break;

        case "Capstone Chiropractic LLC":
          return images.capstonechiropractic;
          break;

        case "Hand & Stone":
          return images.handandstone;
          break;

        case "VTFC Physical Therapy":
          return images.VTFC;
          break;

        case "Champscape":
          return images.champscape;
          break;

        case "Webers Pet Supermarket":
          return images.weberspetsupermarket;
          break;
      }
    };

    return (
      <SafeAreaView style={styles.scrollviewcontainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
          {Businesses.map((item) => {
            const comp = compLogoUrl(item.name);
            const data = Coupons.filter((coup) => coup.business.id == item.id);
            return (
              <View key={item.id} style={styles.BusinessContainer}>
                <View style={styles.TopSectionBusinessContainer}>
                  <Image style={styles.BusinessLogo} source={comp} />
                  <View style={styles.TopSectionBusinessContainerText}>
                    <Text style={styles.BusinessLocationText}>
                      <Text style={styles.BusinessHeadingText}>
                        {item.name}
                      </Text>
                      {`\n${item.location}`}
                    </Text>
                  </View>
                </View>

                <View>
                  {data.map((item2) => {
                    return (
                      <View key={item2.id} style={styles.CouponsContainer}>
                        <View style={styles.CouponItemContainer}>
                          <View style={styles.CouponItemContainerDescription}>
                            <Text>{item2.itemDescription}</Text>
                          </View>
                          <View style={styles.CouponItemContainerExpiration}>
                            <Text>{"2/3/22"}</Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };

const BusinessHome = () => {
  return (
    <>
      <Header />
      <ListofBusinesses />
      {/* <BusinessList /> */}
    </>
  );
};

export default BusinessHome;
