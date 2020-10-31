import Axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";

import { RestaurantItem } from "../components";

const Restaurants = (props) => {
  const [list, setList] = useState([]);

   const fetchData = () => {
    Axios
      .post(
        "https://worldwide-restaurants.p.rapidapi.com/search",
        {
          limit: "30",
          language: "en_US",
          location_id: "297704",
          currency: "USD",
        },
        {
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
            "x-rapidapi-key":
              "bf2e35a991mshde8353f3fc95d2ap125b90jsn29120143a9d7",
          },
        },
      )
      .then((response) => setList(response.data.results.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchData(), []);

  const renderList = ({ item }) => <RestaurantItem item={item} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
          Restaurants
        </Text>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={list}
          renderItem={renderList}
          ItemSeparatorComponent={() => (
            <View style={{ borderWidth: 0.5, borderColor: "#bdbdbd" }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export { Restaurants };
