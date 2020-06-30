import * as userInfoActions from "../actionTypes/userinfo";

export function loginUser(data) {
  return {
    type: userInfoActions.LOGIN_USERINFO,
    data,
  };
}

export function updateUser(data) {
  return {
    type: userInfoActions.LOGIN_UPDATE,
    data,
  };
}
