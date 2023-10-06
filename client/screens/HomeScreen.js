import React, { useEffect } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import Categories from "../components/categories.js";
import { themeColors } from "../theme";
import FeaturedRow from "../components/featuredRow.js";
import { getFeaturedResturants } from "../api.js";
import { useState } from "react";

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([])


  useEffect(() => {
    try {
      getFeaturedResturants().then(data => {
        setFeaturedRestaurants(data)
      })

    } catch (error) {
      console.error(error)
    }
  }, [])


  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Restaurants"
            className="ml-2 flex-1"
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Categories />

        <View className="mt-5 pb-24">
          {featuredRestaurants.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
