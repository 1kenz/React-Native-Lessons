import Axios from "axios";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Main() {
  const fetchData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users");
    .then((response)=> {
        
    })
    .catch
    console.log(myData);
  };

  return (
    <View>
      <Text>Main</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
}
