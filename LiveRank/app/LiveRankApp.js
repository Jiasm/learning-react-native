import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
// import {bindActionCreators} from 'redux'
// import Counter from '../components/counter'
import * as liverankActions from '../actions/liverankActions'
import TabBar from '../components/TabBar'
import Container from '../components/Container'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class CounterApp extends Component {

  constructor () {
    super()
    this.state = {}
    console.log('state constructor:', this.state)
  }

  render () {
    const { state, actions } = this.props
    console.log('state render: ', state)
    return (
      <Container>
        <TabBar actions={actions} />
      </Container>
    )
  }
}

export default connect(state => {
  console.log('connect:', state)
  return {
    state: state.liverank
  }
}, (dispatch) => ({
  actions: bindActionCreators(liverankActions, dispatch)
}))(CounterApp)
