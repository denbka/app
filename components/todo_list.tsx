import { FC } from "react";
import { FlatList, View } from "react-native";
import { Todo } from "./todo";

export const TodoList: FC<TodoListProps> = ({ data }) => {
  return (
    <FlatList data={data} renderItem={({ item }) => <Todo todo={item} />} />
  );
};

type TodoListProps = {
  data: Todo[];
};
