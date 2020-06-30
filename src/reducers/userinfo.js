import * as userInfoActions from "../actionTypes/userinfo";

const initialState = {};
export default function userinfo(state = initialState, action) {
  switch (action.type) {
    case userInfoActions.LOGIN_USERINFO:
      return (state = action.data);
    case userInfoActions.LOGIN_UPDATE:
      return (state = action.data);
    default:
      return state;
  }
}
