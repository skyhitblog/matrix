import React, {Component} from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBeZTyOJRiglgmC03e8rG04SsAeWXq42a8",
  databaseURL: "https://matrix-fc03d.firebaseio.com"
}

firebase.initializeApp(firebaseConfig)

export default class Firebase extends Component {
  render() {
    return (
      <View>
      </View>
    )
  }
}
