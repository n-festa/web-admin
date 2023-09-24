import { Row, Col, Card, Form, Button, Image ,Container, Tab , Nav, Table} from "react-bootstrap";
import Link from "next/link";

import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";

const Store = () =>{
	return (
		<Container fluid className="p-6">
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
				Store
				</Col>
			</Row>
		</Container>
	)
}

export default Store;