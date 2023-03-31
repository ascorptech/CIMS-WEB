import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

type Props = {};

const StudentAdd = (props: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} className="d-flex justify-content-between">
          <h2 className="text-left text-muted">Student Registration</h2>
        </Col>
        <Col>
          <Row>
            <Col md={12} className="border">
              <Form>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Aadhar No.</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your address"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Highest Qualification</Form.Label>
                        <Form.Control type="text" placeholder="High School" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control type="text" placeholder="Jhon" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Marry" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Course</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Course</option>
                          <option value="C">C</option>
                          <option value="C++">C++</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Parents No.</Form.Label>
                        <Form.Control type="text" placeholder="+918978787675" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Choose Profile Picture</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-end">
                  <Button className="m-2 btn-secondary">Cancel</Button>
                  <Button className="m-2 ">Save</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentAdd;
