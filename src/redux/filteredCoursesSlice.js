import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredCourses: [],
};

const filteredCoursesSlice = createSlice({
  name: "filteredCourses",
  initialState,
  reducers: {
    updateFilteredCourses(state, action) {
      state.filteredCourses = action.payload;
    },
  },
});

export const { updateFilteredCourses } = filteredCoursesSlice.actions;
export default filteredCoursesSlice.reducer;
