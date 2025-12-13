import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type EventItem = {
  id: string;
  title: string;
  uri: string;
  month: string;
  date: string;
  datetime?: string;
  place?: string;
};

export default function Event(props: { style?: any; flatListProps?: any }) {
  const { style, flatListProps } = props;
  const [events, setEvents] = useState<EventItem[] | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
    )
      .then((r) => r.json())
      .then((data) => setEvents(data))
      .catch((err) => {
        console.warn("Failed to load events.json", err);
        setEvents([]);
      });
  }, []);

  const renderItem = ({ item }: { item: EventItem }) => (
    <View style={{ marginRight: 12 }}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.cardBottom}>
        <View style={styles.dateBox}>
          <Text style={styles.month}>{item.month}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.eventTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.datetime}>{item.datetime}</Text>
          <Text style={styles.place}>{item.place}</Text>
        </View>
      </View>
    </View>
  );

  if (events === null) {
    return (
      <View style={style}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={style}>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Up Coming Events</Text>
      <Text style={{ color: "grey", marginBottom: 8 }}>
        What's the Worst That Could Happend
      </Text>
      <FlatList
        {...flatListProps}
        horizontal
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBottom: {
    flexDirection: "row",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  dateBox: {
    width: 60,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  month: { fontSize: 12, color: "#ff4d4f", fontWeight: "700" },
  date: { fontSize: 18, fontWeight: "700", color: "#333" },
  infoBox: { flex: 1, padding: 8 },
  eventTitle: { fontSize: 14, color: "#111", marginBottom: 4 },
  datetime: { fontSize: 12, color: "grey" },
  place: { fontSize: 12, color: "grey" },
});
