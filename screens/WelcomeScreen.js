import { Alert, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const { token } = useContext(AuthContext);
  const [fetchedMessage, setFetchedMessage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://react-native-expense-tra-1b6e8-default-rtdb.firebaseio.com/message.json?auth=${token}`
      )
      .then((response) => {
        setFetchedMessage(response.data);
      })
      .catch((e) => {
        Alert.alert("An error occurred!", e.response.data.error);
        // console.log("error:",e);
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
