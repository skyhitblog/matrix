import React, {Component} from 'react'
import {View} from 'react-native'
import * as firebase from 'firebase'

import Card from '../components/card'

export default class Home extends Component {

  state = {
    productIndex: 0,
    products: [],
  }

  componentWillMount() {
    firebase.database().ref().child('products').once('value', (snap) => {
      let products = []
      snap.forEach((product) => {
        const {id, name, desc, price} = product.val()
        products.push({id, name, desc, price})
      })
      this.setState({products})
    })
  }

  nextCard = () => {
    this.setState({productIndex: this.state.productIndex + 1})
  }

  render() {
    const {productIndex} = this.state
    return (
      <View style={{flex:1}}>
        {this.state.products.reverse().map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              onSwipeOff={this.nextCard}
            />
          )
        })}
      </View>
    )
  }
}
