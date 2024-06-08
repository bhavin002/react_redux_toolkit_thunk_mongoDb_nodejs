import { configureStore } from "@reduxjs/toolkit"
import customerReducer from "./features/customerSlice";

const store = configureStore({
    reducer: {
        customers: customerReducer
    }
})

export default store;