import { View, Text } from "react-native";
import React from "react";
import tw from "../lib/tailwind";

const Profile = () => {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <View style={tw``}>
        <View style={tw`absolute absolute  right-9 -top-0.3  bg-red-300 rounded-full w-9 h-9`} />
        <Text style={tw`text-lg text-app-text1 font-f4`}>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;
