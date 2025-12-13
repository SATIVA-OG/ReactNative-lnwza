import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Tour = { id: string; title: string; uri: string };

export default function TourFlatList(props: { style?: any; flatListProps?: any }) {
    const { style, flatListProps } = props;

    const tours: Tour[] = [
        { id: "1", title: "Tour in London", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { id: "2", title: "Tour in Paris", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { id: "3", title: "Tour in Italy", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg" },
        { id: "4", title: "Tour in Portugal", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg" },
        { id: "5", title: "Tour in Netherlands", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];

    const renderItem = ({ item, index }: { item: Tour; index: number }) => {
        console.log(item, index, item.uri);
        return (
            <View style={{ marginRight: 10 }}>
                <Image source={{ uri: item.uri }} style={styles.image} />
                <View style={styles.titleWrap}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={style}>
            <Text style={{ fontSize: 20 }}>Tour FlatList</Text>
            <Text style={{ color: "grey", marginBottom: 8 }}>Let find out what most interesting things</Text>
            <FlatList
                {...flatListProps}
                horizontal={true}
                data={tours}
                renderItem={({ item, index }) => renderItem({ item, index })}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: { marginRight: 12, width: 200 },
    image: { width: 200, height: 120, borderRadius: 8 },
    titleWrap: { marginTop: 6 },
    title: { fontSize: 14 }
});
