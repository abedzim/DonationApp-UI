import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Icon from "../components/Icon";
// import { SafeAreaView } from "react-native-safe-area-context";
import tw from "../lib/tailwind";
import donation from "../data/donation";
import { FlatList } from "react-native-gesture-handler";
import feed from "../data/feed";
import * as Progress from "react-native-progress";
import Colors from "../constants/Colors";

const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const [selected, setSelected] = useState("All");

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("CampaignDetails")}
      style={[
        tw`flex-row mb-3 pr-2 items-center rounded-lg border border-app-text5`,
      ]}
    >
      <Image
        source={item.img}
        style={[tw`h-30 w-30 rounded-tl-lg rounded-bl-lg`]}
        resizeMode="cover"
      />
      <View style={tw`flex-grow flex-1 ml-3`}>
        <Text style={tw`text-base text-app-text1 mb-2 font-medium font-f2`}>
          {item.title}
        </Text>
        <Progress.Bar
          progress={item.percent * 0.01}
          color={Colors.first}
          unfilledColor="#e5e5e5"
          width={215}
          height={3}
          borderWidth={0}
        />
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-sm text-app-text2 mt-2 font-bold font-f3`}>
            {item.received} €{" "}
            <Text style={tw`text-app-text3 font-f1`}>Collecté</Text>
          </Text>
          <Text style={tw`text-sm text-app-text3 mt-2 font-bold font-f2`}>
            {item.percent} %
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row pt-1 pb-3 px-5 justify-between`}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={[tw`h-6 w-14 rounded-tl-lg rounded-bl-lg`]}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <Icon
            name="bell"
            size={20}
            style={{
              fill: "#e5e5e5",
            }}
          />
          <View
            style={tw`bg-white items-center justify-center rounded-full w-3 h-3 absolute -right-1 -top-1`}
          >
            <View style={tw`bg-red-500 rounded-full w-2 h-2`} />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={tw``}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`px-4 mt-2`}>
          <ImageBackground
            source={require("../../assets/images/2.png")}
            style={[tw``, { height: height / 6 + 5 }]}
          >
            <Text style={tw`text-base font-bold text-white top-7 ml-4 font-f4`}>
              Help Poor People {"\n"}During Covid-19
            </Text>
            <TouchableOpacity
              style={tw`flex-row items-center absolute bottom-5 left-4`}
            >
              <Text style={tw`text-white font-bold text-sm mr-2 font-f4`}>
                Faire un don
              </Text>
              <Icon
                name="arrowRight"
                size={16}
                style={{
                  stroke: "#fff",
                  strokeWidth: 45,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View
          style={tw`flex-row mx-5  items-center border mt-3 h-12 rounded-full border-app-text5`}
        >
          <Icon
            name="search"
            size={20}
            style={[
              tw`flex-1 ml-1`,
              {
                stroke: "#e5e5e5",
                strokeWidth: 35,
              },
            ]}
          />
          <TextInput
            placeholder="Search anny donation here"
            style={tw`flex-9 font-f2`}
          />
        </View>
        <View style={tw`flex-row mt-5 px-5 items-center justify-between`}>
          <Text style={tw`text-lg text-app-text1 font-f4`}>Donations</Text>
          <TouchableOpacity>
            <Text style={tw`text-sm font-f2 text-app-2`}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={tw`mt-4 pl-5 `}
          showsHorizontalScrollIndicator={false}
        >
          {donation.map((item, index) => (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => setSelected(item.title)}
              style={tw`${
                selected === item.title ? "bg-app-1" : "border border-app-text5"
              } mr-2 h-9 items-center justify-center rounded-full px-5`}
            >
              <Text
                style={tw`text-sm  ${
                  selected === item.title
                    ? "text-white font-f3"
                    : "text-app-text2 font-f1"
                }`}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <FlatList
          contentContainerStyle={tw`pb-5  px-4 mt-7`}
          data={feed}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
