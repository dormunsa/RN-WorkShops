"use strict";
import React, { Component } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

export class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      backgroundColor: require("../../../assets/image5.jpg"),
      SwipeUpImage: require("../../../assets/image1.jpg"),
      SwipeDownImage: require("../../../assets/image2.jpg"),
      SwipeRightImage: require("../../../assets/image3.jpg"),
      SwipeLeftImage: require("../../../assets/image4.png")
    };
  }
  static navigationOptions = () => ({
    title: "Swipe",
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

  onSwipe(gestureName) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: this.state.SwipeUpImage });
        break;
      case SWIPE_DOWN:
        this.setState({ backgroundColor: this.state.SwipeDownImage });
        break;
      case SWIPE_LEFT:
        this.setState({ backgroundColor: this.state.SwipeLeftImage });
        break;
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: this.state.SwipeRightImage });
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        config={config}
        style={{
          flex: 1
        }}
      >
        <ImageBackground
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center"
          }}
          source={this.state.backgroundColor}
        >
          <Text style={styles.text}> Swipe Me to Every Direction</Text>
        </ImageBackground>
      </GestureRecognizer>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    color: "red",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
export default Swipe;
