import React from "react";
import Base from "../Base";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  Container,
  Label,
  Row,
  Col,
} from "reactstrap";

const ProfileInfo = () => {
  return (
    <Base>
      <Container className="mt-2">
        <Label tag={"h2"} className="text-center">
          User Information
        </Label>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <Card className="mt-2 shadow-lg p-3 mb-5 bg-white rounded">
            <CardBody>
              <Row>
                <Col>
                  <Container>
                    <img alt="Sample" src="https://picsum.photos/300/200" />
                  </Container>
                </Col>
                <Col>
                  <Container>
                    <CardTitle tag={"h3"}>Username</CardTitle>
                    <CardSubtitle tag={"h6"}>rohitmou25@gmail.com</CardSubtitle>
                    <CardText className="my-2" tag={"h5"}>
                      About
                    </CardText>
                    <CardText
                      style={{
                        background: "#E5E4E2",
                        height: "80px",
                        width: "400px",
                      }}
                    >
                      I am Developer
                    </CardText>
                    <Button color="primary">Edit Profile</Button>
                  </Container>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </Container>
    </Base>
  );
};

export default ProfileInfo;
