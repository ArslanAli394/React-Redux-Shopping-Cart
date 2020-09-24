import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Search from "../components/Search";
import SideNav from "../components/SideNav";
import Cards from "..//components/Cards";

import { addToCart } from "../redux/actions/addToCart";

import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super();

    this.state = {
      products: props.product,
    };
  }
  addToCart = (product) => {
    this.props.addToCart(product);
  };

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs md="2">
              <SideNav handleAllItem={this.handleAllItem} />
            </Col>

            <Col xs md="9">
              <Search />
              <br />
              <Row>
                {this.props.product.map((product) => (
                  <Cards
                    product={product}
                    key={product.id}
                    addToCart={this.addToCart}
                    inCart={
                      this.props.cart.length > 0 &&
                      this.props.cart.filter((e) => e.product.id === product.id)
                        .length > 0
                    }
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product.filterProduct,
    cart: state.cart.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
