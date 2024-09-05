import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import whitespotify from "../assets/images/whitespotify.png";
import phone from "../assets/images/phone.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
export default function LoginScreen(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={{ height: 80 }} />
      <Image
        source={whitespotify}
        style={{
          marginTop: 80,
          width: 80,
          height: 80,
        }}
      />

      <Text
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 28,
          lineHeight: 35,
          letterSpacing: -0.03,
          color: "#FFFFFF",
        }}
      >
        Millions of songs
      </Text>
      <Text
        style={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: 28,
          lineHeight: 40,
          letterSpacing: 1,
          color: "#FFFFFF",
        }}
      >
        Free on Spotify.
      </Text>

      <TouchableOpacity
        onPress={props.auth}
        style={{
          marginTop: 20,
          width: 310,
          height: 52,
          backgroundColor: "#4CAF50",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 17,
            lineHeight: 52,
            letterSpacing: -0.03,
            color: "#000000",
          }}
        >
          Sign up free
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 310,
          marginTop: 10,
          flexDirection: "row",
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={phone}
          style={{ width: 28, height: 28, position: "absolute", left: 20 }}
        />
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 52,
            letterSpacing: -0.04,
            color: "#FFFFFF",
          }}
        >
          Continue with phone number
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 310,
          marginTop: 10,
          flexDirection: "row",
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={google}
          style={{ width: 28, height: 28, position: "absolute", left: 20 }}
        />
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 52,
            letterSpacing: -0.04,
            color: "#FFFFFF",
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 310,
          marginTop: 10,
          flexDirection: "row",
          borderColor: "#FFFFFF",
          borderWidth: 1,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={facebook}
          style={{ width: 28, height: 28, position: "absolute", left: 20 }}
        />
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 16,
            lineHeight: 52,
            letterSpacing: -0.04,
            color: "#FFFFFF",
          }}
        >
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/home")}
        style={{
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: 18,
            lineHeight: 52,
            letterSpacing: -0.03,
            color: "#FFFFFF",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
