import { combineReducers } from "redux";
import apiReducer from "./api/reducer";
import uiReducer from "./ui/reducer";

export default combineReducers({
  api: apiReducer,
  ui: uiReducer
});
