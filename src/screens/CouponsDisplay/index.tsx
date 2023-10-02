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
  TouchableWithoutFeedback,
  ScrollView,
  SectionList,
  SafeAreaView,
} from "react-native";
import { API } from "aws-amplify";
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
import images from "../../components/compLogos.js";
import Icon from "@expo/vector-icons/Ionicons";

import { format } from 'date-fns';
import styles from './styles';
import { ComponentPropsToStylePropsMapKeys } from "@aws-amplify/ui-react";

// Storage.get('chick-fil-a.webp') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

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

//   const ListofBusinesses = () => {
//     const [Businesses, setBusinesses] = useState([]);
//     const [Coupons, setCoupons] = useState([]);
//     // const [BusinessCoupons, setBusinessCoupons] = useState([]);
//     // const querycoup = DataStore.query(Business, (c) => c.id("eq", "b1818402-db95-450e-b1e3-c1d5759db6f2"));
//     // console.log(querycoup.id)

//     // const run = async () => {
//     //   try {
//     //     const results = await DataStore.query(Business); //.filter(c => c.business.id === "b1818402-db95-450e-b1e3-c1d5759db6f2")[0]
//     //     setBusinessesCoupons(results);
//     //     console.log(results)
//     //   } catch (err) {
//     //     //console.error(err);
//     //   }
//     //   return function cleanup() {
//     //     subscription.unsubscribe();
//     //   };
//     // };

//     useEffect(() => {
//       //query the initial Coupon list and subscribe to data updates
//       async function fetchCoupons() {
//         const subscriptioncoupon = await DataStore.observeQuery(
//           Coupon
//         ).subscribe((snapshot) => {
//           //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
//           //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
//           const { items, isSynced } = snapshot;
//           setCoupons(items);
//         });
//         return function cleanup() {
//           subscriptioncoupon.unsubscribe();
//         };
//       }
//       fetchCoupons();
//       //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
//     }, []);

//     useEffect(() => {
//       //query the initial Coupon list and subscribe to data updates

//       let queryvalue = !wellness
//         ? "WELLNESS"
//         : !restaurant
//         ? "RESTAURANT"
//         : "SERVICE";
//       let ifFiltered = !wellness || !restaurant || !services;

//       async function fetchBusinesses() {
//         // await DataStore.clear();
//         // await DataStore.start();
//         const subscription = await DataStore.observeQuery(Business, (c) =>
//           ifFiltered ? c.category("eq", queryvalue) : c
//         ).subscribe((snapshot) => {
//           //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
//           //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
//           const { items, isSynced } = snapshot;
//           setBusinesses(items);
//           // console.log(items)
//         });
//         return function cleanup() {
//           subscription.unsubscribe();
//         };
//       }
//       fetchBusinesses();
//       //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
//       // return function cleanup() {
//       //   subscription.unsubscribe();
//       // };
//     }, []);

//     // const getProfilePicture = () => {
//     //   Storage.get(imagename)
//     //     .then(url => {
//     //       var myRequest = new Request(url);
//     //       fetch(myRequest).then(function(response) {
//     //         if (response.status === 200) {
//     //           setImage(url);
//     //         }
//     //       });
//     //     })
//     //     .catch(err => console.log(err));
//     // };

//     const compLogoUrl = (comp) => {
//       switch (comp) {
//         case "Weird Brothers Coffee":
//           return images.weirdbrotherscoffee;
//           break;

//         case "Reds Table":
//           return images.redstable;
//           break;

//         case "Chick-fil-a":
//           return images.chickfila;
//           break;

//         case "Glory Days":
//           return images.glorydaysgrill;
//           break;

//         case "Pupatella":
//           return images.pupatella;
//           break;

//         case "Capstone Chiropractic LLC":
//           return images.capstonechiropractic;
//           break;

//         case "Hand & Stone":
//           return images.handandstone;
//           break;

//         case "VTFC Physical Therapy":
//           return images.VTFC;
//           break;

//         case "Champscape":
//           return images.champscape;
//           break;

//         case "Webers Pet Supermarket":
//           return images.weberspetsupermarket;
//           break;
//       }
//     };

//     return (  
//       <SafeAreaView style={styles.scrollviewcontainer}>
//         <ScrollView contentContainerStyle={{ paddingBottom: 160 }}>
//           {Businesses.map((business) => {
//             const comp = compLogoUrl(business.name);
//             // console.log(business);
//             // console.log(Coupons);
//             // const coupon_items = business.coupons;
            
