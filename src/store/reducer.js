import { combineReducers } from "redux";
import AddReducer from "./advertisements/reducer";
import OneAdReducer from "./ad/reducer";

export default combineReducers({
  adds: AddReducer,
  add: OneAdReducer
});
