import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = function Login() {
  return (
    <>
      <Container className="my-5">
        <h3 className="text-info text-center">Login</h3>
        <Row>
          <Col></Col>
          <Col xs lg="8">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User Name" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
