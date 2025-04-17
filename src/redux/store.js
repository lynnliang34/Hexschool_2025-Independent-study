import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import adminReducer from "./adminSlice";
import toastReducer from "./toastSlice";
import cartReducer from "./cartSlice";
import filteredCoursesReducer from "./filteredCoursesSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
    toast: toastReducer,
    cart: cartReducer,
    filteredCourses: filteredCoursesReducer,
  },
});

export default store;
