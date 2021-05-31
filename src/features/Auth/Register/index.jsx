import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SignUp } from "../../../api/authenticationAPI";
import { Link } from "react-router-dom";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminRegister = (e) => {
    e.preventDefault();
    const admin = {
      username,
      phonenumber,
      email,
      password,
      role : ["admin"],
    };

  ;

    SignUp(dispatch, admin);
  };

  return (
    <>
      <div className="hold-transition register-page">
        <div className="register-box">
          {/* <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div> */}
          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg h2">REGISTER</p>

              <form action="" method="post" onSubmit={adminRegister}>
                <div className=" mb-3">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className=" mb-3">
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

                <div className=" mb-3">
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

                <div className=" mb-3">
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
                {/* <Field type="password" className="form-control" placeholder="Retype password" /> */}

                <div className="row">
                  {/* <div className="col-8">
                      <div className="icheck-primary">

                        <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div> */}

                  <div className="col">
                    <button type="submit" className="btn btn-success btn-block">
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" />
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" />
                  Sign up using Google+
                </a>
              </div>
              <Link to="/login" className="text-center">
                I already have a membership
              </Link>
            </div>
            {/* /.form-box */}
          </div>
          {/* /.card */}
        </div>
        {/* /.register-box */}
      </div>
    </>
  );
}

export default Register;
