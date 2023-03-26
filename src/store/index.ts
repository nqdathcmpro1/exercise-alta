import { courseSlice } from './../slice/courseSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  courseReducer: courseSlice.reducer
});

const store = configureStore({
  reducer: reducers
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
