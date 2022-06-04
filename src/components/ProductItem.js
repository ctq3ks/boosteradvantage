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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import QuantitySelector from "./QuantitySelectorProduct";
import { DataStore, Auth } from "aws-amplify";

import Icon from "@expo/vector-icons/Ionicons";
import { CartProduct } from "../models";
import { faBlackboard } from "@fortawesome/free-solid-svg-icons";
import { reloadAsync } from "expo-updates";

// interface CartProductItemProps {
//   cartItem: CartProduct;
// }

const ProductItem = (props) => {
  // console.log(props);
  // const {cartProduct} = cartItem;
  const [cartProduct, setCartProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(0);
  // const queryCartProduct = async (cartItemID) => {
  //   const original = await DataStore.query(CartProduct, productItem);

  //   useEffect(() => {
  //   setCartProduct(original);
  // }, []);
  // };

  const onAddToCart = async () => {
    if (quantity > 0) {
      const userData = await Auth.currentAuthenticatedUser();
      const newCartProduct = new CartProduct({
        userSub: userData.attributes.sub,
        quantity,
        productID: props.productItem.id,
        productTitle: props.productItem.title,
      });

      await DataStore.save(newCartProduct);
      setAddedToCart(addedToCart + 1);
      console.log("success");
    }
  };

  // if (props.ischeckingOut == true) {
  //   onAddToCart();
  // }
  // const updateQuantity = async (newQuantity: number) => {
  //   const original = await DataStore.query(CartProduct, cartItemID);

  //   await DataStore.save(
  //     CartProduct.copyOf(original, updated => {
  //       updated.quantity = newQuantity;
  //     }),
  //   );
  // };

  // useEffect(() => {
  //   queryCartProduct();
  // }, []);

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.topleftImageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/StudentBooster.png")}
          />
        </View>
        <View style={styles.toprightTextContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {props.productItem.title}
          </Text>
          <Text style={styles.description} numberOfLines={3}>
            {props.productItem.description}
          </Text>
          <Text style={styles.price}>${props.productItem.price}</Text>
          <View style={styles.quantityContainer}>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            // onCancel();
            onAddToCart();
            // navigation.navigate("Checkout");
            // Auth.signOut();
          }}
          // style={styles.CartButton}
          style={addedToCart ? styles.CartButtonClicked : styles.CartButton}
        >
          <Text
            style={
              addedToCart ? styles.CartButtonClickedText : styles.CartButtonText
            }
          >
            Add to Cart
          </Text>

          {/* {({ pressed }) => (
          <View>
            <Icon
              justifySelf={"center"}
              name={"cart-outline"}
              size={25}
              color={"green"}
            />
            <Text style={styles.DonateText}>
              {pressed ? "Added!" : "Add to Cart"}
            </Text>
          </View>
        )} */}
        </TouchableOpacity>
      </View>
      {/* <View style={styles.DonateContainer}>
        <Pressable onPress={onAddToCart} style={styles.DonateButton}>
          <Text style={styles.DonateText}>Add to Cart</Text>
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
    flexDirection: "column",
    flex: 1,
  },
  topContainer: {
    marginTop: 10,
    marginHorizontal: 10,
    flex: 9,
    flexDirection: "row",
  },
  topleftImageContainer: {
    // padding: 30,
    // backgroundColor: "blue",
    flex: 4,
    justifyContent: "center",
  },
  image: {
    // flex: 2,
    height: 120,
    width: "auto",
    borderRadius: 5,
    // alignContent: "center",
    // margin: 10,
    // resizeMode: "contain",
  },
  toprightTextContainer: {
    // padding: 10,
    // marginVertical: 5,
    marginHorizontal: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 10,
    // backgroundColor: "red",
  },
  title: {
    fontSize: 18,
    // lineHeight: 40,
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityContainer: {
    marginTop: 5,
    alignSelf: "center",
  },
  bottomContainer: {
    // marginTop: 10,
    // marginHorizontal: 10,
    flex: 3,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  CartContainer: {
    flexDirection: "column",
    // backgroundColor: "blue",
    alignItems: "center",
    margin: 10,
    // backgroundColor: "black",
  },
  CartButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: "95%",
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#F2A842",
    margin: 10,
  },
  CartButtonClicked: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderColor: "#F2A842",
    borderWidth: 2,
    width: "90%",
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#fff",
    margin: 10,
  },
  CartButtonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "#fff",
  },
  CartButtonClickedText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "#F2A842",
  },
  
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default ProductItem;
