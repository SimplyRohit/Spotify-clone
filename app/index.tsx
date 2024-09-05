import React, { useEffect } from "react";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { LinearGradient } from "expo-linear-gradient";
import LoginScreen from "../components/LoginScreen";
import { useRouter } from "expo-router";
export default function LoginPage() {
  const router = useRouter();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };
  const redirectUri = "http://localhost:8081";
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "5a7f2f339c2e407a863523eb23172b9f",
      clientSecret: "7dc53bb076bc4229a1a2f0e249ca556d",
      scopes: ["user-read-email", "playlist-modify-public"],
      redirectUri,
    },
    discovery
  );
  const setAuth = async () => {
    try {
      promptAsync({ useProxy: true });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (response?.type === "success") {
      fetchAccessToken(response.params.code, request.codeVerifier);
    }
  }, [response]);

  const fetchAccessToken = async (authcode, codeVerifier) => {
    const body = {
      code: authcode,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
      client_id: "5a7f2f339c2e407a863523eb23172b9f",
      code_verifier: request.codeVerifier,
    };
    let formBody = [];
    Object.keys(body).forEach(function (key) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(body[key]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    });
    formBody = formBody.join("&");
    const defaultConfig = {
      method: "POST",
      body: formBody,
      headers: {
        Authorization: `Basic  ${Buffer.from(
          "5a7f2f339c2e407a863523eb23172b9f:7dc53bb076bc4229a1a2f0e249ca556d",
          "utf-8"
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const tokenObject = await fetch(
      "https://accounts.spotify.com/api/token",
      defaultConfig
    );
    tokenObject
      .json()
      .then(async (result) => {
        const { access_token, refresh_token } = result;
        if (access_token && refresh_token) {
          userData(result);
          router.push("/home");
          console.log(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <LoginScreen auth={setAuth} />
    </LinearGradient>
  );
}
