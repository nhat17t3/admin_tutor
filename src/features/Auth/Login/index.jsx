import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SignIn } from "../../../api/authenticationAPI";

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = (e) => {
    e.preventDefault();
    const admin = {
      email,
      password,
    };

    setTimeout(() => {
      alert(JSON.stringify(admin, null, 2));
    }, 400);

    SignIn(dispatch, admin);
  };
  return (
    <>
     <div className="card card card-primary">
  <div className="card-header">
    <h3 className="card-title">Default Card Example</h3>
    <div className="card-tools">
      {/* Buttons, labels, and many other things can be placed here! */}
      {/* Here is a label for example */}
      <span className="badge badge-primary">Label</span>
    </div>
    {/* /.card-tools */}
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <p>ddd</p>
    <p>ddd</p>
    <p>ddd</p>
    <p>ddd</p>

    
  </div>
  {/* /.card-body */}
  <div className="card-footer">
    The footer of the card
  </div>
  {/* /.card-footer */}
</div>
{/* /.card */}

    </>
  );
}

export default Login;
