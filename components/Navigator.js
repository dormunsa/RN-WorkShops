import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeLayout from "../screens/Home/HomeScreen";
import AccelerometerScreen from "../screens/Accelerometer/AccelerometerScreen";
import GeoLocationScreen from "../screens/Geo-Location/GeoLocationScreen";
import GesturesScreen from "../screens/Gestures/GesturesScreen";
import GyroscopeScreen from "../screens/Gyroscope/GyroscopeScreen";
import DragDrop from "../screens/Gestures/darg-drop/drag-drop";
import LongPress from "../screens/Gestures/long-press/long-press";
import Swipe from "../screens/Gestures/swipe/swipe";

const AppNavigator = createStackNavigator({
  HomePage: { screen: HomeLayout },
  Accelerometer: { screen: AccelerometerScreen },
  GeoLocation: { screen: GeoLocationScreen },
  Gestures: { screen: GesturesScreen },
  Gyroscope: { screen: GyroscopeScreen },
  DragDrop: { screen: DragDrop },
  LongPress: { screen: LongPress },
  Swipe: { screen: Swipe }
});

export default createAppContainer(AppNavigator);
