import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../../../lib/utils/constant";


type RegisterMail = {
  	email: string;
  	phone: string;
  	name: string;
  	username: string;
  	password: string;
}

export async function postData(url = '', data = {}) {
	const response = await fetch(url, {
	    method: 'POST', 
	    mode: 'cors',
	    cache: 'no-cache',
	    credentials: 'same-origin',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    redirect: 'follow', 
	    referrerPolicy: 'no-referrer', 
	    body: JSON.stringify(data) 
	});
	return response.json();
}

const UserCreate = () =>{
	const [isLoading, setLoading] = React.useState(false);
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async (data: RegisterMail) => {
		console.log(data);
	    
	    /*
	    const res = await postData(`${SERVER_LOCAL_URL}/admin/`, {
	      	email: data.email,
		  	phone: data.phone,
		  	name: data.name,
		  	username: data.username,
		  	password: data.password,
	    });
	    */
	};

	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<form className="col-md-8 offset-2" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <input  name="email"  type="text" id="email"  className="form-control"   />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <input  name="name"  type="text" id="name"  className="form-control"    />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <input  name="phone"  type="text" id="phone"  className="form-control"  />
                        </Form.Group>  
                         <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <input  name="username"  type="text" id="username"   className="form-control"  />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <input  name="password"  type="text" id="password"   className="form-control"  />
                        </Form.Group> 
                        <div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                    {isLoading ? 'Loading...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
				</Col>
			</Row>
		</Container>
	)
}

export default UserCreate;
