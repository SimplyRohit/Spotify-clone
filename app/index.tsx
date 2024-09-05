import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import LoginScreen from "../components/LoginScreen";

const Gotham = require("../assets/fonts/HomepageBaukasten-Bold.ttf");
const LoginPage = () => {
  const auth = async () => {};
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <LoginScreen auth={auth} />
    </LinearGradient>
  );
};

export default LoginPage;
