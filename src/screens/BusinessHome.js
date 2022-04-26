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

const FilterBusinessModalswithList = () => {
  const [restaurant, setRestaurant] = useState(true);
  const [salon, setSalon] = useState(true);
  const [services, setServices] = useState(true);

  function setRestaurantCategory() {
    setRestaurant(!restaurant);
    setSalon(true);
    setServices(true);
  }
  function setSalonCategory() {
    setSalon(!salon);
    setRestaurant(true);
    setServices(true);
  }
  function setServiceCategory() {
    setServices(!services);
    setSalon(true);
    setRestaurant(true);
  }

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

    useEffect(async () => {
      //query the initial Coupon list and subscribe to data updates

      const subscriptioncoupon = await DataStore.observeQuery(Coupon).subscribe(
        (snapshot) => {
          //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
          //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
          const { items, isSynced } = snapshot;
          setCoupons(items);
        }
      );

      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
      return function cleanup() {
        subscriptioncoupon.unsubscribe();
      };
    }, []);

    useEffect(async () => {
      //query the initial Coupon list and subscribe to data updates

      let queryvalue = !salon
        ? "SALON"
        : !restaurant
        ? "RESTAURANT"
        : "SERVICE";
      let ifFiltered = !salon || !restaurant || !services;

      const subscription = await DataStore.observeQuery(Business, (c) =>
        ifFiltered ? c.category("eq", queryvalue) : c
      ).subscribe((snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
        //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
        const { items, isSynced } = snapshot;
        setBusinesses(items);
        // console.log(items)
      });

      //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
      return function cleanup() {
        subscription.unsubscribe();
      };
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
    const renderCoupon = ({ coupon }) => (
      <View style={{ height: 100 }}>
        <Text style={styles.BusinessHeading}>{coupon.couponType}</Text>
      </View>
    );

    const renderBusiness = ({ item }) => (
      <View style={styles.BusinessContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/Chick-fil-A.png")}
        />
        <Text>
          <Text style={styles.BusinessHeading}>{item.name}</Text>
          {`\n${item.location}`}
        </Text>

        {/* <FlatList
          data={item.coupons}
          // keyExtractor={({ id }) => id}
          renderItem={( {item2} ) =>
            <View>
              <Text>{item2.couponType}</Text>  
            <View/>
          }
        /> */}

        {/* <FlatList
          data={item.coupons}
          keyExtractor={({ id }) => id}
          renderItem={renderCoupon}
        /> */}
        {/* { item} */}
        {/* <ScrollView>
        data={item.coupons}
        keyExtractor={({ id }) => id}
        renderItem={renderCoupons}
        </ScrollView> */}
      </View>
    );

    return (
      <SafeAreaView style={styles.scrollviewcontainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 165 }}>
          {Businesses.map((item) => {
            const data = Coupons.filter((coup) => coup.business.id == item.id);
            return (
              <View key={item.id} style={styles.BusinessContainer}>
                <View style={styles.TopSectionBusinessContainer}>
                  <Image
                    style={styles.BusinessLogo}
                    source={require("../../assets/Chick-fil-A.png")}
                  />
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

  return (
    <View>
      <View style={styles.categoriesContainer}>
        <Pressable
          onPress={setRestaurantCategory}
          style={
            restaurant
              ? styles.categoryContainer
              : styles.categoryContainerPressed
          }
        >
          <Text
            style={
              restaurant ? styles.categoryText : styles.categoryTextPressed
            }
          >
            Restaurants
          </Text>
        </Pressable>
        <Pressable
          onPress={setSalonCategory}
          style={
            salon ? styles.categoryContainer : styles.categoryContainerPressed
          }
        >
          <Text
            style={salon ? styles.categoryText : styles.categoryTextPressed}
          >
            Salon
          </Text>
        </Pressable>
        <Pressable
          onPress={setServiceCategory}
          style={
            services
              ? styles.categoryContainer
              : styles.categoryContainerPressed
          }
        >
          <Text
            style={services ? styles.categoryText : styles.categoryTextPressed}
          >
            Services
          </Text>
        </Pressable>
      </View>
      <ListofBusinesses />
    </View>
  );
};

const BusinessHome = () => {
  return (
    <>
      <Header />
      <FilterBusinessModalswithList />
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
    color: "#2E5DB5", //marginTop: 3,
    marginBottom: 4,
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

export default BusinessHome;
