import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./features/Auth/Login";
import Register from "./features/Auth/Register";
import { GetProfile } from "./api/authenticationAPI";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ListPost from "./features/PostsManage/ListPost";
import InforPost from "./features/PostsManage/InforPost";
import ListCustomer from "./features/CustomersManage/ListCustomer";
import AddCustomer from "./features/CustomersManage/AddCustomer";
import EditCustomer from "./features/CustomersManage/Editcustomer";
import EditCustomer1 from "./features/CustomersManage/Editcustomer";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      GetProfile(dispatch, token);
      // dispatch(userAuthenticated({ token: token }));
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (isLoggedIn ? <ListCustomer /> : <Login />)}
          />
          <Route
            path="/register"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Register />)}
          />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Redirect to="/home" /> : <Login />)}
          />

          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Layout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/listpost" component={ListPost} />
          {/* <Route path="/listpostedit/:postId" component={AddEditPost} /> */}
          {/* <Route path="/addpost" component={AddEditPost} /> */}
          <Route path="/postview/:postId" component={InforPost} />

          <Route path="/listcustomer" component={ListCustomer} />
          <Route path="/customeredit/:customerId" component={EditCustomer1} />
          <Route path="/addcustomer" component={AddCustomer} />
          {/* <Route path="/customerview/:customerId" component={InforCustomer} /> */}

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
