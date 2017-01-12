import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import tabBarConfig from '../configs/liverank-tabbar'

const defaultColor = '#fff'
const hoverColor = '#09abff'
const defaultTypeColor = '#8d8d8d'
const hoverTypeColor = '#09abff'
const styles = StyleSheet.create({
  listWrap: {
  },
  listToggle: {
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: hoverColor,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  listToggleItem: {
    flex: 1,
    height: 34,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: defaultColor,
    justifyContent: 'center'
  },
  listToggleItemHover: {
    backgroundColor: hoverColor
  },
  listToggleItemText: {
    color: hoverColor,
    fontSize: 17
  },
  listToggleItemTextHover: {
    color: defaultColor
  },
  listType: {
    height: 41,
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  listTypeWrap: {
    flexDirection: 'row'
  },
  listTypeItem: {
    flex: 1,
    height: 20,
    marginTop: 10.5,
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listTypeItemList: {
    borderRightWidth: 0
  },
  listTypeCursor: {
    position: 'absolute',
    width: (Dimensions.get('window').width - 20) / 3,
    height: 3,
    backgroundColor: hoverColor,
    left: 0,
    bottom: -1,
    zIndex: 2,
    transform: [{
      translateX: (Dimensions.get('window').width - 20) / 3 * 0
    }]
  },
  listTypeItemText: {
    color: defaultTypeColor,
    fontSize: 14
  }
})

export default class TabBar extends Component {

  constructor (props) {
    super(props)
    props.actions.getData()
  }

  render () {
    return (<View class={styles.listWrap}>
      <View style={styles.listToggle}>
      {tabBarConfig.map((tabbar, index) => (
        <View style={[styles.listToggleItem, styles.listToggleItemHover]} key={index}>
            <Text style={[styles.listToggleItemText, styles.listToggleItemTextHover]}>{tabbar.title}</Text>
        </View>
      ))}
      </View>
      <View>
        {
          tabBarConfig.map((tabbar, k) => (
            <View style={styles.listType} key={k}>
              {
                tabbar.child.map((item, index, arr) => (
                  <View style={[].concat(styles.listTypeItem, index === arr.length - 1 ? styles.listTypeItemList : null)} key={index}>
                    <Text style={styles.listTypeItemText}>
                      {item.title}
                    </Text>
                  </View>
                ))
              }
              <View style={styles.listTypeCursor}></View>
            </View>
          ))
        }
      </View>
    </View>)
  }
}
