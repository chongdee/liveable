import { combineReducers } from 'redux'
import city from './city'
import userinfo from "./userinfo";
import collect from "./collect";

const rootReducers = combineReducers({
  city,
  userinfo,
  collect
});

export default rootReducers