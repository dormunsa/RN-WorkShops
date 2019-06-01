import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,TouchableOpacity,FlatList
} from "react-native";
import PropTypes from 'prop-types';
export  class GesturesScreen extends Component {
  constructor(props) {
    super(props);
    this._keyExtractor = this._keyExtractor.bind(this);
    this.renderGridStlyePic = this.renderGridStlyePic.bind(this);
  }

  static navigationOptions = () => ({
    title: "Gestures",
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

  _keyExtractor(item) {
    return item;
  }
renderGridStlyePic(item){
  const { navigate } = this.props.navigation;
  if(item.item == "DragDrop") {
    return (
      <TouchableOpacity
      onPress={() => navigate(item.item)}
      style={styles.button}
    >
      <Text style = {styles.countText}> Drag & Drop </Text>
    </TouchableOpacity>
    );
  } else if (item.item == "LongPress") {
    return (
      <TouchableOpacity
      onPress={() => navigate(item.item)}
      style={styles.button}
    >
      <Text style = {styles.countText}> Long Press </Text>
    </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
      onPress={() => navigate(item.item)}
      style={styles.button}
    >
      <Text style = {styles.countText}> Swipe </Text>
    </TouchableOpacity>
    );
  }
  
}
render() {
  let imageSource = {
    "source" : require("../../assets/gestures.jpg")
  }
  let menu = ["DragDrop","LongPress","Swipe"]
    return (
      <View>
        <ImageBackground source={imageSource.source} style={{width: '100%', height: '100%'}}>
        <Text style = {styles.mainText}> Gestures </Text>
        <View style = {styles.countContainer}>
        <FlatList
              data={menu}
              renderItem={this.renderGridStlyePic}
              numColumns={1}
              keyExtractor={this._keyExtractor}
        />
        </View>
        </ImageBackground>
      </View>
     
    )
  }
}
GesturesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#054E92',
    padding: 10,
    justifyContent: 'center',
    width: 160,
    height:100,
    margin: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    position: 'relative',
    top : 250
  },
  countText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  mainText: {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 35,
    textAlign: 'center'
  }
});

 
export default GesturesScreen
