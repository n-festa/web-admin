// import node module libraries
import { Col, Row, Container,Table } from 'react-bootstrap';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";
// import sub components

export async function getStaticProps() {
  	const res = await fetch(`${SERVER_BASE_URL}v1/customer`);
  	//const res = await fetch(`http://localhost:3000/api/v1/admin`);
  	const repo = await res.json();
  	return { props: { repo } };
}

const Customers = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Customers</h1>
						<div className="portlet-title">
							<div className="dt-buttons btn-group flex-wrap">
								<Link href="/customer/create" className="btn btn-secondary action-item btn-primary">
									<i className="fa fa-plus"></i> Create
								</Link>
							</div>
						</div>

						<Table striped bordered hover>
						    <thead>
						        <tr >
						          	<th>#</th>
						          	<th>Name</th>
						          	<th>Phone</th>
						          	<th>Email</th>
						          	<th>Status</th>
						          	<th>Operations</th>
						        </tr>
						    </thead>
						    <tbody>
							{result && result.map((item)=>
							    <tr key={item.id}>
							        <td>{item.id}</td>
							        <td>{item.name}</td>
							        <td>{item.phone}</td>
							        <td>{item.email}</td>
							        <td>{item.status}</td>
							        <td>
							          	<a href={`/customer/${item.id}`} className="btn btn-sm btn-icon btn-primary me-2">
                        					<i className="fa fa-edit"></i>
    										<span className="sr-only">Edit</span>
										</a>

										<a href="#" className="btn btn-sm btn-icon btn-danger" >
                        					<i className="fa fa-trash"></i>
										    <span className="sr-only">Delete</span>
										</a>
							        </td>
							    </tr>
							) }
						   	</tbody>
						</Table>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default Customers;
