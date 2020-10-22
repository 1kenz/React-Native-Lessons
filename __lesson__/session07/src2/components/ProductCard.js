import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imgURL }} style={styles.image} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text style={styles.stocks}>
          {product.inStock ? null : " Stokta Yok !"}
        </Text>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </View>
  );
};

export { ProductCard };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderColor: "#e0e0e0",
  },
  text: {
    color: "black",
  },
  price: {
    color: "black",
    fontWeight: "bold",
  },
  image: {
    height: Dimensions.get("window").height / 4,
  },
  stocks: {
    color: "red",
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "bold",
    alignSelf: "center",
    padding: 10,
  },
});
