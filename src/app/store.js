import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../features/Auth/authenticationSlice";
import postReducer from "../features/PostsManage/PostSlice";
import customerReducer from "../features/CustomersManage/CustomerSlice";
import ToastMiddleware from '../middlewares/ToastMiddleware';

const rootReducer = {
  user: authenticationSlice,
  posts: postReducer,
  customers: customerReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware),
});

export default store;
