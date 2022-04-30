import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Todo: FC<TodoProps> = ({ todo }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{todo.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

type TodoProps = {
  todo: Todo;
};
