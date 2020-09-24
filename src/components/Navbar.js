import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    this.props.cartUpdated();

    let total = 0;

    this.props.cart.map(
      (item) => (total += item.product.price * item.quantity)
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" exact>
          <div className="navbar-brand" href="#">
            Four Wheels
          </div>
        </Link>
        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item active text-light px-3">Home</li>
          </Link>
          <Link to="/login">
            <li className="nav-item text-light px-3">Log in</li>
          </Link>{" "}
          <Link to="/signup">
            <li className="nav-item text-light px-3">Sign Up</li>
          </Link>
          <li className="nav-item text-light px-3">
            <Link to="/my-cart">
              {this.props.cart.length > 0 ? (
                <span className="label label-info">
                  {this.props.cart.length} items: (${total.toFixed(2)})
                </span>
              ) : null}
              My Cart
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    cartUpdated: () => {
      return true;
    },
  };
};

export default connect(mapStateToProps)(Navbar);
