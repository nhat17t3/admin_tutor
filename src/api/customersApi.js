import axiosClient from "./axiosClient";
import {
  setCustomers,
  newCustomer,
  deleteCustomer,
  editCustomer,
  newCustomerError,
  editCustomerError,
  deleteCustomerError,
  setCustomerError,
} from "../features/CustomersManage/CustomerSlice";

export const GetCustomers = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosClient.get("/users");
    dispatch(setCustomers(data));
    return { data };
  } catch {
    dispatch(setCustomerError());
  }
};

export const NewCustomer = async (dispatch, customer) => {
  try {
    // api call
    const { data } = await axiosClient.post("/users", customer);
    dispatch(newCustomer(data));
  } catch {
    dispatch(newCustomerError());
  }
};

export const EditCustomer = async (dispatch, customer) => {
  try {
    // api call
    await axiosClient.put(`/users/${customer.id}`, customer);
    dispatch(editCustomer(customer));
  } catch {
    dispatch(editCustomerError());
  }
};

export const DeleteCustomer = async (dispatch, customer) => {
  try {
    // api call
    await axiosClient.delete(`/users/${customer.id}`);
    // await axiosClient.delete('/customers/${customer.id}', { data: { ...customer } });
    dispatch(deleteCustomer(customer));
  } catch {
    dispatch(deleteCustomerError());
  }
};
