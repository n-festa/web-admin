// import node module libraries
import { Col, Row, Container,Table } from 'react-bootstrap';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";

// import sub components
export async function getStaticProps() {
  	const res = await fetch(`${SERVER_BASE_URL}v1/categories`);
  	//const res = await fetch(`http://localhost:3000/api/v1/admin`);
  	const repo = await res.json();
  	return { props: { repo } };
}

const Contact = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Contact</h1>
						<Table striped bordered hover>
						    <thead>
						        <tr >
						          <th>#</th>
						          <th>Subject</th>
						          <th>Status</th>
						          <th>Operations</th>
						        </tr>
						    </thead>
						    <tbody>
							   
						   	</tbody>
						</Table>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default Contact;
