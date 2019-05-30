import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from 'expo';

export  class AccelerometerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accelerometerData: {},
    };
  this.round = this.round.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Accelerometer",
    headerTitleStyle: {
      fontSize: 28,
      color: "#fff",
      textAlign:"center", 
      flex:1 
    },
    headerTintColor: "#fff",
    headerStyle: {
      height: 40,
      backgroundColor: "#000"
    },
  });

  state = {
    accelerometerData: {},
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(
      accelerometerData => {
        this.setState({ accelerometerData });
      }
    ); 
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove(); 
    this._subscription = null;
  };

  round (n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }
  

  render() {
    let {
      x,
      y,
      z,
    } = this.state.accelerometerData; 

    return (
      <View style={styles.sensor}>
        <Text style={styles.mainText}>Accelerometer Values:</Text>
        <Text style={styles.values} >
          x: {this.round(x)} y: {this.round(y)} z: {this.round(z)}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainText: {
   textAlign: 'center',
   fontSize: 40
  },
  values: {
  textAlign: 'center',
  fontSize : 30
  },
 
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});

 export default AccelerometerScreen
