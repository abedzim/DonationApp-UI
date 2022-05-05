import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import Icon from "../components/Icon";
import tw from "../lib/tailwind";

const Header = ({
  navigation,
  icon,
  rightNav,
  title,
  rightText,
  onPressRight,
  onPress,
  onp,
  iconRight,
  rightIcon,
}) => {
  return (
    <View
      style={tw`flex-row items-center justify-between pb-4 px-3`}
    >
      {onp && (
        <TouchableOpacity style={tw``} onPress={onPress}>
          <Icon name={icon} size={25} />
        </TouchableOpacity>
      )}

      {!onPress && (
        <TouchableOpacity style={tw``} onPress={() => navigation.goBack()}>
          <Icon name={icon} size={25} />
        </TouchableOpacity>
      )}

      <Text
        style={tw`justify-start text-center flex-grow text-lg font-f2`}
      >
        {" "}
        {title}
      </Text>

      {rightNav && (
        <TouchableOpacity onPress={onPressRight} style={tw``}>
          {rightText && (
            <Text
              style={tw`self-start justify-start text-left flex-grow text-base text-red-500`}
            >
              {rightText}
            </Text>
          )}
          {rightIcon && (
            <Icon
              name={iconRight}
              style={{
                fill: "#cccccc",
                stroke: "#cccccc",
                strokeWidth: 35,
              }}
              size={27}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
