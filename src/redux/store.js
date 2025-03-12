import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import adminReducer from "./adminSlice";
import toastReducer from "./toastSlice";
// import scheduleReducer from "./scheduleSlice";


const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
    toast: toastReducer,
    // schedule: scheduleReducer,
  },
});

export default store;
