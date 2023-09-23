import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { cartTotal, selectCartItems } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation();
  const totalCartItems = useSelector(selectCartItems);
  const Total = useSelector(cartTotal)



  if (totalCartItems.length == 0) {
    return;
  }
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate("Cart")}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <Text className="font-extrabold text-white text-lg">{totalCartItems.length}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${Total}</Text>
      </TouchableOpacity>
    </View>
  );
}
