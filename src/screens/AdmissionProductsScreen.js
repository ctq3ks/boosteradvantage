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
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore, Auth } from "aws-amplify";
import { Product, CartProduct } from "../models";

import QuantitySelector from "../components/QuantitySelectorShopping";
import Button from "../components/Button";
import ProductItem from "../components/ProductItem";
import Icon from "@expo/vector-icons/Ionicons";
// import CartProductItem from "../components/ProductItem";
// import ImageCarousel from '../../components/ImageCarousel';

const AdmissionProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState();
  const [cartProducts, setCartProducts] = useState([]);
  // const [itemsInCart, setItemsInCart] = useState();
  // const [checkingOut, setCheckingOut] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | undefined>(
  //   undefined,
  // );
  // const [quantity, setQuantity] = useState(1);

  // const navigation = useNavigation();
  // const route = useRoute();

  // useEffect(() => {
  //   if (!route.params?.id) {
  //     return;
  //   }
  //   DataStore.query(Product, route.params.id).then(setProduct);
  // }, [route.params?.id]);

  // useEffect(() => {
  //   DataStore.query(Product).then(setProducts);
  // }, []);

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

  // async function fetchItems() {
  // const totalItems = cartProducts.reduce(
  //   (summedProducts, product) => summedProducts + product.quantity,
  //   0
  // );
  //   setItemsInCart(totalItems);
  // }
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <View style={styles.ShoppingCartButton}>
  //         <Icon
  //           justifySelf={"center"}
  //           name={"cart-outline"}
  //           size={30}
  //           color={"#2E5DB5"}
  //           onPress={() => {
  //             navigation.navigate("Shopping Cart");
  //           }}
  //         />
  //         <View style={styles.ShoppingCartNotification}>
  //           <Text style={styles.ShoppingCartNotificationText}>
  //             {totalItems}
  //           </Text>
  //         </View>
  //       </View>
  //     ),
  //   });
  // }, [navigation]);

  async function fetchProducts() {
    const subscription = await DataStore.observeQuery(Product).subscribe(
      (snapshot) => {
        //isSynced can be used to show a loading spinner when the list is being loaded. .filter(c => c.business.name === "restaurant")  const subscription = (DataStore.observeQuery(Coupon, (p) => p.description("eq", "10% of any entree"))).subscribe((snapshot)=> {
        //Business, c => ifFiltered ? c.category("eq", queryvalue) : c
        const { items, isSynced } = snapshot;
        setProducts(items);
        // console.log(items)
      }
    );
    return function cleanup() {
      subscription.unsubscribe();
    };
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   if (product?.options) {
  //     setSelectedOption(product.options[0]);
  //   }
  // }, [product]);

  // const onAddToCart = async () => {
  //   const userData = await Auth.currentAuthenticatedUser();

  //   if (!product || !userData) {
  //     return;
  //   }

  //   const newCartProduct = new CartProduct({
  //     userSub: userData.attributes.sub,
  //     quantity,
  //     option: selectedOption,
  //     productID: product.id,
  //   });

  //   await DataStore.save(newCartProduct);
  //   // navigation.navigate('shoppingCart');
  // };

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
  //   navigation.navigate("AdmissionHome");
  // };

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem productItem={item} />
          // ischeckingOut={checkingOut}
        )}
        showsVerticalScrollIndicator={false}
      />
      {/* <Text>{itemsInCart}</Text> */}
      <TouchableOpacity style={styles.ShoppingCartContainer} onPress={() => {
              navigation.navigate("Shopping Cart");
            }}>
        <View style={styles.ShoppingCartButton}>
          <Icon
            justifySelf={"center"}
            name={"cart-outline"}
            size={40}
            color={"#fff"}
          />
        </View>
        {totalItems > 0 ? <View style={styles.ShoppingCartNotification}>
          <Text style={styles.ShoppingCartNotificationText}>{totalItems}</Text>
        </View> : null }
        
      </TouchableOpacity>
      {/* <View style={styles.ShoppingCartContainer}> ce2ac949-2198-4591-a608-20049b87fc32
        <Pressable
          onPress={() => {
            // onCancel();
            // setCheckingOut(true);
            navigation.navigate("Shopping Cart");
            // Auth.signOut();
          }}
          style={styles.ShoppingCartButton}
        >
          <Icon
              justifySelf={"center"}
              name={"cart-outline"}
              size={30}
              color={"#fff"}
            />
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  ShoppingCartContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",
    position: "absolute",
    right: 15,
    bottom: 10,
    alignItems: "flex-start",
    margin: 10,
    opacity: 0.9,
  },
  ShoppingCartButton: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // paddingVertical: 14,
    // marginTop: -20,
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#2E5DB5", //F19536
  },
  ShoppingCartText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
  },
  ShoppingCartNotification: {
    paddingVertical: 2,
    width: 20,
    borderRadius: 100,
    // elevation: 3,
    // marginTop: -40,
    marginLeft: -20,
    backgroundColor: "red", //F19536
  },
  ShoppingCartNotificationText: {
    fontSize: 13,
    // lineHeight: 21,
    fontWeight: "600",
    color: "black",
    alignSelf: "center",
    color: "white",
    // marginBottom: -25,
  },
});

export default AdmissionProductsScreen;
