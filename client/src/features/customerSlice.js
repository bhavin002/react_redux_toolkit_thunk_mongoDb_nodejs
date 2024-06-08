import { createSlice } from "@reduxjs/toolkit";
import { addCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer } from "./createAction";

const initialState = {
    customers: [],
    customer: "",
    status: "",
    error: ""
}

const customerSlice = createSlice({
    name: "customer",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getCustomers.pending]: (state) => {
            state.status = 'loading'
        },
        [getCustomers.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.customers = action.payload
        },
        [getCustomers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        [addCustomer.pending]: (state) => {
            state.status = 'loading'
        },
        [addCustomer.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.customer = action.payload
        },
        [addCustomer.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        [getCustomer.pending]: (state) => {
            state.status = 'loading'
        },
        [getCustomer.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.customer = action.payload
        },
        [getCustomer.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        [updateCustomer.pending]: (state) => {
            state.status = 'loading'
        },
        [updateCustomer.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.customer = action.payload
        },
        [updateCustomer.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        },
        [deleteCustomer.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteCustomer.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.customer = action.payload
        },
        [deleteCustomer.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})

export default customerSlice.reducer;
