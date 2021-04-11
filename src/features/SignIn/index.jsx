import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

SignIn.propTypes = {
    
};

function SignIn(props) {
    return (
        <>
         <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                password: Yup.string()
                .required('Required'),
                email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
        <div className="hold-transition login-page">
        <div className="login-box ">
            <div className="card">
                <div className="card-body login-card-body">
                    <div style={{textAlign:'center'}}><h1>Login</h1></div>

                    <Form action="" method="post">
                        <div className=" mb-3">

                            <Field 
                            name='email'
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            />
                        <div style={{color:"red"}}><ErrorMessage  name="email"  /></div>
                        </div>
                        

                        <div className=" mb-3">

                            <Field
                            name='password'
                             type="password" 
                             className="form-control" 
                             placeholder="Password" 
                             />
                             <div style={{color:"red"}}><ErrorMessage  name="password"  /></div> 
                        </div>
                        

                        <div className="row">
                        
                        <div className="col">
                        <button type="submit" className="btn btn-success btn-block">Sign In</button>
                        </div>
                        
                    </div>
                    </Form>

                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                        </a>
                    </div>
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p className="mb-0">
                     <a href="register.html" className="text-center">Register a new membership</a>
                    </p>
            </div>
            </div>
        </div>
        </div>
        </Formik>
        </>
    );
}

export default SignIn;