//             const coupon_items = Coupons.filter((coup) => (coup.business == null) ? null : coup.business.id == business.id)
    
//             return (
//               <View key={business.id} style={styles.BusinessContainer}>
//                 <View style={styles.TopSectionBusinessContainer}>
//                   <Image style={styles.BusinessLogo} source={comp} />
//                   <View style={styles.TopSectionBusinessContainerText}>
//                     <Text style={styles.BusinessLocationText}>
//                       <Text style={styles.BusinessHeadingText}>
//                         {business.name}
//                       </Text>
//                       {`\n${business.location}`}
//                     </Text>
//                   </View>
//                 </View>

//                 <View>
//                   {coupon_items.map((coupon) => {
//                     return (
//                       <Pressable key={coupon.id} style={styles.CouponItemContainer}>
//                         <View style={styles.CouponItemContainerDescription}>
//                           <Text>{coupon.itemDescription}</Text>
//                         </View>
//                         <View style={styles.CouponItemContainerExpiration}>
//                           <Text>{coupon.expirationDate}</Text>
//                         </View>
//                       </Pressable>
//                     );
//                   })}
//                 </View>
//               </View>
//             );
//           })}
//         </ScrollView>
//       </SafeAreaView>
//     );
//   };

//   return (
//     <View>
//       <View style={styles.categoriesContainer}>
//         <Pressable
//           onPress={setRestaurantCategory}
//           style={
//             restaurant
//               ? styles.categoryContainer
//               : styles.categoryContainerPressed
//           }
//         >
//           <Text
//             style={
//               restaurant ? styles.categoryText : styles.categoryTextPressed
//             }
//           >
//             Restaurants
//           </Text>
//         </Pressable>
//         <Pressable
//           onPress={setWellnessCategory}
//           style={
//             wellness
//               ? styles.categoryContainer
//               : styles.categoryContainerPressed
//           }
//         >
//           <Text
//             style={wellness ? styles.categoryText : styles.categoryTextPressed}
//           >
//             Wellness
//           </Text>
//         </Pressable>
//         <Pressable
//           onPress={setServiceCategory}
//           style={
//             services
//               ? styles.categoryContainer
//               : styles.categoryContainerPressed
//           }
//         >
//           <Text
//             style={services ? styles.categoryText : styles.categoryTextPressed}
//           >
//             Services
//           </Text>
//         </Pressable>
//       </View>
//       <ListofBusinesses />
//     </View>
//   );
// };


function CouponsDisplay({ route, navigation }) {
  const { coupon, business } = route.params;

  const convert_date = (awsdate) => {

  }

  return (
    <>
    <View style={styles.HeaderContainer}>
        <Icon
          name={"close"}
          size={30}
          color={"black"}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ backgroundColor: "white" , height: "100%"}}>
        <View style={styles.CouponContainer}>
          <View style={styles.CouponImageContainer}>
            <Image
              style={styles.CouponHeaderImage}
              source={require("../../../assets/glory_days_couponmeal.jpeg")}
            />
          </View>
          <View style={styles.TopSectionBusinessContainer}>
            <Image style={styles.BusinessLogo} source={require("../../../assets/glorydaysgrill.png")} />
            <View style={styles.TopSectionBusinessTextContainer}>
              <Text style={styles.BusinessLocationText}>
                <Text style={styles.BusinessHeadingText}>
                  {business.name}
                </Text>
                {`\n${business.location}`}
              </Text>
            </View>
          </View>
          <View style={styles.DescriptionCouponContainer}>
            <Text style={styles.CouponDescriptionText}>
              {coupon.itemDescription}
            </Text>
            <Text style={styles.CouponExpirationText}>
              {"Expiration date: "+ format(new Date(coupon.expirationDate), 'MMMM d, yyyy')}
            </Text>
          </View>
          <View style={styles.TermsContainer}>
              <Text style={styles.TermsHeaderText}>{"Terms & Conditions"}</Text>
          <View style={styles.separator} />
          <View style={styles.TermsAndConditionsContainer}>
            <Text style={styles.TermsAndConditionsText}>
              {co}
            </Text>

          </View>
          <View style={styles.separator} />
          </View>
          </View>
      </View>
    
      {/* <FilterBusinessModalswithList /> */}
      {/* <BusinessList /> */}
    </>
  );
};

export default CouponsDisplay;
