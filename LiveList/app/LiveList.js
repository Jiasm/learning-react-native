import React, {Component} from 'react'
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native'
// import {bindActionCreators} from 'redux'
// import Counter from '../components/counter'
// import * as liverankActions from '../actions/liverankActions'
import List from '../components/List'
import Container from '../components/Container'
// import { connect } from 'react-redux'
// import {bindActionCreators} from 'redux'

export default class CounterApp extends Component {

  constructor () {
    super()
    this.state = {}
  }

  render () {
    // const { state } = this.props
    return (
      <List />
    )
  }
}
