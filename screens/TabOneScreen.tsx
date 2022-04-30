import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { RootTabScreenProps } from "../types";
import { TodoList } from "../components/todo_list";
import { BlurView } from "expo-blur";
import Animated from "react-native-reanimated";
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { FC } from "react";
import { useAnimatedGestureHandler } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
const todos: Todo[] = [
  { name: "Test1", is_complete: false, body: "1Lorem ipsum" },
  { name: "Test2", is_complete: false, body: "2Lorem ipsum" },
  { name: "Test3", is_complete: true, body: "3Lorem ipsum" },
  { name: "Test4", is_complete: false, body: "4Lorem ipsum" },
];

const TabOneScreen: FC<RootTabScreenProps<"TabOne">> = ({
  navigation,
}: RootTabScreenProps<"TabOne">) => {
  const onPanGestureEvent = useAnimatedGestureHandler<
    GestureEvent<PanGestureHandlerEventPayload>
  >({
    onStart: () => {},
    onActive: () => {},
    onEnd: () => {},
  });
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      >
        <Image
          style={{ zIndex: 0 }}
          resizeMode="stretch"
          source={require("../assets/images/bg.png")}
        ></Image>
        <TodoList data={todos} />
        <PanGestureHandler onGestureEvent={onPanGestureEvent}>
          <Animated.View
            style={{
              height: "30%",
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <BlurView
              style={{
                height: "30%",
                width: "100%",
              }}
              intensity={50}
              tint="light"
            />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
