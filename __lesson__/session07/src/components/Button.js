import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import myStyles from './Button.styles.js';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[
        myStyles.buttonContainer,
        {
          backgroundColor: props.color === undefined ? '#a5d6a7' : props.color,
        },
      ]}
      onPress={props.sayingHello}>
      <Text style={myStyles.textStyle}>{props.banner}</Text>
    </TouchableOpacity>
  );
};

export default Button;
