import React, { useState, useRef, useEffect } from "react";
import Base from "../Base";
import JoditEditor from "jodit-react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Button,
} from "reactstrap";
import { getAllCategories } from "../services/category-service";
import { getUserDetails } from "../services/loggedIn";
import { createBlog, getAllBlog } from "../services/post-service";
const AddPost = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        console.log(response);
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editor = useRef(null);
  // const [content, setContent] = useState("");

  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const handleEventOnChange = (event, fieldName) => {
    console.log(event.target.value);
    setPostDetails({ ...postDetails, [fieldName]: event.target.value });
  };

  const resetPostForm = () => {
    setPostDetails({
      title: "",
      content: "",
      categoryId: "",
    });
    //setContent("");
  };

  const fetchUserAndTokenDetails = () => {
    return JSON.parse(getUserDetails());
  };
  const submitPostForm = (event) => {
    event.preventDefault();
    console.log(postDetails);

    const userAndTokenDetails = fetchUserAndTokenDetails();
    const details = postDetails;
    details.userId = userAndTokenDetails.userId;
    details.token = userAndTokenDetails.token;
    console.log(details);
    createBlog(details)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Base>
      <Container>
        <Form onSubmit={(event) => submitPostForm(event)}>
          <FormGroup tag="h2">
            <Label for="header">What going on your mind ?</Label>
          </FormGroup>
          <FormGroup tag="h5">
            <Label for="title">Post Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Add Title for your Blog"
              type="text"
              value={postDetails.title}
              onChange={(e) => {
                handleEventOnChange(e, "title");
              }}
            />
          </FormGroup>
          <FormGroup tag="h5">
            <Label for="content">Write Content</Label>
            <JoditEditor
              ref={editor}
              value={postDetails.content}
              onChange={(newContent) => {
                //setContent(newContent);
                setPostDetails({ ...postDetails, content: newContent });
                console.log(newContent);
              }}
            />
          </FormGroup>

          <FormGroup row tag="h5">
            <Label for="exampleSelect" sm={2}>
              Select Category
            </Label>
            <Col sm={10}>
              <Input
                id="exampleSelect"
                name="category"
                type="select"
                defaultValue={0}
                onChange={(e) => {
                  setPostDetails({
                    ...postDetails,
                    categoryId: e.target.value,
                  });
                }}
              >
                <option disabled value={0}>
                  --Select Category--
                </option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.title}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>

          <Container className="text-center">
            <Button color="primary">Create Post</Button>
            <Button
              color="danger mx-2"
              onClick={() => {
                resetPostForm();
              }}
            >
              Reset Content
            </Button>
          </Container>
        </Form>
      </Container>
    </Base>
  );
};

export default AddPost;
