import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import Icon from "../components/Icon";
import Colors from "../constants/Colors";
import * as Progress from "react-native-progress";
import images from "../data/images";
import users from "../data/users";

const { width, height } = Dimensions.get("window");

const CampaignDetails = ({ navigation }) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View>
        <ImageBackground
          source={require("../../assets/images/a.png")}
          style={[tw`px-4 pt-12`, { height: height / 3, width: "100%" }]}
          imageStyle={tw`rounded-bl-3xl rounded-br-3xl`}
        >
          <View style={tw`flex-row w-full items-center justify-between `}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                tw`w-10 h-10 bg-white rounded-full items-center justify-center`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 2,
                },
              ]}
            >
              <Icon name="arrowBack" size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw`w-10 h-10 bg-white rounded-full items-center justify-center`,
                {
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                  elevation: 2,
                },
              ]}
            >
              <Icon
                name="menu3"
                size={30}
                style={{
                  stroke: "#2dd4bf",
                  strokeWidth: 35,
                  transform: [{ rotate: "90deg" }],
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={tw`items-center justify-center`}>
        <View style={tw`absolute -top-20`}>
          <View
            style={[
              tw`bg-white rounded-3xl p-4 mx-4`,
              {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 2,
                width: width - 30,
              },
            ]}
          >
            <Text style={tw`text-lg text-app-text1 mb-3 font-f3`}>
              Build New Hospital For Covid-19 Patient in Lorem City
            </Text>
            <Progress.Bar
              progress={0.9}
              color="#2dd4bf"
              unfilledColor="#e5e5e5"
              width={330}
              height={3}
              borderWidth={0}
            />
            <View style={tw`flex-row items-center mt-3 justify-between`}>
              <Text style={tw`text-sm text-app-text2 font-f3`}>
                61,875.00 €{" "}
                <Text style={tw`text-app-text3 font-f1`}>Collected</Text>
              </Text>
              <Text style={tw`text-sm text-app-2 mt-2 font-f3`}>90 %</Text>
            </View>
          </View>
          <View style={tw`flex-row justify-around mt-5`}>
            <View style={tw`items-center`}>
              <Text style={tw`text-base text-app-text1 font-f4`}>Summary</Text>
              <View style={tw`h-1 mt-1 rounded-full w-10 bg-app-2`} />
            </View>
            <View>
              <Text style={tw`text-base text-app-text3 font-f2`}>
                Information
              </Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between mt-4 mx-6 items-center`}>
            {images.map((i, index) => {
              return (
                <View key={index.toString()}>
                  <Image
                    source={{ uri: i.src }}
                    style={tw`w-18 h-18  rounded-lg`}
                  />
                  {index === images.length - 1 && (
                    <TouchableOpacity
                      style={tw`absolute  items-center justify-center rounded-lg  w-18 h-18`}
                    >
                      <View
                        style={tw`absolute  items-center justify-center rounded-lg bg-black opacity-50 w-18 h-18`}
                      >
                        <Text style={tw`text-center text-white font-f5`}>
                          +5 {"\n"}More
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
          <View style={tw`mx-6 mt-4`}>
            <Text style={tw`text-lg text-app-text1 font-f4`}>Description</Text>
            <Text style={tw`text-base text-app-text2 mt-2 font-f1`}>
              The construction of a watertank is an essential part of Hospital
              Project. It will be installed next to the Peace Pond where it will
              purify the water and funnel it to...{" "}
              <Text style={tw`font-f3 text-app-text1`}>Read More</Text>
            </Text>
          </View>
          <View style={tw`flex-row items-center px-4 mt-4`}>
            <View style={tw`flex-row items-center`}>
              {users.map((i, index) => {
                return (
                  <Image
                    source={{ uri: i.src }}
                    style={[
                      tw`w-10 h-10 rounded-full border-2 border-white`,
                      { left: index === 0 ? 0 : -index * 14 },
                    ]}
                    resizeMode="cover"
                  />
                );
              })}
            </View>
            <Text style={tw`text-base text-app-text2 -left-12 font-f3`}>
              1.2k+ Participant
            </Text>
          </View>
          <View style={tw`flex-row items-center justify-between px-4 mt-4`}>
            <Text style={tw`text-xl text-app-text1 font-f4`}>
              Compagny In Charge
            </Text>
            <TouchableOpacity>
              <Text style={tw`text-sm font-f2 text-app-2`}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw`absolute bottom-10 w-full px-4`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Donate")}
          style={tw`btn`}
        >
          <Text style={tw`text-base text-white font-f4`}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CampaignDetails;
