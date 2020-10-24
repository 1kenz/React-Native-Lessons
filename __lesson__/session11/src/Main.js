import axios from "axios";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Main(props) {
  const [userData, setUserData] = useState([]);

  const fetchData_Then = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUserData(data);
    });
  };

  const fetchData_Await = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUserData(data);
  };

  return (
    <View>
      <Button title="Fetch Data With Then" onPress={fetchData_Then} />
      <Button title="Fetch Data With Then" onPress={fetchData_Await} />
      <FlatList
        data={userData}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
