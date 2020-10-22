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
  TextInput,
} from "react-native";

const SearchBar = (props) => {
  const [onSearch, setOnSearch] = useState("");
  const sendValue = () => {
    props.getName(onSearch);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        value={onSearch}
        placeholder="Ürün ara..."
        onChangeText={(val) => {
          setOnSearch(val);
          sendValue();
        }}
      />
    </View>
  );
};

export { SearchBar };

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#eceff1",
    padding: 8,
    margin: 5,
    borderRadius: 10,
  },
});
