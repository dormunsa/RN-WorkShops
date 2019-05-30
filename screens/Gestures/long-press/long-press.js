import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

export default class Touchables extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Long Press",
    headerTitleStyle: {
      fontSize: 28,
      color: "#fff",
      textAlign: "center",
      flex: 1
    },
    headerTintColor: "#fff",
    headerStyle: {
      height: 40,
      backgroundColor: "#000"
    }
  });

  _onLongPressButton() {
    Alert.alert("You long-pressed the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onLongPress={this._onLongPressButton}
          underlayColor="#003366"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press Me Long Press </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
    backgroundColor: "#003366",
    height: "100%"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
    marginTop: 250
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
