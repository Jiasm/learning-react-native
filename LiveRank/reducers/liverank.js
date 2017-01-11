import {handleActions} from 'redux-actions'
import * as types from '../actions/actionTypes'

const initState = {}

export default handleActions({
  [types.GET_DATA]: (state, action) => {
    // console.log(state, action)
    return {
      ...state,
      cursor: state.cursor,
      pn: (state.pn || 0) + 1
    }
  },
  [types.CHANGE_LSIT]: (state, action) => {
    return {
      ...state,
      cursor: action.cursor,
      pn: action.pn || 1
    }
  }
}, initState)
