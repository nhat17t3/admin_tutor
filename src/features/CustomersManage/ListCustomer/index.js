import React from "react";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { GetCustomers, DeleteCustomer } from "../../../api/customersApi";
import CustomerItem from "./ItemCustomer";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Pagination from "../../../components/Pagination";

ListCustomer.propTypes = {};

function ListCustomer(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  // const [subject, setSubject] = useState("All");
  // const [grade, setGrade] = useState("All");
  // const [address, setAddress] = useState("All");
  const [listcustomer, setListcustomer] = useState([]);

  // // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [customersPerPage] = useState(10);

  useEffect(() => {
    GetCustomers(dispatch);
  }, []);

  const customers = useSelector((state) => state.customers.customers);

  useEffect(() => {
    setListcustomer(customers);
  }, [customers]);

  

  //  // Get current tutors
  //  const indexOfLastCustomer = currentPage * customersPerPage;
  //  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  //  const currentTutors = listcustomer.slice(indexOfFirstCustomer, indexOfLastCustomer);
  //  // Change page
  //  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //  const checkfilter = (subject, grade, address, customer) => {
  //   let checka = false;
  //   let checkb = false;
  //   let checkc = false;
  //   if (subject == "All") checka = true;
  //   else checka = customer.subject === subject;
  //   if (grade == "All") checkb = true;
  //   else checkb = customer.grade === grade;
  //   if (address == "All") checkc = true;
  //   else checkc = customer.address.toLowerCase().includes(address.toLowerCase());
  //   return checka && checkb && checkc;
  // };

  // const handlefillter = (e) => {
  //   console.log(subject, grade, address);

  //   const listfillter = customers.filter((tutor) =>
  //     checkfilter(subject, grade, address, tutor)
  //   );
  //   console.log(listfillter);
  //   setListcustomer(listfillter);
  // };

  const handleCustomerEditClick = (customer) => {
    console.log("Edit: ", customer);
    const editCustomerUrl = `/customeredit/${customer.id}`;
    history.push(editCustomerUrl);
  };

  // const handleCustomerViewClick = (customer) => {
  //   console.log("View: ", customer);
  //   const viewCustomerUrl = `/customerview/${customer.id}`;
  //   history.push(viewCustomerUrl);
  // };

  const handleCustomerRemoveClick = async (customer) => {
    console.log("delete: ", customer);
    await DeleteCustomer(dispatch, customer);
  };

  return (
    <>
      <Layout>
        <ToastContainer />
        <h1 className="text-center">List Customer</h1>
        
        <section className="content">
        <Link className="btn btn-success" to="/addcustomer">Add Customer</Link>
          {/* Default box */}
          <table className="table table-striped projects">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>ID</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "20%" }}>Email</th>
                <th style={{ width: "20%" }}>Phonenumber</th>

                <th style={{ width: "20%" }} className="text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {listcustomer.map((customer) => (
                <CustomerItem
                  customer={customer}
                  onRemoveClick={handleCustomerRemoveClick}
                  onEditClick={handleCustomerEditClick}
                  // onViewClick={handleCustomerViewClick}
                />
              ))}
            </tbody>
          </table>

          {/* /.card */}
        </section>
      </Layout>
    </>
  );
}

export default ListCustomer;

// {currentTutors.map((customer) => (
//   <div key={customer.id}>
//     <CustomerItem
//       customer={customer}
//       onRemoveClick={handleCustomerRemoveClick}
//       onEditClick={handleCustomerEditClick}
//       onViewClick={handleCustomerViewClick}
//     />
//   </div>
// ))}
{
  /* <Pagination
customersPerPage={customersPerPage}
totalCustomers={listcustomer.length}
paginate={paginate}
 />  */
}
