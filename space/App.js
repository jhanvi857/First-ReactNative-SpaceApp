import React from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  Earth,
  Venus,
  Uranus,
  Saturn,
  Mercury,
  Jupiter,
  Mars,
  Neptune,
} from './planets';
import { HomeScreen } from './HomeScreen';
import ImageGallery from './imageGallery';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Earth: Earth,
  Venus: Venus,
  Uranus: Uranus,
  Saturn: Saturn,
  Mercury: Mercury,
  Jupiter: Jupiter,
  Mars: Mars,
  Neptune: Neptune,
  Images: ImageGallery,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        {/*<SpaceMissions/>*/}
        <AppContainer />
      </ScrollView>
    );
  }
}
