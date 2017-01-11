import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'

import * as reducers from '../reducers'
import LiveRankApp from './LiveRankApp'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View>
          <LiveRankApp/>
        </View>
      </Provider>
    )
  }
}
