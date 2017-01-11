const child = [{
  type: 'day',
  title: '日榜'
}, {
  type: 'week',
  title: '周榜'
}, {
  type: 'total',
  title: '总榜'
}]

module.exports = [
  {
    type: 'richanchor',
    title: '主播财富榜',
    child
  }, {
    type: 'richfans',
    title: '用户土豪榜',
    child
  }
]
