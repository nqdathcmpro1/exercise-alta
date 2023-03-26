import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../interface";
import { RootState } from "../store";
import { getCoursesThunk } from "../thunks/courseThunk";

type Initial = {
  isLoading: boolean;
  courses: Course[];
};

const initialState: Initial = {
  isLoading: false,
  courses: [],
};

export const courseSlice = createSlice({
  name: "courseReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCoursesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCoursesThunk.fulfilled,
        (state, action: PayloadAction<Course[]>) => {
          state.isLoading = false;
          state.courses = action.payload;
        }
      )
      .addCase(getCoursesThunk.rejected, (state) => {
        state.isLoading = false;
      }),
});

export const courseSelector = (state: RootState) => state.courseReducer;
