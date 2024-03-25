import {
  Form,
  FormGroup,
  Label,
  Card,
  Input,
  FormText,
  Button,
  Container,
  CardHeader,
  CardBody,
} from "reactstrap";
import Base from "./Base";
import { useState } from "react";
import { registerUser } from "./services/loginApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    pasword: "",
    about: "",
  });

  const handleEventOnChange = (event, fieldName) => {
    console.log(event.target.value);
    setData({ ...data, [fieldName]: event.target.value });
  };

  const resetSignUpPage = () => {
    setData({
      username: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted");
    registerUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    resetSignUpPage();
    navigate("/login");
  };

  return (
    <Base>
      <Container>
        <Card>
          <CardHeader className="text-center">
            <h3>Enter your information to Register!!</h3>
          </CardHeader>
          <CardBody>
            <Form
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <FormGroup>
                <Label for="username">Full Name</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Enter Your Full Name"
                  type="text"
                  value={data.username}
                  onChange={(e) => {
                    handleEventOnChange(e, "username");
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="signupemail"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  value={data.email}
                  onChange={(e) => {
                    handleEventOnChange(e, "email");
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="signupassword"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={data.password}
                  onChange={(e) => {
                    handleEventOnChange(e, "password");
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Write about yourself</Label>
                <Input
                  id="about"
                  name="about"
                  type="textarea"
                  value={data.about}
                  onChange={(e) => {
                    handleEventOnChange(e, "about");
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="profilepicture" name="file" type="file" />
                <FormText>Upload your Profile Picture</FormText>
              </FormGroup>

              <FormGroup check>
                <Input type="checkbox" />{" "}
                <Label check>Agree Terms & Conditions</Label>
              </FormGroup>
              <Container className="text-center">
                <Button>Signup</Button>
                <Button
                  className="ms-2"
                  onClick={() => {
                    resetSignUpPage();
                  }}
                >
                  Reset
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
};

export default Signup;
