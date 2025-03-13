import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousPage: "/", // 預設為首頁
  isAuthenticated: false,
  user: null, // 存使用者資訊
  selectedCourseId: null //存詳細頁選到的課程ID
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPreviousPage: (state, action) => {
      state.previousPage = action.payload;
    },
    setSelectedCourseId:(state, action) => {
      state.selectedCourseId = action.payload;
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

export const { setPreviousPage, loginUser, logoutUser, setSelectedCourseId } = userSlice.actions;
export default userSlice.reducer;
