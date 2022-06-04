import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  ScrollView,
  SectionList,
  SafeAreaView,
  Date,
  Item,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Amplify, API, Auth, DataStore, graphqlOperation } from "aws-amplify";
import { createPaymentIntent } from "../graphql/mutations";

import { Product, CartProduct } from "../models";
import CartProductItem from "../components/CartProductItem";

import Icon from "@expo/vector-icons/Ionicons";
import { reloadAsync } from "expo-updates";
import { IconBluetooth } from "@aws-amplify/ui-react";
import { useStripe } from "@stripe/stripe-react-native";

// import Basket from "../components/Basket";

// import Icons from '@fortawesome/free-regular-svg-icons';
// import Icons from 'react-native-vector-icons/FontAwesome5';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const AdmissionShoppingCartScreen = ({ navigation }) => {
  // const { Admission } = route.params;
  // const [clientSecret, setClientSecret] = useState(null); //<String | null> (null);
  // const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  // const { initPaymentSheet, presentPaymentSheet } = useStripe();
  ///////Address Screen
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [city, setCity] = useState("");

  // const navigation = useNavigation();

  // useEffect(() => {
  //   fetchPaymentIntent();
  // }, []);

  // useEffect(() => {
  //   if (clientSecret) {
  //     initializePaymentSheet();
  //   }
  // }, [clientSecret]);

  // const fetchPaymentIntent = async () => {
  //   const response = await API.graphql(
  //     graphqlOperation(createPaymentIntent, { amount })
  //   );
  //   console.log(response.data.createPaymentIntent.clientSecret);
  //   setClientSecret(response.data.createPaymentIntent.clientSecret);
  // };

  // const initializePaymentSheet = async () => {
  //   if (!clientSecret) {
  //     return;
  //   }
  //   const { error } = await initPaymentSheet({
  //     paymentIntentClientSecret: clientSecret,
  //   });
  //   console.log("success");
  //   if (error) {
  //     Alert.alert(error);
  //   }
  // };

  // const openPaymentSheet = async () => {
  //   if (!clientSecret) {
  //     return;
  //   }
  //   const { error } = await presentPaymentSheet({ clientSecret });
  //   if (error) {
  //     Alert.alert(`Error code: ${error.code}`, error.message);
  //   } else {
  //     Alert.alert("Success", "Your order is confirmed!");
  //   }
  // };

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(CartProduct, (cp) =>
      cp.userSub("eq", userData.attributes.sub)
    ).then(setCartProducts);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter((cp) => !cp.product).length === 0) {
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map((cartProduct) =>
          DataStore.query(Product, cartProduct.productID)
        )
      );

      // assign the products to the cart items
      setCartProducts((currentCartProducts) =>
        currentCartProducts.map((cartProduct) => ({
          ...cartProduct,
          product: products.find((p) => p.id === cartProduct.productID),
        }))
      );
    };

    fetchProducts();
  }, [cartProducts]);

  ///THIS WAS THE CODE THAT WAS CAUSING THE ERRORS WHEN MOVING BACK IN A SCREEN
  //the return needed to be correct

  useEffect(() => {
    const subscription = DataStore.observe(CartProduct).subscribe((msg) =>
      fetchCartProducts()
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscriptions = cartProducts.map((cp) =>
      DataStore.observe(CartProduct, cp.id).subscribe((msg) => {
        if (msg.opType === "UPDATE") {
          setCartProducts((curCartProducts) =>
            curCartProducts.map((cp) => {
              if (cp.id !== msg.element.id) {
                console.log("different id");
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            })
          );
        }
      })
    );

    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0
  );
  const totalItems = cartProducts.reduce(
    (summedProducts, product) => summedProducts + product.quantity,
    0
  );

  // if (cartProducts.filter((cp) => !cp.product).length !== 0) {
  //   return <ActivityIndicator />;
  // }
  /////////////////////////////////////////////////////
  //Address Screen Components
  /////////////////////////////////////////////////////

  const saveOrder = async () => {
    // get user details
    const userData = await Auth.currentAuthenticatedUser();
    // create a new order
    const newOrder = await DataStore.save(
      new Order({
        userSub: userData.attributes.sub,
        fullName: fullname,
        phoneNumber: phone,
        city,
        address,
      })
    );
    // fetch all cart items
    const cartItems = await DataStore.query(CartProduct, (cp) =>
      cp.userSub("eq", userData.attributes.sub)
    );

    // attach all cart items to the order
    await Promise.all(
      cartItems.map((cartItem) =>
        DataStore.save(
          new OrderProduct({
            quantity: cartItem.quantity,
            option: cartItem.option,
            productID: cartItem.productID,
            orderID: newOrder.id,
          })
        )
      )
    );

    await Promise.all(cartItems.map((cartItem) => DataStore.delete(cartItem)));

    // redirect home
    navigation.navigate("AdmissionHome");
  };

  const onCheckout = () => {
    if (addressError) {
      Alert.alert("Fix all field errors before submiting");
      return;
    }

    if (!fullname) {
      Alert.alert("Please fill in the fullname field");
      return;
    }

    if (!phone) {
      Alert.alert("Please fill in the phone number field");
      return;
    }

    // handle payments
    openPaymentSheet();
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError("Address is too short");
    }
  };

  // const onCancel = async () => {
  //   // get user details
  //   const userData = await Auth.currentAuthenticatedUser();

  //   const cartItems = await DataStore.query(CartProduct, (cp) =>
  //     cp.userSub("eq", userData.attributes.sub)
  //   );

  //   // delete all cart items
  //   // delete all cart items
  //   await Promise.all(cartItems.map((cartItem) => DataStore.delete(cartItem)));

  //   // redirect home

  //   navigation.navigate("Shopping Cart");
  // };

  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text style={{ fontSize: 30 }}>{JSON.stringify(Admission.Description)}</Text>
    //   <Button onPress={() => navigation.goBack()} title="Dismiss" />
    // </View>
    <View style={styles.ModalContainer}>
      {/* <View style={styles.HeaderContainer}>
        <Icon
          name={"close"}
          size={30}
          color={"black"}
          onPress={() => onCancel()}
        />
      </View> */}
      <View style={{ padding: 10 }}>
        {/* Render Product Componet */}
        <FlatList
          data={cartProducts}
          renderItem={({ item }) => <CartProductItem cartItem={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View>
              <Text style={{ fontSize: 18 }}>
                Subtotal ({totalItems} items):{" "}
                <Text style={{ color: "#e47911", fontWeight: "bold" }}>
                  ${totalPrice.toFixed(2)}
                </Text>
              </Text>
            </View>
          )}
        />
        <View style={styles.DonateContainer}>
          <Pressable
            onPress={() => {
              totalItems > 0 ? navigation.navigate('Check Out', {totalPrice}) : null;
            }}
            style={styles.DonateButton}
          >
            <Text style={styles.DonateText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: "#fff",
    // opacity: .90,
    alignItems: "flex-end",
    paddingRight: 10,
    justifyContent: "flex-end",
    paddingTop: Platform.OS === "ios" ? 8 : 0,
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
  AdmissionContainer: {
    backgroundColor: "#fff",
    // borderRadius: 2,
    // elevation: 4,
    flexDirection: "column",
    // marginHorizontal: 12,
    // marginVertical: 3,
    padding: 8,
    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
  },
  AdmissionImageContainer: {
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
  DescriptionAdmissionContainer: {
    // flex: 1,
    flexDirection: "column",
    // backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center",
    padding: 8,
  },
  AdmissionDescriptionText: {
    fontSize: 16,
    fontWeight: "300",
    margin: 5,
    // alignSelf: "center",
  },
  DonateContainer: {
    flexDirection: "column",
    // backgroundColor: "blue",
    alignItems: "center",
    margin: 10,
  },
  DonateButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    width: 190,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#F19536",
  },
  DonateText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
  SponsorContainer: {
    // flexDirection: "row",
    // alignContent: "space-between",
  },
  SponsorHeaderText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    // alignSelf: "center",
    letterSpacing: 0.25,
  },
  SponsorAdmissionContainer: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  SponsorAdmissionImageContainer: {
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
  SponsorAdmissionTextContainer: {
    flex: 10,
    // backgroundColor: "red",
    margin: 4,
  },
  SponsorAdmissionText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "400",
    margin: 4,
  },
  SponsorAboutContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",
    alignContent: "space-between",
    marginHorizontal: 10,
  },
  SponsorAboutText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "300",
    margin: 4,
  },
  AdmissionFundedText: {
    fontSize: 18,
    fontWeight: "300",
    alignSelf: "center",
  },
  AdmissionHeaderImage: {
    // marginHorizontal: 6,
    // marginVertical: 6,
    borderRadius: 10,
    width: "auto",
    height: 150,
  },
  DonationsContainer: {
    flexDirection: "column",
    // backgroundColor: "blue",
    // alignContent: "space-between",
    marginHorizontal: 10,
  },
  DonorContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",
    // alignContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  DonorIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
    backgroundColor: "#CDFFDD",
    width: 40,
    borderRadius: 110,
  },
  DonorTextContainer: {
    flexDirection: "column",
    marginHorizontal: 10,
    // backgroundColor: "red",
  },
  DonorNameText: {
    fontSize: 16,
    fontWeight: "200",
    alignSelf: "flex-start",
  },
  DonorAmountText: {
    fontSize: 16,
    fontWeight: "300",
    alignSelf: "flex-start",
  },

  separator: {
    borderBottomColor: "gray",
    marginVertical: 8,
    borderBottomWidth: 1,
  },
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
  },
  errorLabel: {
    color: "red",
  },
});

export default AdmissionShoppingCartScreen;
