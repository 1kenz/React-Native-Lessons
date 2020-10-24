import Axios from "axios";
import React from "react";
import { View, Text, Button } from "react-native";

export default function Main(props) {
  const fetchData_Then = () => {
    let myData = [];

    console.log("starting then/catch fetch..");

    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        myData = response.data; // array veri dönüşü olmadığından boş dönüyor
      })
      .catch((error) => {
        console.log(error); // herhangi bir error dönmesi halinde tetiklenir
      });

    console.log(myData);
    console.log("end then/catch fetch..");
  };

  const fetchData_Await = async () => {
    console.log("starting Await fetch..");

    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response);
    console.log("end Await fetch..");
  };

  return (
    <View>
      <Text>Main</Text>
      <Button title="Fetch Data With Then" onPress={fetchData_Then} />
      <Button title="Fetch Data With Await" onPress={fetchData_Await} />
    </View>
  );
}
