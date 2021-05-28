import { combineReducers } from "redux";
import toast from "./toast/reducer";
import confirmationDialog from "./confirmationDialog/reducer";

export default combineReducers({
  toast,
  confirmationDialog,
});
