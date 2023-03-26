import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses } from "../api/courseApi";

export const getCoursesThunk = createAsyncThunk(
  "courseSlice/getCourses",
  async () => {
    const data = await getCourses();
    return data;
  }
);
