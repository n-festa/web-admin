// import node module libraries
import { Col, Row, Container } from 'react-bootstrap';
import React, { useState } from 'react'

const AdminCreate = () => {
	const [isLoading, setIsLoading] = useState(false)
  	const [error, setError] = useState(null)
 	const [name, setName] =useState('');

	async function onSubmit(event) {
	    event.preventDefault()
	    setIsLoading(true)
	    setError(null) // Clear previous errors when a new request starts
	 	console.log(name);
	 	if (name!="") {
	 		const formData = {
          		name: name,
      		}
      		const add = await fetch('http://localhost:3000/api/v1/role', {
		        method: 'POST',
		        headers: {
		          'Content-Type': 'application/json'
		        },
		        body: JSON.stringify(formData)
		    });
	 	}
	}

	return (
		<Container fluid className="p-6">
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-0 h2 fw-bold">AdminCreate</h1>
							<div>
						      	{error && <div style={{ color: 'red' }}>{error}</div>}
						      <form onSubmit={onSubmit}>
						        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
						        <button type="submit" disabled={isLoading}>
						          {isLoading ? 'Loading...' : 'Submit'}
						        </button>
						      </form>
    						</div>
						</div>
					</div>
				</Col>
			</Row>		
		</Container>
	);
};

export default AdminCreate;
