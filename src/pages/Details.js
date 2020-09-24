import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

const Details = (props) => {
  return (
    <>
      <Container>
        <Card>
          <Row>
            <Col xs md="4">
              <Card.Img variant="top" />
            </Col>
            <Col xs md="6">
              <Card.Body>
                <Card.Text>this is detail</Card.Text>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
export default Details;
