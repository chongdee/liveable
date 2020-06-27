import * as cityActions from '../actionTypes/city'

const initialState = {};
export default function city(state = initialState, action) {
  switch (action.type) {
    case cityActions.INIT_CITY:
      return state = action.data;
    case cityActions.UPDATE_CITY:
      return state = action.data;
    default:
      return state;
  }
}