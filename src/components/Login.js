import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import login from "./login.png";

const Login = () => {
  return (
    <Container>
      <img
        src={login}
        alt="mythology"
        className="rounded mx-auto d-block mt-5"
        width="150"
        height="auto"
      />
      <Row>
        <Col sm="12" className="mt-5" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Type a email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Type a password "
              />
            </FormGroup>
            <Button className="btn btn-info float-right ">Register</Button>
            <Button className="btn btn-success float-right mr-3">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
