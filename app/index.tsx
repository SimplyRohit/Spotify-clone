import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import whitespotify from "@/assets/images/whitespotify.png";
import phone from "@/assets/images/phone.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Image source={whitespotify} style={styles.spotifyLogo} />

      <Text style={styles.millionsOfSongs}>Millions of songs</Text>
      <Text style={styles.freeOnSpotify}>Free on Spotify.</Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign up free</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.phoneNumberButton}>
        <Image source={phone} style={styles.phoneIcon} />
        <Text style={styles.phoneNumberText}>Continue with phone number</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image source={google} style={styles.googleIcon} />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <Image source={facebook} style={styles.facebookIcon} />
        <Text style={styles.facebookText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#121212",
  },

  spotifyLogo: {
    width: 100,
    height: 100,
  },
  millionsOfSongs: {
    fontFamily: "Gotham",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 35,
    letterSpacing: -0.03,
    color: "#FFFFFF",
  },
  freeOnSpotify: {
    fontFamily: "Gotham",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.03,
    color: "#FFFFFF",
  },

  signUpButton: {
    marginTop: 30,
    width: 320,
    height: 52,
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 21,
    lineHeight: 52,
    letterSpacing: -0.03,
    color: "#000000",
  },
  phoneNumberButton: {
    width: 320,
    marginTop: 6,
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  phoneNumberText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 52,
    letterSpacing: -0.04,
    color: "#FFFFFF",
  },
  phoneIcon: { width: 28, height: 28, position: "absolute", left: 20 },
  googleButton: {
    width: 320,
    marginTop: 6,
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  googleText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 52,
    letterSpacing: -0.04,
    color: "#FFFFFF",
  },
  googleIcon: { width: 28, height: 28, position: "absolute", left: 20 },
  facebookButton: {
    width: 320,
    marginTop: 6,
    flexDirection: "row",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 52,
    letterSpacing: -0.04,
    color: "#FFFFFF",
  },
  facebookIcon: { width: 28, height: 28, position: "absolute", left: 20 },
  loginButton: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 21,
    lineHeight: 52,
    letterSpacing: -0.03,
    color: "#FFFFFF",
  },
});

export default LoginPage;
