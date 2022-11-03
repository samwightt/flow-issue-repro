//@flow strict

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import type { Node } from "react";

export default function App(): Node {
  return (
    <View
      style={{
        backgroundColor: "blue",
      }}
    >
      <Text style={{ color: "blue" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
