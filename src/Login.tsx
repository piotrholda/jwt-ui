import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col className="col-lg-6 p-3 bg-light">
          <h1>Login</h1>
          <Form>
            <Form.Group className="row mb-3" controlId="formBasicEmail">
              <Form.Label className="col-sm-3 col-form-label col-form-label-sm">Email address</Form.Label>
              <Col className="col-sm-9">
                <Form.Control type="email" />
              </Col>
            </Form.Group>
            <Form.Group className="row mb-3" controlId="formBasicPassword">
              <Form.Label className="col-sm-3 col-form-label col-form-label-sm">Password</Form.Label>
              <Col className="col-sm-9">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;