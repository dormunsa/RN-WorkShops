import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

export class GeoLocationScreen extends Component {
  constructor(props) {
    super(props);
    this.getPostion = this.getPostion.bind(this);
    this.state = {
      location: null
    };
    this.getPostion();
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Geo Location",
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

  getPostion() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          location: position
        });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  render() {
    console.log(this.state);
    if (!this.state.location) {
      return (
        <View>
          <OrientationLoadingOverlay
            visible={true}
            color="white"
            indicatorSize="large"
            messageFontSize={24}
            message="Initializing map"
          />
        </View>
      );
    } else {
      let marker = {
        latlng: {
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude
        },
        title: "MyHouse"
      };
      return (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker coordinate={marker.latlng} title={marker.title} />
        </MapView>
      );
    }
  }
}
export default GeoLocationScreen;
