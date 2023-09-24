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
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingSpinner from "../../components//common/LoadingSpinner";

import { SERVER_BASE_URL, DEFAULT_LIMIT ,SERVER_TEST_URL,SERVER_LOCAL_URL} from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";


type CatesType = {
  name: string;
  description: string;
  status : int;
  icon: string;
  order: string;
  is_featured : string
   is_default : string
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${SERVER_BASE_URL}/categories/${pid}`);
  const result = await res.json();
  const admin = result.data.result
  return {
    props: {
      cate,
    },
  }
}

const CatesID = ({ cate }: CatesType) => {
  const [isLoading, setLoading] = React.useState(false);
  const handleSubmit = async (e) =>{
        e.prefenDefault();
        //setLoading(true);
        console.log("setLoading");

    }
    console.log(cate);
  return (
    <Container fluid className="p-6">
        <Row>
            <form onSubmit={handleSubmit} className="col-md-8 offset-2">
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Name</Form.Label>
                    <input  name="username"  type="text" id="username" 
                            className="form-control"  defaultValue={`${cate.name}`}
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
        </Row>
    </Container>
    )
}

export default CatesID;





