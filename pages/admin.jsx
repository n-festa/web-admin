// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Link from 'next/link';
import { SERVER_BASE_URL,SERVER_LOCAL_URL } from "../utils/constant";
import Table from 'react-bootstrap/Table';

export async function getStaticProps() {
  	const res = await fetch(`${SERVER_BASE_URL}v1/admin`);
  	//const res = await fetch(`http://localhost:3000/api/v1/admin`);
  	const repo = await res.json();
  	return { props: { repo } };
}

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

const Admin = ({repo}) => {
	const data = repo.data;
	const result = data.result;
	if (!data) return <div>Loading...</div>
	//console.log(result);
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Admin</h1>
						<div className="portlet-title">
							<div className="dt-buttons btn-group flex-wrap">
								<Link href="" className="btn btn-secondary action-item btn-primary">
									<i className="fa fa-plus"></i> Create
								</Link>
							</div>
						</div>
							
						<BootstrapTable data={ result } >
						    <TableHeaderColumn dataField='id' isKey> ID</TableHeaderColumn>
						    <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
						    <TableHeaderColumn dataField='phone'> Phone</TableHeaderColumn>
						    <TableHeaderColumn dataField='email'> Email</TableHeaderColumn>
						</BootstrapTable>

						<h2>Table 2
						</h2>
						<Table striped bordered hover>
						     <thead>
						        <tr >
						          <th>#</th>
						          <th>Name</th>
						          <th>Phone</th>
						          <th>Email</th>
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
							          <td>Operations</td>
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

export default Admin;
