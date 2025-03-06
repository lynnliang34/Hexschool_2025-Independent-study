import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
  },
});

export default store;
