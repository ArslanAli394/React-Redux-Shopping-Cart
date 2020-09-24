import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/cart/Cart";
import { connect } from "react-redux";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/signup" component={SignUp}>
            <SignUp />
          </Route>
          <Route path="/" exact component={Main}>
            <Main />
          </Route>
          <Route path="/my-cart" component={Cart} />

          <Redirect path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
