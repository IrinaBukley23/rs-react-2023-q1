import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducer";
import formReducer from "./formReducer";

export default combineReducers({
  home: homeReducer,
  form: formReducer,
});
