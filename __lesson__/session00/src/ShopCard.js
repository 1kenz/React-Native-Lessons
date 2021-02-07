import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import styles from "./styles";


const ShopCard = ({ food }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.images} source={{ uri: food.imageUrl }} />
      <Text style={styles.textTitle}>{food.name}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: 150,
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 12, color: 'white' }}> Add</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {food.price}/{food.amount}
        </Text>
      </View>
    </View>
  );
};

export default ShopCard;
