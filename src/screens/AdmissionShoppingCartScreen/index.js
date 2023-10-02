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
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Progress from "react-native-progress";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Amplify, API, Auth, DataStore, graphqlOperation } from "aws-amplify";
import { createPaymentIntent } from "../../graphql/mutations";

import { Product, CartProduct, Order, OrderProduct} from "../../models";
import CartProductItem from "../../components/CartProductItem";

import Icon from "@expo/vector-icons/Ionicons";
import { reloadAsync } from "expo-updates";
import { IconBluetooth } from "@aws-amplify/ui-react";
import { useStripe } from "@stripe/stripe-react-native";

import styles from './styles';

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
    <View>
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

export default AdmissionShoppingCartScreen;
