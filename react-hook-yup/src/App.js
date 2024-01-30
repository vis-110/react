import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const schema = yup.object().shape({
  fname: yup
    .string()
    .required("First Name is mandatory")
    .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
    .min(3, "Mininum 3 character required")
    .max(26, "Enter upto 26 character only"),
  lname: yup
    .string()
    .required("Last Name is mandatory")
    .matches(/^[A-Za-z ]*$/, "Enter alphabets only")
    .min(3, "Mininum 3 character required")
    .max(26, "Enter upto 26 character only"),
  email: yup
    .string()
    .required("Email is mandatory")
    .email("Please enter valid email"),
  age: yup
    .number()
    .typeError("Age is mandatory")
    .required()
    .integer()
    .positive()
    .min(0, "You must be at least 0 ")
    .max(110, "You must be at most 110"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Minimum 4 character required")
    .max(16, "Enter upto 15 character only"),
  Retypepassword: yup
    .string()
    .required("Retypepassword is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});



function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      <div>
        <Card
          border="Secondary "
          className="m-auto my-5"
          style={{ width: "35rem" }}
        >
          <Card.Header className="text-center fs-5">
            Registration Form
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  
                  alert(JSON.stringify(data)+"Data added successfully");
                })}
                className="formStyle text-center my-3"
              >
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    FirstName
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("fname")}
                      placeholder="FirstName"
                      className="m-auto"
                      type="text"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.fname?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    LastName
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("lname")}
                      placeholder="LastName"
                      type="text"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.lname?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    Email
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("email")}
                      placeholder="Email"
                      type="email"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.email?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    Age
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("age")}
                      placeholder="Age"
                      type="text"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.age?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    Password
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("password")}
                      placeholder="Password"
                      type="password"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.password?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="4" className="m-auto">
                    Retype Password
                  </Form.Label>
                  <Col sm="8" className="">
                    <Form.Control
                      {...register("Retypepassword")}
                      placeholder="Retype Password"
                      type="password"
                    />
                  </Col>
                  <Row>
                    <Col sm="4"></Col>
                    <Col sm="8">
                      <h6 sm="5" className="text-danger mt-3">
                        {errors.Retypepassword?.message}
                      </h6>
                    </Col>
                  </Row>
                </Form.Group>
                <Button
                  type="submit"
                  className="px-3 py-1 fs-6 my-3"
                  data-bs-theme="dark"
                  variant="info"
                >
                  Submit
                </Button>{" "}
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
