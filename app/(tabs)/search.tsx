import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
const search = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      backgroundColor: "#121314",
      color: "white",
      flex: 1,
      marginHorizontal: 10,
      padding: 8,
      borderRadius: 5,
    },
  });
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FontAwesome name="search" size={16} color="gray" />
          <TextInput
            value=""
            placeholder="What do you want to listen to?"
            style={styles.input}
          />
          <Text>Cancel</Text>
        </View>

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={() => null}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default search;
