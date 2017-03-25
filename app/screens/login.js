import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { NavigationActions } from 'react-navigation'
import LoginButton from '../components/loginbutton'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
