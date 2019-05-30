import React, { Component } from "react";
import { View } from "react-native";
import Draggable from "react-native-draggable";

export class DragDrop extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Drag & Drop",
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

  render() {
    return (
      <View>
         <Draggable reverse={false} renderSize={56} renderColor='black' offsetX={0} offsetY={0} renderText='Drag Me'/> 
      </View>
    );
  }
}

export default DragDrop;
