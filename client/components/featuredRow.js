import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
// import { ArrowRightIcon } from 'react-native-heroicons/outline'
// import { getFeaturedrestaurantById } from '../api'
// import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import RestaurantCard from "./restaurantCard";

export default function FeatureRow({ id, title, description, restaurants }) {
  // const [restaurant, setrestaurants] = useState([]);

  useEffect(() => {
    // getFeaturedrestaurantById(id).then(data=>{
    //   // console.log('got data: ',data);
    //   setrestaurants(data?.restaurant);
    // })
  }, [id]);
  // console.log(restaurant);

  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard
              //   key={restaurant._id}
              //   id={restaurant._id}
              //   imgUrl={restaurant.image}
              //   title={restaurant.name}
              //   rating={restaurant.rating}
              //   type={restaurant.type?.name}
              //   address="123 main street"
              //   description={restaurant.description}
              //   dishes={restaurant.dishes}
              //   lng={restaurant.lng}
              //   lat={restaurant.lat}
              key={index}
              item={restaurant}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
