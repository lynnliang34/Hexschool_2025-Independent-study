import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import adminReducer from "./adminSlice";
import toastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
    toast: toastReducer,
  },
});

export default store;
