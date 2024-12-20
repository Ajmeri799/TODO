import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import employeeReducer from "../features/todo/employeeSlice";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    employee: employeeReducer,
  },
});
