import { combineReducers } from "redux";
import auth from "./auth/reducer";
import profile from "./profile/reducer";
import message from "./message/reducer";
import todos from "./todos/reducer";

export default combineReducers({
  auth,
  profile,
  message,
  todos
});
