import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./reducerSlice";

const store = configureStore({
    reducer: {
        expense: ExpenseSlice.reducer
    }
});

export default store;