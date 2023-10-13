// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";

// import authlayout to override default layout
import { useRouter } from 'next/router'
import AuthLayout from "layouts/AuthLayout";

const Index = () => {
    const router = useRouter()
  //  const [route, setRoute] = useState()
   
    async function onSubmit(event) {
        event.preventDefault();
        router.push("/dashboard");
        /* 
        const formData = new FormData(event.target)
        const response = await fetch('/api/submit', {
          method: 'POST',
          body: formData,
        })
     
        // Handle response if necessary
        const data = await response.json()
    
        */
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
                                <Form.Label>Username or email</Form.Label>
                                <Form.Control  type="email" placeholder="Enter address here" required=""  />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  name="password" placeholder="**************" required="" />
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
                                <div className="mb-2 mb-md-0">
                                    <Link href="/authentication/sign-up" className="fs-5">
                                        Create An Account{" "}
                                    </Link>
                                </div>
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
