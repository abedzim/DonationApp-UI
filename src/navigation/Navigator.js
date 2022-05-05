import "react-native-gesture-handler";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "../components/Icon";
import Home from "../screens/Home";
import NewCampaign from "../screens/NewCampaign";
import Profile from "../screens/Profile";
import tw from "../lib/tailwind";
import CampaignDetails from "../screens/CampaignDetails";
import Donate from "../screens/Donate";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { height: Platform.OS === "ios" ? 80 : 65 },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={tw`absolute top-4 items-center`}>
              <Icon
                name="home"
                size={25}
                style={{
                  fill: focused ? Colors.first : "#e5e7eb",
                }}
              />
              {focused ? (
                <View
                  style={[tw`bg-app-1 rounded-full mt-2 w-1.5 h-1.5`]}
                ></View>
              ) : null}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="NewCampaign"
        component={NewCampaign}
        options={{
          tabBarLabel: "NewCampaign",
          tabBarIcon: ({ color, size, focused }) => (
            <LinearGradient
              colors={[Colors.first, Colors.second]}
              start={{ x: focused ? 0 : 1, y: 0 }}
              end={{ x: focused ? 1 : 0, y: 0 }}
              style={[styles.middleIcon, tw`items-center justify-center`]}
            >
              <Text style={tw`text-2xl text-center text-white font-medium`}>
                +
              </Text>
            </LinearGradient>
          ),
        }}
      />

      <Tab.Screen
        name="Ads"
        component={Profile}
        options={{
          tabBarLabel: "Ads",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={tw`absolute top-4 items-center`}>
              <Icon
                name="user"
                size={25}
                style={{
                  fill: focused ? Colors.first : "#e5e7eb",
                  strokeWidth: 30,
                }}
              />
              {focused ? (
                <View
                  style={[tw`bg-app-1 rounded-full mt-2 w-1.5 h-1.5`]}
                ></View>
              ) : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const MainScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Tab" component={TabNavigator} />
      <MainStack.Screen name="CampaignDetails" component={CampaignDetails} />
      <MainStack.Screen name="Donate" component={Donate} />
    </MainStack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  },
});

export default Navigator;
