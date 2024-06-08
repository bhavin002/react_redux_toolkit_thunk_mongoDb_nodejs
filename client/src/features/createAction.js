import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCustomers = createAsyncThunk("getCustomers", async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/customer/getAllCustomer");
        return res.data
    } catch (error) {
        throw error;
    }
})

const addCustomer = createAsyncThunk("addCustomer", async (customer) => {
    try {
        console.log(customer);
        const res = await axios.post("http://localhost:5000/api/customer/addCustomer", customer);
        return res.data;
    } catch (error) {
        throw error
    }
})

const getCustomer = createAsyncThunk("getCustomer", async (id) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/customer/getOneCustomer/${id}`)
        return res.data;
    } catch (error) {
        throw error;
    }
})

const updateCustomer = createAsyncThunk("updateCustomer", async ({ id, customer }) => {
    try {
        const res = await axios.post(`http://localhost:5000/api/customer/updateCustomer/${id}`, customer)
        return res.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const deleteCustomer = createAsyncThunk("deleteCustomer", async (id) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/customer/deleteCustomer/${id}`)
        return res.data;
    } catch (error) {
        throw error;
    }
})

export { getCustomers, addCustomer, getCustomer, updateCustomer,deleteCustomer }