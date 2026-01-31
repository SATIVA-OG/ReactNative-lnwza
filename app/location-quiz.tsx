import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function LocationQuiz() {
  const [myLocation, setMyLocation] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  // โหลดตำแหน่งของเรา
  const loadMyLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;

    let loc = await Location.getCurrentPositionAsync({});
    setMyLocation(loc);
  };

  // โหลดตำแหน่งคนจาก API
  const loadUsersLocation = async () => {
    try {
      let res = await fetch("https://ckartisan.com/api/location");
      let data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadMyLocation();
    loadUsersLocation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ width, height }}
        showsUserLocation={true}
        initialRegion={{
          latitude: myLocation ? myLocation.coords.latitude : 14.073,
          longitude: myLocation ? myLocation.coords.longitude : 100.601,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* หมุดตำแหน่งคนอื่น */}
        {users.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: Number(item.latitude),
              longitude: Number(item.longitude),
            }}
            title={item.user_id}
          >
            <FontAwesome name="user" size={22} color="orange" />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
