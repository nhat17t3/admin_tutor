import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

Register.propTypes = {
    
};

function Register(props) {
    return (
        <>
        <Formik
            initialValues={{ 
              name: '',
              email: '',
              phonenumber: '',
              password: '',
             }}
            validationSchema={Yup.object({
                password: Yup.string()
                .required('Required'),
                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
                name: Yup.string()
                .required('Required'),
                phonenumber: Yup.number()
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
        <div className="hold-transition register-page">
          <div className="register-box">
            <div className="register-logo">
              <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>


                <Form action="" method="post">
                    <div className=" mb-3">
                    <Field type="text" name='name' className="form-control" placeholder="Full name" />
                    <div style={{color:"red"}}><ErrorMessage  name="name"  /></div> 
                    </div>
                  
                    <div className=" mb-3">
                    <Field type="email" name='email' className="form-control" placeholder="Email" />
                    <div style={{color:"red"}}><ErrorMessage  name="email"  /></div> 
                    </div>

                    <div className=" mb-3">
                    <Field type="number" name='phonenumber' className="form-control" placeholder="Phone number" />
                    <div style={{color:"red"}}><ErrorMessage  name="phonenumber"  /></div> 
                    </div>

                    <div className=" mb-3">
                    <Field type="password" name='password' className="form-control" placeholder="Password" />
                    <div style={{color:"red"}}><ErrorMessage  name="password"  /></div> 
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
                    {/* /.col */}
                    <div className="col">
                      <button type="submit" className="btn btn-success btn-block">Register</button>
                    </div>
                    {/* /.col */}
                  </div>
                </Form>



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
                <a href="login.html" className="text-center">I already have a membership</a>
              </div>
              {/* /.form-box */}
            </div>{/* /.card */}
          </div>
  {/* /.register-box */}
        </div>
        </Formik>
        </>
    );
}

export default Register;