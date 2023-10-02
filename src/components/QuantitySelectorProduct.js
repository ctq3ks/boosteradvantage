import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const QuantitySelectorProduct = ({ quantity, setQuantity }) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.buttonLeft}>
        
          <Text style={styles.butonText}>-</Text>
        
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.buttonRight}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 50,
    width: 130,
  },
  buttonLeft: {
    width: 35,
    height: 35,
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  buttonRight: {
    width: 35,
    height: 35,
    alignItems: "center",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: "center",
    backgroundColor: "#d1d1d1",
  },
  butonText: {
    fontSize: 18,
  },
  quantity: {
    color: "#007eb9",
  },
});

export default QuantitySelectorProduct;
