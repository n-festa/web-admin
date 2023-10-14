import { Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";
import Table from 'react-bootstrap/Table';

export async function getStaticProps() {
	const res = await fetch(`${SERVER_BASE_URL}v1/role`);
	  	//const res = await fetch(`http://localhost:3000/api/v1/admin`);
	 const repo = await res.json();
	 return { props: { repo } };
}

const Roles = ({repo}) => {
	const data = repo.data;
	const results = data.result;
	console.log(results);

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Roles</h1>
						<div className="portlet-title">
							<div className="dt-buttons btn-group flex-wrap">
								<Link href="/roles/create" className="btn btn-secondary action-item btn-primary">
									<i className="fa fa-plus"></i> Create
								</Link>
							</div>
						</div>

						<Table striped bordered hover>
						     <thead>
						        <tr >
						          <th>#</th>
						          <th>Name</th>
						          <th>Description</th>
						          <th>Operations</th>
						        </tr>
						    </thead>
						    <tbody>
							    {results && results.map((item)=>
							    	<tr key={item.id}>
							          <td>{item.id}</td>
							          <td>{item.name}</td>
							          <td>{item.description}</td>
							          <td>@Operations</td>
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

export default Roles;