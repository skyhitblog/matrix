import Expo from 'expo'
import React, {Component} from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'

import Home from './app/screens/home'
import Firebase from './app/auth/firebase'

class App extends Component {
  render() {
    return (
      <Home/>
    )
  }
}

Expo.registerRootComponent(App)
