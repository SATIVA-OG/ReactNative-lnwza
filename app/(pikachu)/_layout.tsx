import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="charmander"
        options={{
          title: "Charmander",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="fire" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="pikachu"
        options={{
          title: "Pikachu",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bolt" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="ivysaur"
        options={{
          title: "Ivysaur",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
