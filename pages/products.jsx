// import node module libraries
import { Col, Row, Container,Table } from 'react-bootstrap';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";

// import sub components

const Products = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Products</h1>
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
						          <th>Image</th>
						          <th>Name</th>
						          <th>Price</th>
						          <th>Sku</th>
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

export default Products;
