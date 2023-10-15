// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';

// import sub components

const Ingredient = () => {
	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="mb-3 mb-md-0">
						<h1 className="mb-0 h2 fw-bold">Ingredient</h1>
						
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default Ingredient;
