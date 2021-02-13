import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import styles from './InputPanel.styles.js';

const InputPanel = (props) => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setInputText(value)}
          placeholder="Arama.."
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => props.sendText(inputText)}>
        <Text style={{ textAlign: 'center' }}>Seç</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InputPanel;
