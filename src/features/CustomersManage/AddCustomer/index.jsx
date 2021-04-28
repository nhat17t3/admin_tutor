import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SignUp } from "../../../api/authenticationAPI";
import Layout from "../../../components/Layout";
import { NewCustomer } from "../../../api/customersApi";
import { useHistory, useParams } from "react-router-dom";

AddCustomer.propTypes = {};

function AddCustomer(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addcustomer = (e) => {
    e.preventDefault();
    const Customer = {
      name,
      phonenumber,
      email,
      password,
    };

    setTimeout(() => {
      alert(JSON.stringify(Customer, null, 2));
    }, 400);
    NewCustomer(dispatch, Customer);
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
              <form role="form" onSubmit={addcustomer}>
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
                    Submit
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

export default AddCustomer;
