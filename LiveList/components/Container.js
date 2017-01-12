import React, {Component} from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default class TabBar extends Component {
  render () {
    return (<View style={styles.container}>{this.props.children}</View>)
  }
}
