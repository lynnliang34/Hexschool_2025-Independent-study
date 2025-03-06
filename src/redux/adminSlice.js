import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  admin: null, // 存管理員資訊
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginAdmin(state, action) {
      state.isAuthenticated = true;
      state.admin = action.payload;
    },
    logoutAdmin(state) {
      state.isAuthenticated = false;
      state.admin = null;
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
