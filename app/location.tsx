import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getLocation } from "@/utils/gps";
import MyMapView from "@/components/week10/MyMapView";

export default function Location() {
  const [location, setLocation] = useState<any>(null);

  const onLoad = async () => {
    const loc = await getLocation();
    if (loc) {
      setLocation(loc);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* GPS INFO */}
      <View style={{ padding: 10, backgroundColor: "#50E3C2" }}>
        <Text>
          {location
            ? new Date(location.timestamp).toString()
            : "Loading..."}
        </Text>

        <Text>
          Lat: {location ? location.coords.latitude : "-"}
        </Text>
        <Text>
          Lon: {location ? location.coords.longitude : "-"}
        </Text>

        <Text>
          Speed:{" "}
          {location
            ? (location.coords.speed * 3.6).toFixed(0)
            : "-"}{" "}
          km/h
        </Text>

        <Text>
          Accuracy:{" "}
          {location
            ? location.coords.accuracy.toFixed(0)
            : "-"}{" "}
          m
        </Text>
      </View>

      {/* MAP */}
      <View style={{ flex: 1 }}>
        <MyMapView location={location} setLocation={setLocation} />
      </View>
    </View>
  );
}
