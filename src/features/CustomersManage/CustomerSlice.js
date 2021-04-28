import { createSlice,createAction } from '@reduxjs/toolkit';

// const initialStudents = [
//   {
//     id: 1,
//     name: 'Hoang Long Nhat',
//     email: 'nhat@gmail.com',
//     phonenumber: 84369621657 ,
//     password: '123456789'
//   },
//   {
//     id: 2,
//     name: 'Hoang Long Nhat',
//     email: 'nhat@gmail.com',
//     phonenumber: 84369621657 ,
//     password: '123456789'
//   },
//   {
//     id: 4,
//     name: 'Hoang Long Nhat',
//     email: 'nhat@gmail.com',
//     phonenumber: 84369621657 ,
//     password: '123456789'
//   },
  
// ];

export const setCustomerError = createAction("setCustomerError");
export const newCustomerError = createAction("newCustomerError");
export const editCustomerError = createAction("editCustomerError");
export const deleteCustomerError = createAction("deleteCustomerError");

const CustomerSlice = createSlice({
  name: "customers",
  // initialState: initialCustomers,
  initialState: {
    customers: [],
    status: "idle",
  },
  reducers: {
    setCustomers: (state, action) => {
      return { ...state, customers: [...action.payload] };
    },

    newCustomer: (state, action) => {
      state.customers.push(action.payload);
    },

    deleteCustomer: (state, action) => {
      const customers = state.customers.filter((customer) => customer.id !== action.payload.id);
      return { ...state, customers: [...customers] };
    },

    editCustomer: (state, action) => {
      const newCustomer = action.payload;
      const customerIndex = state.customers.findIndex((customer) => customer.id === newCustomer.id);

      if (customerIndex >= 0) {
        state.customers[customerIndex] = newCustomer;
      }
    },
  },
});

const { reducer, actions } = CustomerSlice;
export const { setCustomers, newCustomer, deleteCustomer, editCustomer } = actions;
export default reducer;