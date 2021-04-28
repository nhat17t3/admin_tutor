import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import { EditCustomer, GetCustomers } from "../../../api/customersApi";
import { useHistory, useParams } from "react-router-dom";

EditCustomer1.propTypes = {};

function EditCustomer1(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { customerId } = useParams();

  useEffect(() => {
    GetCustomers(dispatch);
  }, []);

  const editedCustomer = useSelector((state) => {
    const foundCustomer = state.customers.customers.find(
      (x) => x.id === +customerId
    );
    return foundCustomer;
  });

  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const v = useSelector((state) => state.customers.customers);
  //   if (v.length == 0) return null;

  useEffect(() => {
    if(editedCustomer){
      setName(editedCustomer.name);
      setEmail(editedCustomer.email)
      setPassword(editedCustomer.password)
      setPhonenumber(editedCustomer.phonenumber)
    } 
  }, [editedCustomer]);

  const editcustomer = (e) => {
    e.preventDefault();
    const Customer = {
      id: customerId,
      name,
      phonenumber,
      email,
      password,
    };

    setTimeout(() => {
      alert(JSON.stringify(Customer, null, 2));
    }, 400);
    EditCustomer(dispatch, Customer);
    history.push("/listcustomer");
  };

  return (
    <>
      <Layout>
        <div className="row container-fluid">
          <div className="col-md-3"></div>
          <div className="col-md-5">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">ADD CUSTOMER</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form role="form" onSubmit={editcustomer}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phonenumber</label>
                    <input
                      type="number"
                      name="phonenumber"
                      className="form-control"
                      placeholder="Phone number"
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="exampleInputFile"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="exampleInputFile"
                        >
                          Choose file
                        </label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text" id>
                          Upload
                        </span>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div> */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default EditCustomer1;
