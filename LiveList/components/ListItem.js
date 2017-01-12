import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

const styles = StyleSheet.create({
  wrap: {
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    height: Dimensions.get('window').width / 2 + 40,
    alignItems: 'center',
    flexDirection: 'column'
  },
  icon: {
    position: 'relative'
  },
  info: {
    top: 10,
    width: Dimensions.get('window').width / 2 - 10,
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  name: {
    alignItems: 'flex-start'
  },
  backImg: {
    width: Dimensions.get('window').width / 2 - 10,
    height: Dimensions.get('window').width / 2 - 10
  },
  watchWrap: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    left: 5,
    backgroundColor: 'transparent'
  },
  watchText: {
    color: '#fff'
  },
  listToggleItem: {
    flex: 1,
    height: 34,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class ListItem extends Component {

  render () {
    let {props} = this
    return (
      <View style={styles.wrap}>
        <View style={styles.icon}>
          <Image resizeMode="contain" style={styles.backImg} source={{uri: props.anchor.avatar.replace(/^http:\/\/77g4l9\.com5\.z0\.glb\.qiniucdn\.com/, 'https://dn-web-blued-cn.qbox.me')}} />
          <View style={styles.watchWrap}>
            <Text style={styles.watchText}>{props.watch_count}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.name}>
            <Text>{props.anchor.name}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              {props.description || `${props.anchor.name}正在直播哦`}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
