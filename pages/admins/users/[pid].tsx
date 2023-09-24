import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";
// import authlayout to override default layout
import AuthLayout from "layouts/AuthLayout";
import ArticleList from "../../components/article/ArticleList";
import {HoverableRowsCode,} from 'data/code/TablesCode';
import { HighlightCode }  from 'widgets';

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import ErrorMessage from "../../../components/common/ErrorMessage";
import LoadingSpinner from "../../../components//common/LoadingSpinner";
import { usePageState } from "../../../lib/context/PageContext";
import {
  usePageCountState,
  usePageCountDispatch,
} from "../../../lib/context/PageCountContext";
import useViewport from "../../../lib/hooks/useViewport";
import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../../../lib/utils/constant";
import fetcher from "../../../lib/utils/fetcher";

type AdminType = {
  phone: string;
	name: string;
	email: string;
	avatar : int;
	username: string;
	password: string;
	status : string
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${SERVER_BASE_URL}/admin/${pid}`);
  const result = await res.json();
  const admin = result.data.result
  return {
    props: {
      admin,
    },
  }
}


const AdminsID = ({ admin }: AdminType) => {
	const [isLoading, setLoading] = React.useState(false);
	const handleSubmit = async (e) =>{
        e.prefenDefault();
        //setLoading(true);
        console.log("setLoading");

    }

	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<form onSubmit={handleSubmit} className="col-md-8 offset-2">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <input  name="username"  type="text" id="username" 
                                    className="form-control"  defaultValue={`${admin.username}`}
                                />
                        </Form.Group>  
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <input  name="email"  type="text" id="email" 
                                    className="form-control"  defaultValue={`${admin.email}`}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <input  name="name"  type="text" id="name" 
                                    className="form-control"  defaultValue={`${admin.name}`}
                                />
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <input  name="phone"  type="text" id="phone" 
                                    className="form-control"  defaultValue={`${admin.phone}`}
                                />
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

//Admins.Layout = AuthLayout;
export default AdminsID;