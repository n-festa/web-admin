// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Link from 'next/link';

const roles = [];

function addRoles(quantity) {
  const startId = roles.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    roles.push({
      id: id,
      name: 'Admin ' + id,
      description: 'description ' + id,
    });
  }
}

addRoles(5);

const Roles = () => {
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
						<BootstrapTable data={ roles } pagination={ true }>
						    <TableHeaderColumn dataField='id' isKey> ID</TableHeaderColumn>
						    <TableHeaderColumn dataField='name'> Name</TableHeaderColumn>
						     <TableHeaderColumn dataField='description'> Description</TableHeaderColumn>
						</BootstrapTable>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default Roles;