import * as actions from '../actions/actiontypes'

const defaultState = {
  number: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.NEXT_SLIDE:
      return ({...state, number: state.number + 1});
    case actions.PREV_SLIDE:
      return({...state, number: state.number - 1});
    default:
      return state;
  }
}