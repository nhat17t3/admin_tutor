import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./features/SignIn";
import Register from "./features/Register";
import ListStudent from "./features/Admin/ListStudent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Layout} />
          <Route path="/signin" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/liststudent" component={ListStudent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
