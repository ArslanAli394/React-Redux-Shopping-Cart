import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

class Cards extends Component {
  state = {
    inCart: this.props.inCart,
  };

  addToCart = (e) => {
    e.preventDefault();

    this.props.addToCart(this.props.product);

    this.setState({
      inCart: true,
    });
  };
  render() {
    const { product } = this.props;

    return (
      <>
        <Col xs lg="4">
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Text>{product.name}</Card.Text>
              <Card.Text>{product.type}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <b>{product.price}</b>

              {this.state.inCart ? (
                <span className="btn btn-success float-right">
                  Added to cart
                </span>
              ) : (
                <span
                  onClick={this.addToCart}
                  className="btn btn-sm btn-primary float-right"
                >
                  Add to cart
                </span>
              )}
            </Card.Footer>
          </Card>
        </Col>
      </>
    );
  }
}

export default Cards;
