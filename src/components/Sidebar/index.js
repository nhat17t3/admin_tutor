import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../features/Auth/authenticationSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to={"#"} className="brand-link">
        <img
          src="/img/AdminLTELogo.png"
          alt="Avatar"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE</span>
      </NavLink>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Hoàng Long Nhật
            </a>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink to={`/manage-admin`} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Admin</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listcustomer`} className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>Customers</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/listpost`} className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>Posts</p>
              </NavLink>
            </li>
            {/* <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>
                  Brands
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="{{url_for('brands')}}" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Brand Manager</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="{{url_for('addbrand')}}" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add Brand</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="{{url_for('product')}}" className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>
                  Product
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="{{url_for('product')}}" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Product Manager</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="{{url_for('addproduct')}}" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Add Product</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="{{ url_for('orders_manager')}}" className="nav-link">
                <i className="nav-icon fas fa-circle"></i>
                <p>Orders</p>
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className="nav-link ">
                <i className="nav-icon fas fa-cog"></i>
                <p>Settings</p>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <a href="/home" className="nav-link" onClick={() => dispatch(logout())}>
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </a>
            </li>
            <li className="nav-item">
              <NavLink to={`/login`} className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Login</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/register`} className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Register</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
