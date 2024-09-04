import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TabsNavigation = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            paddingTop: 5,
            paddingBottom: 3,
            borderTopWidth: 0,
          },
          tabBarBackground: () => (
            <BlurView intensity={95} style={{ overflow: "hidden" }} />
          ),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "home") {
              return <Entypo name="home" size={size} color={color} />;
            } else if (route.name === "search") {
              return <AntDesign name="search1" size={size} color={color} />;
            } else if (route.name === "library") {
              return <Ionicons name="library" size={size} color={color} />;
            } else if (route.name === "user") {
              return <Entypo name="spotify" size={size} color={color} />;
            }
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
          }}
        />
        <Tabs.Screen
          name="user"
          options={{
            title: "Premium",
          }}
        />
      </Tabs>
    </LinearGradient>
  );
};

export default TabsNavigation;
