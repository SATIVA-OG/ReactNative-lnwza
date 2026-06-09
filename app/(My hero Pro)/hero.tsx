import { View, Image, Text } from "react-native";

export default function Hero() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/3a/4f/63/3a4f63f1a59bb1c33d6b3c0d1a6c1b1f.jpg",
        }}
        style={{ width: "100%", height: 500 }}
      />
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Hero
      </Text>
    </View>
  );
}
