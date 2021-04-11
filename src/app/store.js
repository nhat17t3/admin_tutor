import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../features/Admin/StudentSlice';
// import userReducer from "./userSlice";

const rootReducer = {
  students: studentReducer
//   user: userReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;