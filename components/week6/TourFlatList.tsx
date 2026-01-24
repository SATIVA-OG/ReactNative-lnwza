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

    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ marginRight: 12 }}>
                <Image source={{ uri: item.uri }} style={styles.image} />
                <View style={styles.overlay}>
                    <Text numberOfLines={1} style={styles.overlayText}>{item.title}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={style}>
            <Text style={{ fontSize: 20 }}>Tour with FlatList</Text>
            <Text style={{ color: "grey", marginBottom: 8 }}>Let find out what most interesting things</Text>
            <FlatList
                {...flatListProps}
                horizontal
                data={tours}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: { width: 200, height: 120, borderRadius: 12 },
    overlay: {
        marginTop: -30,
        height: 30,
        width: 200,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center'
    },
    overlayText: { color: '#fff', fontSize: 14 }
});
