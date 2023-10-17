// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import AuthLayout from "layouts/AuthLayout";

const Index = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    async function onSubmit(event) {
        event.preventDefault();
        try {
			if (   email != "" && password != "" ) {
			 	const formData = {
		          	email: email,
		          	password: password
		      	}
                console.log(formData);
                /*
		      	const add = await fetch(`${SERVER_BASE_URL}v1/admin`, {
			        method: 'POST',
			        headers: {
			          'Content-Type': 'application/json'
			        },
			        body: JSON.stringify(formData)
			    });

			    const content = await add.json();
			    console.log(content);
			    if(content.type ==="success"){
			        router.push("/dashboard");
			    }*/
			}
		}catch (error) {
	      	console.error(error)
	    }finally {
	      //	setIsLoading(false)
	    }

        

    }

    return (
        <Row className="align-items-center justify-content-center g-0 min-vh-100">
            <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                <Card className="smooth-shadow-md">
                    <Card.Body className="p-6">
                        <div className="mb-4">
                            <Link href="/">
                                <Image src="/images/brand/logo/logo-primary.svg"  className="mb-2"  alt="" />
                            </Link>
                            <p className="mb-6">Please enter your user information.</p>
                        </div>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label> Email</Form.Label>
                                <Form.Control  type="email" placeholder="Enter email here" onChange={(e)=>setEmail(e.target.value)}  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  name="password" placeholder="**************" onChange={(e)=>setPassword(e.target.value)} />
                            </Form.Group>

                            <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                <Form.Check type="checkbox" id="rememberme">
                                  <Form.Check.Input type="checkbox" />
                                  <Form.Check.Label>Remember me</Form.Check.Label>
                                </Form.Check>
                            </div>
                            <div>
                            <div className="d-grid">
                                <Button variant="primary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                            <div className="d-md-flex justify-content-between mt-4">
                                <div>
                                    <Link  href="/authentication/forget-password"  className="text-inherit fs-5"  >
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

Index.Layout = AuthLayout;

export default Index;
