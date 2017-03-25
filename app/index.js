import React, {Component} from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'
import {StackNavigator} from 'react-navigation'
import Firebase from './auth/firebase'
import Home from './screens/home'
import Login from './screens/login'

const RouteConfigs = {
  Login: {screen:Login},
  Home: {screen:Home},
}

const StackNavigatorConfig = {
  headerMode:'none',
}

class App extends Component {
  render() {
    return (
      <Login/>
    )
  }
}

export default StackNavigator(RouteConfigs, StackNavigatorConfig)
