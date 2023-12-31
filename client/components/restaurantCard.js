import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  function sliceDescription(description, maxLength = 22) {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    } else {
      return description;
    }
  }



  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-zinc-50 rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={{ uri: urlFor(item.image).url() }} />

        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              {/* review: This is the string "review" (singular form). It is used to specify the unit of measurement for the number of reviews. In this context, it suggests that if there's only one review (item.reviews is 1), it should display "1 review," and if there are more than one reviews, it should display "X reviews" (where X is the value of item.reviews). */}
              <Text className="text-gray-700"> ({item.reviews} review)</Text> ·{" "}
              <Text className="font-semibold text-gray-700">
                {item?.type?.name}
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} />
            <Text className="text-gray-700 text-xs">
              {" "}
              Nearby · {sliceDescription(item.address)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
