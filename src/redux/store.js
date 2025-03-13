import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import adminReducer from "./adminSlice";
import toastReducer from "./toastSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
    toast: toastReducer,
    cart: cartReducer,
  },
});

export default store;
