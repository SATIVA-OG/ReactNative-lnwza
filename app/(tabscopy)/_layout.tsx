import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "tomato" }}>
      
      {/* HERO */}
      <Tabs.Screen
        name="hero"
        options={{
          title: "Hero",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="ant"
        options={{
          title: "Ant",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bug" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="bird"
        options={{
          title: "Bird",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="twitter" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="cat"
        options={{
          title: "Cat",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="paw" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
