import Header from "@Shared/Header/Header";
import Sidebar from "@Shared/Sidebar/Sidebar";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="container-fluid d-flex flex-column ">
        <Header />
        <div className="vh-75">
          <div className="container vh-75">
            <div className="row">
              <div className="col-md-6 p-2 vh-75">
                <Form className="m-auto" onSubmit={(e:any)=>e.preventDefault()}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a message here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between p-2">
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <h5>Technical Support</h5>
                                    <span>support@ascorptechnologies.com</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="d-flex flex-column">
                                    <h5>Sales Inquiry</h5>
                                    <span>sales@ascorptechnologies.com</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
