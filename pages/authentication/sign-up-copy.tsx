// import node module libraries
import React from "react";
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import AdminApi from "../../lib/api/admin";
// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";

const SignUp = () => {
    const [isLoading, setLoading] = React.useState(false);
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
        setLoading(true);
        console.log("as");

        try{ 
            const { data, status } = await AdminApi.register(
                username,
                email,
                password
            );
            if (status !== 200 && data?.errors) {
                setErrors(data.errors);
            }
            if (data?.user) {
                window.localStorage.setItem("user", JSON.stringify(data.user));
                mutate("user", data.user);
                Router.push("/");
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(true);
        }
    }

    return (
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
            <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                <Card className="smooth-shadow-md">
                    <Card.Body className="p-6">
                        <div className="mb-4">
                            <Link href="/">
                                <Image
                                  src="/images/brand/logo/logo-primary.svg"
                                  className="mb-2"
                                  alt=""
                                />
                            </Link>
                            <p className="mb-6">Please enter your user information.</p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username or email</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="username"
                                  placeholder="User Name"
                                  required=""
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  name="email"
                                  placeholder="Enter address here"
                                  required=""
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  name="password"
                                  placeholder="**************"
                                  required=""
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="confirm-password">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  name="confirm-password"
                                  placeholder="**************"
                                  required=""
                                />
                            </Form.Group>

                            <div className="mb-3">
                                <Form.Check type="checkbox" id="check-api-checkbox">
                                  <Form.Check.Input type="checkbox" />
                                  <Form.Check.Label>
                                    I agree to the <Link href="#"> Terms of Service </Link> and{" "}
                                    <Link href="#"> Privacy Policy.</Link>
                                  </Form.Check.Label>
                                </Form.Check>
                            </div>

                            <div>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Create Free Account
                                    </Button>
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
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

SignUp.Layout = AuthLayout;

export default SignUp;
