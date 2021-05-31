import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../Layout";

Main.propTypes = {};

function Main(props) {
  const dispatch = useDispatch();

  return (
    <>
      <ToastContainer />
      <Layout>
      <section className="content">
  <div className="container-fluid">
    {/* Small boxes (Stat box) */}
    <div className="row">
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-info " >
          <div className="inner">
            <h3>150</h3>
            <p>New Users</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-success">
          <div className="inner">
            <h3>53<sup style={{fontSize: '20px'}}>%</sup></h3>
            <p>New Posts</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>44</h3>
            <p>User Registrations</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
      <div className="col-lg-3 col-6">
        {/* small box */}
        <div className="small-box bg-danger">
          <div className="inner">
            <h3>65</h3>
            <p>Unique Visitors</p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph" />
          </div>
          <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
        </div>
      </div>
      {/* ./col */}
    </div>
    {/* /.row */}
    
  </div>{/* /.container-fluid */}
</section>

      </Layout>
    </>
  );
}

export default Main;
