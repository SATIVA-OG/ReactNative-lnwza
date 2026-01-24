import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 8 }}
    >
      <View style={styles.container}>
        <Link href="/flexbox/ex01" style={styles.link}>
          <Text style={styles.linkText}>Ex01</Text>
        </Link>
        <Link href="/flexbox/ex02" style={styles.link}>
          <Text style={styles.linkText}>Ex02</Text>
        </Link>
        <Link href="/flexbox/ex03" style={styles.link}>
          <Text style={styles.linkText}>Ex03</Text>
        </Link>
        <Link href="/flexbox/ex04" style={styles.link}>
          <Text style={styles.linkText}>Ex04</Text>
        </Link>
        <Link href="/flexbox/ex05" style={styles.link}>
          <Text style={styles.linkText}>Ex05</Text>
        </Link>
        <Link href="/flexbox/ex06" style={styles.link}>
          <Text style={styles.linkText}>Ex06</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.link}>
          <Text style={styles.linkText}>Ex07</Text>
        </Link>
        <Link href="/flexbox/ex08" style={styles.link}>
          <Text style={styles.linkText}>Ex08</Text>
        </Link>
        <Link href="/flexbox/ex09" style={styles.link}>
          <Text style={styles.linkText}>Ex09</Text>
        </Link>
        <Link href="/flexbox/ex10" style={styles.link}>
          <Text style={styles.linkText}>Ex10</Text>
        </Link>
        <Link href="/flexbox/ex11" style={styles.link}>
          <Text style={styles.linkText}>Ex11</Text>
        </Link>
        <Link href="/flexbox/ex12" style={styles.link}>
          <Text style={styles.linkText}>Ex12</Text>
        </Link>
        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>Go to Resort</Text>
        </Link>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Go to Health</Text>
        </Link>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
        <Link href="/chart" style={styles.link}>
          <Text style={styles.linkText}>chart</Text>
        </Link>
        <Link href="/your-health" style={styles.link}>
          <Text style={styles.linkText}>your-health</Text>
        </Link>
        <Link href="/todolist" style={styles.link}>
          <Text style={styles.linkText}>Todo List</Text>
        </Link>
        <Link href="/location" style={styles.link}>
          <Text style={styles.linkText}>location</Text>
        </Link>
        <Link href="/location-quiz" style={styles.link}>
          <Text style={styles.linkText}>location-quiz</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
//chart
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
