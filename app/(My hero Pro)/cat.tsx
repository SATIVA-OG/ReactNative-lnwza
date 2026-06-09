import { View, Image, Text } from "react-native";

export default function Cat() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/arc6828/react-native-2025/refs/heads/master/assets/img/cat.png",
        }}
        style={{ width: "100%", height: 500 }}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>paw</Text>
    </View>
  );
}
