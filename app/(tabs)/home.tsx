import { Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={{ color: "white" }}> textInComponent </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default home;
