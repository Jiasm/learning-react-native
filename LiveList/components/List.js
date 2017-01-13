import React, {Component} from 'react'
import {
  Text,
  View,
  ListView,
  StyleSheet,
  Dimensions
} from 'react-native'
import ListItem from './ListItem'

const styles = StyleSheet.create({
  listView: {
    // backgroundColor: 'red'
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width
  }
})

export default class List extends Component {

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const defaultData = []
    this.state = {
      ds,
      pn: 1,
      type: 'hot',
      data: defaultData,
      dataSource: ds.cloneWithRows(defaultData)
    }
  }

  async onEndReached () {
    let {
      ds, pn, lock, type, data
    } = this.state
    if (lock) return

    let result = await fetch(`http://172.20.29.70:8080/live/onair?type=${type}&page=${pn}`)
    result = await result.json()

    if (pn === 1) {
      result.data = result.data.slice(1)
    }

    data = [].concat(data, result.data)

    // 这里说明已经加载完数据了
    if (!data.length) {
      lock = true
    }

    this.setState({
      pn: pn + 1,
      data,
      lock,
      dataSource: ds.cloneWithRows(data)
    })
  }

  async componentDidMount () {
    await this.onEndReached()
  }

  render () {
    return (
      <ListView
        contentContainerStyle={styles.listView}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData => <ListItem {...rowData} />)}
        onEndReached={this.onEndReached.bind(this)}
        onEndReachedThreshold={100}
      />
    )
  }
}
