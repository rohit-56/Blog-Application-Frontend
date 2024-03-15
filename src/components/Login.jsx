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
const Login = () => {
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
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter you email"
                    type="email"
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
                  />
                </Col>
              </FormGroup>
            </Form>
            <Button>Login</Button>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
};

export default Login;
