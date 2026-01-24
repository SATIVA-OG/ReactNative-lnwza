import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import TodoItem from "../components/week9/TodoItem";

export default function TodoScreen({ navigation }) {
  const [todos, setTodos] = useState([
    { _id: "1", completed: false, title: "exercise @ 7.00" },
    { _id: "2", completed: false, title: "meeting @ 9.00" },
    { _id: "3", completed: false, title: "go to cinema @ 19.00" },
  ]);

  const onCreate = () => {
    let new_data = {
      _id: "_" + Math.random().toString(36).substr(2, 9),
      title: "",
      completed: false,
    };

    let t = [...todos, new_data];

    setTodos(t);
  };
  const onUpdate = (new_title, _id) => {
    let t = [...todos];

    let index = t.findIndex((item) => item._id == _id);

    console.log("t:", t[index], _id);
    t[index].title = new_title;

    setTodos(t);
  };
  const onCheck = (_id) => {
    let t = [...todos];
    let index = t.findIndex((item) => item._id == _id);

    t[index].completed = !t[index].completed;
    setTodos(t);
  };
  const onDelete = (_id) => {
    let t = [...todos];
    let index = t.findIndex((item) => item._id == _id);
    let [removed_t] = t.splice(index, 1);
    console.log(removed_t);
    setTodos(t);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onUpdate={onUpdate}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        )}
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