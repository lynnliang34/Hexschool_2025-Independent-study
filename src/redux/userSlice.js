import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousPage: "/", // 預設為首頁
  isAuthenticated: false,
  user: null, // 存使用者資訊
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPreviousPage: (state, action) => {
      state.previousPage = action.payload;
    },
    loginUser(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setPreviousPage, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
