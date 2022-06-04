import React, { useEffect, useState } from "react";
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
import QuantitySelector from "./QuantitySelectorShopping";
import { useNavigation } from "@react-navigation/native";

import { DataStore, Auth } from "aws-amplify";
import { CartProduct } from "../models";

interface CartProductItemProps {
  cartItem: CartProduct;
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  // console.log(cartItem);
  // const {product, ...cartProduct} = cartItem;

  const updateQuantity = async (newQuantity: number) => {
    if (newQuantity == 0) {
      const original = await DataStore.query(CartProduct, cartItem.id);

      // await DataStore.save(
      //   CartProduct.copyOf(original, updated => {
      //     updated.quantity = newQuantity;
      //   }),
      // );
      await DataStore.delete(original);
    } else {
      const original = await DataStore.query(CartProduct, cartItem.id);

      await DataStore.save(
        CartProduct.copyOf(original, (updated) => {
          updated.quantity = newQuantity;
        })
      );
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {cartItem.product.title}
          </Text>
          <Text style={styles.title}>{cartItem.product.description}</Text>
          <Text style={styles.price}>${cartItem.product.price}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={cartItem.quantity}
          setQuantity={updateQuantity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
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
  quantityContainer: {
    margin: 5,
  },
});

export default CartProductItem;
