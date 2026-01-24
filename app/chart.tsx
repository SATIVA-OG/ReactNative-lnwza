import React from "react";
import { Dimensions, ScrollView, Text } from "react-native";
import { BarChart, LineChart, PieChart, ProgressChart } from "react-native-chart-kit";

export default function Chart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Rainy Days"],
  };
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };
  const pieData = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const progressData = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.4, 0.6, 0.8],
  };
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20 }}>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier={true}
        style={{
          marginVertical: 10,
          borderRadius: 15,
        }}
      />
      <Text style={{ fontSize: 20 }}>Pie Chart</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        style={{
          marginVertical: 10,
          borderRadius: 15,
        }}
      />
      <Text style={{ fontSize: 20 }}>Bar Chart</Text>
      <BarChart
        data={barData}
        width={screenWidth - 20}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={chartConfig}
        style={{
          marginVertical: 10,
          borderRadius: 15,
        }}
      />
      <Text style={{ fontSize: 20 }}>Progress Chart</Text>
      <ProgressChart
        data={progressData}
        width={screenWidth - 20}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        style={{
          marginVertical: 10,
          borderRadius: 15,
        }}
      />
    </ScrollView>
  );
}
