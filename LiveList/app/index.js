import React, {Component} from 'react'
// import {
//   View
// } from 'react-native'
// import {combineReducers, createStore} from 'redux'
// import { Provider } from 'react-redux'

// import * as reducers from '../reducers'
import LiveList from './LiveList'

// const reducer = combineReducers(reducers)
// const store = createStore(reducer)

export default class App extends Component {
  render () {
    return (<LiveList/>)
  }
}
