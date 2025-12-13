import { StatusBar } from "expo-status-bar";
import React from "react";
import { OpaqueColorValue, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MyIcon(props: {
  name: keyof typeof FontAwesome.glyphMap | undefined;
  size: number | undefined;
  color: string | OpaqueColorValue | undefined;
  title: React.ReactNode;
}) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FontAwesome name={props.name} size={props.size} color={props.color} />
      <Text>{props.title}</Text>
    </View>
  );
}