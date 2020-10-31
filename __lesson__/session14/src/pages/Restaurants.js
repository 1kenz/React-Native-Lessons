import axios from "axios";
import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

const Restaurants = (props) => {
  const fetchData = () => {
    axios
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
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchData(), []);

  return (
    <SafeAreaView>
      <View>
        <Text>Restaurants</Text>
      </View>
    </SafeAreaView>
  );
};

export { Restaurants };
