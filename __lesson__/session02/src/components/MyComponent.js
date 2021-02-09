import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamlar!</Text>
      <Text style={styles.text}>Clarusway App'e hoşgeldiniz!</Text>

      <View>
        <Text style={styles.text}>Fullstack Developer olmaya hazır olun!</Text>
      </View>
    </View>
  );
};

export default MyComponent;
