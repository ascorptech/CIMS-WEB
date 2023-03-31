import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import logo  from '../../assets/CIMS.png'

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate()
  const onLogin = (event:any)=>{
    event.preventDefault();
    // <Navigate to={'/dashboard'} replace={true}/>
    navigate('/dashboard',{replace:true})
  }
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-6 m-auto">
          {/* <h1 className="text-center">Login</h1> */}
          <Card className="p-2">
            <Form onSubmit={onLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </div>
        <div className="col-md-12">
          <p className="text-center text-muted text-gradient">Beta Version 1.0.0</p>
          <p className="text-center text-muted text-gradient">Powered By <br/>ASCORP TECHNOLOGIES</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
