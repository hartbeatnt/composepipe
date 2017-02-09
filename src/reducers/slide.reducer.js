import * as actions from '../actions/actiontypes'

const defaultState = {
  tick: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.NEXT_TICK:
      return ({...state, tick: state.tick + 1});
    case actions.PREV_TICK:
      return({...state, tick: state.tick - 1});
    case actions.RESET_TICK:
      return({...state, tick: 0})
    default:
      return state;
  }
}