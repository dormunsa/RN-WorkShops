import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
export class HomeLayout extends Component {
  constructor(props) {
    super(props);
    this._keyExtractor = this._keyExtractor.bind(this);
    this.renderGridStlyePic = this.renderGridStlyePic.bind(this);
  }

  static navigationOptions = () => ({
    title: "Home Screen",
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

  _keyExtractor(item) {
    return item;
  }
  renderGridStlyePic(item) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => navigate(item.item)}
        style={styles.button}
      >
        <Text style={styles.countText}> {item.item} </Text>
      </TouchableOpacity>
    );
  }
  render() {
    let imageSource = {
      source: require("../../assets/back.jpg")
    };
    let menu = ["GeoLocation", "Accelerometer", "Gyroscope", "Gestures"];
    return (
      <View>
        <ImageBackground
          source={imageSource.source}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={styles.mainText}> Welcome To Work Shop </Text>
          <View style={styles.countContainer}>
            <FlatList
              data={menu}
              renderItem={this.renderGridStlyePic}
              numColumns={2}
              keyExtractor={this._keyExtractor}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
HomeLayout.propTypes = {
  navigation: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#054E92",
    padding: 10,
    justifyContent: "center",
    width: 160,
    height: 100,
    margin: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    position: "relative",
    top: 300
  },
  countText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  mainText: {
    color: "#ffffff",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 35
  }
});

export default HomeLayout;
