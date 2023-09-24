// import node module libraries
import React, { useState, FormEvent }  from "react";
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import AdminApi from "../../lib/api/admin";
// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignUp = () => {
    const [isLoading, setLoading] = React.useState(false);
   // const [isLoading, setLoading] = useState<boolean>(false)
    const [errors, setErrors] = React.useState([]);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const handleUsernameChange = React.useCallback(
        (e) => setUsername(e.target.value),
        []
    );
    const handleEmailChange = React.useCallback(
        (e) => setEmail(e.target.value),
        []
    );
    const handlePasswordChange = React.useCallback(
        (e) => setPassword(e.target.value),
        []
    );

    const handleSubmit = async (e) =>{
        e.prefenDefault();
        //setLoading(true);
        console.log("setLoading");

    }

    return (
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
            <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                <Card className="smooth-shadow-md">
                    <Card.Body className="p-6">
                        <div className="mb-4">
                            <Link href="/">
                                <Image src="/images/brand/logo/logo-primary.svg"  className="mb-2"  alt=""/>
                            </Link>
                            <p className="mb-6">Please enter your information.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <input 
                                    name="username" 
                                    placeholder="User Name" 
                                    type="text" id="username" 
                                    className="form-control"
                                    onChange={handleUsernameChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <input
                                    className="form-control "
                                    type="text"
                                    placeholder="Email"
                                  //  value={email}
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="**************"
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>

                            <div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                        {isLoading ? 'Loading...' : 'Submit'}
                                    </button>
                                </div>
                                <div className="d-md-flex justify-content-between mt-4">
                                  <div className="mb-2 mb-md-0">
                                    <Link href="/authentication/sign-in" className="fs-5">
                                      Already member? Login{" "}
                                    </Link>
                                  </div>
                                  <div>
                                    <Link
                                      href="/authentication/forget-password"
                                      className="text-inherit fs-5"
                                    >
                                      Forgot your password?
                                    </Link>
                                  </div>
                                </div>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

SignUp.Layout = AuthLayout;

export default SignUp;