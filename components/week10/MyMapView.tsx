import React from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";

export default function MyMapView(props: any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  return (
    <MapView
      style={{ width, height }}
      region={
        props.location
          ? {
              latitude: props.location.coords.latitude,
              longitude: props.location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
          : undefined
      }
      showsUserLocation={true}
      followsUserLocation={true}
      onUserLocationChange={(event) => {
        if (event.nativeEvent.coordinate) {
          const newLocation = {
            coords: event.nativeEvent.coordinate,
            mocked: false,
            timestamp: event.nativeEvent.coordinate.timestamp,
          };
          props.setLocation(newLocation);
        }
      }}
    />
  );
}
