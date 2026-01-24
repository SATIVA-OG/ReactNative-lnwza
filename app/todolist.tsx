import TodoItem from "@/components/week9/TodoItem";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { getData, storeData } from "./utils/storage";

export default function TodoList() {
  const [todos, setTodos] = useState<any>([]);

  const load = async () => {
    let data = await getData("todos");
    setTodos(data || []);
  };

  useEffect(() => {
    load();
  }, []);

  const onCreate = () => {
    let new_data = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: "",
      completed: false,
    };

    let t = [...todos, new_data];

    setTodos(t);
    storeData("todos", t);
  };
  const onUpdate = (new_title: string, id: string) => {
    let t = [...todos];

    let index = t.findIndex((item) => item.id == id);

    console.log("t:", t[index], id);
    t[index].title = new_title;

    setTodos(t);
    storeData("todos", t);
  };
  const onCheck = (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);

    t[index].completed = !t[index].completed;
    setTodos(t);
    storeData("todos", t);
  };
  const onDelete = (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    let [removed_t] = t.splice(index, 1);
    console.log(removed_t);
    setTodos(t);
    storeData("todos", t);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TodoItem
              item={item}
              onUpdate={onUpdate}
              onCheck={onCheck}
              onDelete={onDelete}
            />
          );
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          position: "absolute",
          right: 10,
          bottom: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
        activeOpacity={0.7}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}
