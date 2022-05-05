import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import Header from "../components/Header";

const { width, height } = Dimensions.get("window");

const Donate = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header
        icon={"arrowBack2"}
        title={"Donate"}
        navigation={navigation}
        rightNav
        rightIcon
        iconRight={"menu3"}
        onPressRight={() => console.log("test")}
      />
      <View style={tw`px-4 mt-1 `}>
        <View
          style={[
            tw`bg-white rounded-lg p-4 border border-app-text5 `,
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
          <View
            style={tw`flex-row items-center border-b border-app-text5 pb-5`}
          >
            <Image
              style={[tw`h-20 w-20 rounded-lg`]}
              resizeMode="cover"
              source={require("../../assets/images/a.png")}
            />
            <View style={tw`ml-3`}>
              <Text style={tw`text-lg font-f4 text-app-text1 mb-2`}>
                Africa Water Charity
              </Text>
              <Text style={tw`text-sm font-f2 text-app-text2 `}>
                By John Palmer
              </Text>
            </View>
          </View>
          <View style={tw`mt-4`}>
            <View style={tw`flex-row items-center justify-between`}>
              <Text style={tw`text-base text-app-text2 font-f2`}>
                DONATION NOMINAL
              </Text>
              <Text style={tw`text-base text-app-2 font-f4`}>300 €</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-base text-app-text2 font-f2`}>FEE</Text>
              <Text style={tw`text-base text-app-2 font-f4`}>2.4 €</Text>
            </View>
            <View style={tw`mt-4 p-3 bg-app-text5 rounded-lg justify-center`}>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-sm text-app-text1 font-f2`}>
                  TOTAL DONATION
                </Text>
                <Text style={tw`text-sm text-app-text1 font-f5`}>302.4 €</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`mt-4 px-4`}>
        <View style={tw`border-b border-t border-app-text5 py-3`}>
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-lg text-app-text1 font-f4`}>
              Donate as Anonymous
            </Text>
            <TouchableOpacity style={tw`btnRadio`}>
              <View style={tw`btnRadioChecked`} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw`mt-3 px-4`}>
        <Text style={tw`text-lg text-app-text1 font-f4`}>
          Choose Donation Method
        </Text>
      </View>
      <View style={tw`mt-4 px-4`}>
        <View
          style={tw`px-3 py-2 border border-app-1 mb-2 rounded-lg justify-center`}
        >
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity style={tw`btnRadio`}>
                <View style={tw`btnRadioChecked`} />
              </TouchableOpacity>
              <Text style={tw`text-base text-app-text1 font-f2 ml-2`}>
                Apple Pay
              </Text>
            </View>
            <Image
              source={require("../../assets/images/ap.png")}
              style={tw`w-8 h-8`}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* @@@@@@@@@@@@@@ */}
        <View
          style={tw`px-3 py-2  border border-app-text4 mb-2 rounded-lg justify-center`}
        >
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity style={tw`btnRadio2`}></TouchableOpacity>
              <Text style={tw`text-base text-app-text1 font-f2 ml-2`}>
                Bank Transfer
              </Text>
            </View>
            <Image
              source={require("../../assets/images/bank.png")}
              style={tw`w-7 h-8`}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* @@@@@@@@@@@@@@ */}
        <View
          style={tw`px-3 py-2  border border-app-text4 mb-2 rounded-lg justify-center`}
        >
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity style={tw`btnRadio2`}></TouchableOpacity>
              <Text style={tw`text-base text-app-text1 font-f2 ml-2`}>
                Credit Card
              </Text>
            </View>
            <Image
              source={require("../../assets/images/cc.png")}
              style={tw`w-8 h-8`}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* @@@@@@@@@@@@@@ */}
        <View
          style={tw`px-3 py-3  border border-app-text4 mb-2 rounded-lg justify-center`}
        >
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity
                style={tw`bg-app-text3 rounded-full w-5 h-5 items-center `}
              >
                <Text style={tw`text-base font-f3 bottom-0.7 left-0.1`}>+</Text>
              </TouchableOpacity>
              <Text style={tw`text-base text-app-text3 font-f2 ml-2`}>
                Choose Other Donation Method
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`absolute bottom-10 w-full px-4`}>
        <TouchableOpacity style={tw`btn`}>
          <Text style={tw`text-base text-white font-f4`}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Donate;
