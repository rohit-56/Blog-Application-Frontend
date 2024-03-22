import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Card,
  CardBody,
  CardHeader,
  Container,
  Button,
} from "reactstrap";
import Base from "./Base";
import { useState } from "react";
import { getTokenFromLoginDetails } from "./services/loginApi";
import { doLogin } from "./services/loggedIn";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const resetLoginForm = () => {
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  const handleLoginDetail = (event, fieldName) => {
    console.log(event.target.value);
    setLoginDetails({ ...loginDetails, [fieldName]: event.target.value });
  };

  const loginUser = (event) => {
    event.preventDefault();

    console.log(loginDetails);
    getTokenFromLoginDetails(loginDetails)
      .then((response) => {
        doLogin(response, () => {
          console.log("User Data is set in localstorage");
        });
        console.log("Success", response);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    resetLoginForm();
  };

  return (
    <Base>
      <Container className="mt-4">
        <Card
          className="text-center"
          style={{
            width: "600px",
          }}
        >
          <CardHeader>Login Page</CardHeader>
          <CardBody>
            <Form onSubmit={(e) => loginUser(e)}>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter you email"
                    type="text"
                    value={loginDetails.email}
                    onChange={(e) => {
                      handleLoginDetail(e, "email");
                    }}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={loginDetails.password}
                    onChange={(e) => {
                      handleLoginDetail(e, "password");
                    }}
                  />
                </Col>
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
};

export default Login;
