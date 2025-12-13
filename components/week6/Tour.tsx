import React from "react";
import { ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

type TourProps = {
  style?: any;
};

export default function Tour(props: TourProps) {
  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>

      <ScrollView horizontal={true} style={{ marginTop: 20 }}>
        <TourItem />
        <TourItem />
        <TourItem />
      </ScrollView>
    </View>
  );
}
